import { Copy, TrashIcon } from "lucide-react";
import { toast } from "react-hot-toast";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useUpdateQuizQuestionMutation } from "@/redux/api/quizApi";

interface ApiAlertProps {
  title: string;
  description: string;
  initialData?: any;
}

export const OptionList: React.FC<ApiAlertProps> = ({
  title,
  description,
  initialData,
}) => {
  const [updateQuizQuestion] = useUpdateQuizQuestionMutation();

  const onCopy = (description: string) => {
    navigator.clipboard.writeText(description);
    toast.success("API Route copied to clipboard.");
  };

  const handelDeleteOption = async (option: string) => {
    const values = initialData.options.filter((item: any) => item !== option);

    try {
      await updateQuizQuestion({
        id: initialData?.id,
        data: { options: values },
      });

      toast.success("Option deleted.");
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <Alert>
      <AlertDescription className=" flex items-center justify-between">
        <p className="border border-black px-1  rounded-full">{title}</p>
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
          {description}
        </code>
        <div className="flex gap">
          <Button variant="link" size="sm" onClick={() => onCopy(description)}>
            <Copy className="h-3 w-3" />
          </Button>
          <button onClick={() => handelDeleteOption(description)}>
            <TrashIcon className="h-3 w-3 text-red-500" />
          </button>
        </div>
      </AlertDescription>
    </Alert>
  );
};
