"use client";

import { Banner } from "@/components/banner";
import { OptionList } from "@/components/optionList";
import UseModal from "@/components/reusable-ui/use-modal";
import { Button } from "@/components/ui/button";
import {
  useGetQuestionByIdQuery,
  useUpdateQuizQuestionMutation,
} from "@/redux/api/quizApi";
import React from "react";
import toast from "react-hot-toast";
import { QuestionsAnswerForm } from "./question-answer-form";
import { OptionsForm } from "./question-option-form";
import { QuestionsTitleForm } from "./question-title-form";

interface QuizOptionProps {
  questionId: string;
}

const QuizOption: React.FC<QuizOptionProps> = ({ questionId }) => {
  const { data, isLoading } = useGetQuestionByIdQuery(questionId);

  const [UpdateQuizQuestion] = useUpdateQuizQuestionMutation();
  const requiredFields = [data?.text, data?.options?.length >= 4, data?.answer];

  const totalFields = requiredFields?.length;
  const completedFields = requiredFields?.filter(Boolean).length;
  const completionText = `(${completedFields}/${totalFields})`;

  const handelPublished = async () => {
    if (data?.isPublished) {
      await UpdateQuizQuestion({ id: data?.id, data: { isPublished: false } });
    } else {
      await UpdateQuizQuestion({ id: data?.id, data: { isPublished: true } });
    }

    toast.success("Quiz published");
    window.location.reload();
  };
  if (isLoading) return <div>Loading...</div>;

  return (
    <UseModal title="Create Quiz Questions" description={data?.text}>
      {!data?.isPublished && (
        <Banner
          label={`Complete all fields ${completionText}. This quiz questions is unpublished publish.`}
        />
      )}

      <QuestionsTitleForm initialData={data} />
      <OptionsForm initialData={data} />
      <div className="grid grid-cols-2 gap-2 my-2">
        {data?.options.map((option: any, i: any) => (
          <div key={i}>
            <OptionList title={i + 1} description={option} initialData={data} />
          </div>
        ))}
      </div>
      <QuestionsAnswerForm initialData={data} />
      <div className="my-2">
        <Button
          onClick={() => handelPublished()}
          disabled={completedFields !== 3}
        >
          {data?.isPublished ? "Unpublished" : "Published"}
        </Button>
      </div>
    </UseModal>
  );
};

export default QuizOption;
