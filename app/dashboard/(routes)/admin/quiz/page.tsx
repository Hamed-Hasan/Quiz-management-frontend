"use client";

import { redirect } from "next/navigation";

import { useQuizzesQuery } from "@/redux/api/quizApi";
import { getUserInfo } from "@/services/auth.service";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";

const CoursesPage = () => {
  const { userId }: any = getUserInfo();
  const { data, isLoading } = useQuizzesQuery({});
  if (!userId) {
    return redirect("/");
  }

  // const courses = data?.quiz?.filter((course: any) => course.userId === userId);

  const quizzes: any = data?.quiz;

  //   where: {
  //     userId,
  //   },
  //   orderBy: {
  //     createdAt: "desc",
  //   },
  // });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6">
      <DataTable columns={columns} data={quizzes} />
    </div>
  );
};

export default CoursesPage;
