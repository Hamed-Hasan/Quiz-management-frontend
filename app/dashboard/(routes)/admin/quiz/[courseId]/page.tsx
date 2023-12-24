"use client";
import { LayoutDashboard, ListChecks } from "lucide-react";

import { Banner } from "@/components/banner";
import { IconBadge } from "@/components/icon-badge";

import { useQuizQuery } from "@/redux/api/quizApi";
import { Actions } from "./_components/actions";
import Category from "./_components/category";
import { ChaptersForm } from "./_components/chapters-form";
import { TitleForm } from "./_components/title-form";

const CourseIdPage = ({ params }: { params: { courseId: string } }) => {
  const { data, isLoading } = useQuizQuery(params.courseId);
  const quiz = data;

  const requiredFields = [
    quiz?.title,
    quiz?.category?.name,
    quiz?.questions.every((question: any) => question.isPublished),
  ];

  const totalFields = requiredFields?.length;
  const completedFields = requiredFields?.filter(Boolean).length;

  const completionText = `(${completedFields}/${totalFields})`;

  const isComplete = requiredFields.every(Boolean);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {!quiz?.isPublished && (
        <Banner label="This quiz is unpublished. It will not be visible to the students." />
      )}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-2xl font-medium">Quiz setup</h1>
            <span className="text-sm text-slate-700">
              Complete all fields {completionText}
            </span>
          </div>
          <Actions
            disabled={!isComplete}
            quizId={params?.courseId}
            isPublished={quiz?.isPublished}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={LayoutDashboard} />
              <h2 className="text-xl">Customize your quiz</h2>
            </div>
            <TitleForm initialData={quiz} courseId={quiz?.id} />
            <Category quiz={quiz} categories={quiz?.id} />
          </div>
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon={ListChecks} />
                <h2 className="text-xl">Quiz questions</h2>
              </div>
              <ChaptersForm initialData={quiz} courseId={quiz?.id} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseIdPage;
