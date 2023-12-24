"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, PlusCircle } from "lucide-react";
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

import { cn } from "@/lib/utils";

import { useCreateQuizQuestionMutation } from "@/redux/api/quizApi";
import { onOpen } from "@/redux/features/modal/modalSlice";
import { useDispatch } from "react-redux";
import { ChaptersList } from "./chapters-list";
import QuizOption from "./quizOption";

interface ChaptersFormProps {
  initialData: any & { chapters: any[] };
  courseId: string;
}

const formSchema = z.object({
  text: z.string().min(1),
  quizId: z.string().optional(),
  courseId: z.string().optional(),
  position: z.number().optional(),
});

export const ChaptersForm = ({ initialData, courseId }: ChaptersFormProps) => {
  const [isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [editId, setEditId] = useState<string>("");
  // const { data, isLoading } = useGetLastQuizQuestionsQuery(initialData.id);
  const [CreateQuizQuestion] = useCreateQuizQuestionMutation();
  const toggleCreating = () => {
    setIsCreating((current) => !current);
  };
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      text: "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    values.quizId = initialData.id;
    console.log(values);
    try {
      const res = await CreateQuizQuestion(values);
      console.log(res);
      toast.success("Chapter quizzes");
      toggleCreating();
      window.location.reload();
    } catch {
      toast.error("Something went wrong");
    }
  };

  const onReorder = async (updateData: { id: string; position: number }[]) => {
    try {
      setIsUpdating(true);
      // await reorder({ list: updateData });
      toast.success("Chapters reordered");
      router.refresh();
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsUpdating(false);
    }
  };
  const dispatch = useDispatch();
  const onEdit = (id: string) => {
    setEditId(id);
    // router.push(`/dashboard/teacher/courses/${courseId}/chapters/${id}`);
    dispatch(onOpen());
  };

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="relative mt-6 border bg-slate-100 rounded-md p-4">
      <QuizOption questionId={editId} />

      {isUpdating && (
        <div className="absolute h-full w-full bg-slate-500/20 top-0 right-0 rounded-m flex items-center justify-center">
          <Loader2 className="animate-spin h-6 w-6 text-sky-700" />
        </div>
      )}
      <div className="font-medium flex items-center justify-between">
        Create questions
        <Button onClick={toggleCreating} variant="ghost">
          {isCreating ? (
            <>Cancel</>
          ) : (
            <>
              <PlusCircle className="h-4 w-4 mr-2" />
              Add questions
            </>
          )}
        </Button>
      </div>
      {isCreating && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      placeholder="e.g. 'Introduction to the course'"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={!isValid || isSubmitting} type="submit">
              Create
            </Button>
          </form>
        </Form>
      )}
      {!isCreating && (
        <div
          className={cn(
            "text-sm mt-2",
            !initialData?.chapters?.length && "text-slate-500 italic"
          )}
        >
          {!initialData?.chapters?.length && "No questions added yet"}
          <ChaptersList
            onEdit={onEdit}
            onReorder={onReorder}
            items={initialData?.questions || []}
          />
        </div>
      )}
      {!isCreating && (
        <p className="text-xs text-muted-foreground mt-4">
          Drag and drop to reorder the questions
        </p>
      )}
    </div>
  );
};
