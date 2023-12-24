"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Pencil } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useUpdateQuizQuestionMutation } from "@/redux/api/quizApi";
// ... (your existing imports)

interface OptionsFormProps {
  initialData: any;
}

const optionsFormSchema = z.object({
  options: z.string().min(1), // Assuming there should be at least 4 options
});

export const OptionsForm = ({ initialData }: OptionsFormProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const [updateQuizQuestion] = useUpdateQuizQuestionMutation();

  const toggleEdit = () => setIsEditing((current) => !current);

  const router = useRouter();
  const form = useForm<z.infer<typeof optionsFormSchema>>({
    resolver: zodResolver(optionsFormSchema),
  });

  const { formState, reset } = form;

  const { isSubmitting, isValid } = formState;
  const isEditingOptions = initialData?.options?.length >= 4;
  const onSubmit = async (values: z.infer<typeof optionsFormSchema>) => {
    const arr = [...initialData.options, values.options];
    try {
      await updateQuizQuestion({
        id: initialData?.id,
        data: { options: arr },
      });
      reset();
      toast.success("Options updated");
      toggleEdit();
      router.refresh();
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="border bg-slate-100 rounded-md p-4 mt-2">
      <div className="font-medium flex items-center justify-between">
        Options
        <Button
          disabled={isEditingOptions}
          onClick={toggleEdit}
          variant="ghost"
        >
          {isEditing ? (
            <>Cancel</>
          ) : (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Edit Options
            </>
          )}
        </Button>
      </div>

      {isEditing && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            <FormField
              control={form.control}
              name="options"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="Enter option"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Button disabled={!isValid || isSubmitting} type="submit">
                Save
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
};
