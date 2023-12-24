"use client";
import { redirect } from "next/navigation";

// import { getCourses } from "@/actions/get-courses";
import { SearchInput } from "@/components/search-input";

import { CoursesList } from "@/components/courses-list";

import { getUserInfo } from "@/services/auth.service";
import { Categories } from "./_components/categories";

interface SearchPageProps {
  searchParams: {
    title: string;
    categoryId: string;
  };
}

const SearchPage = ({ searchParams }: SearchPageProps) => {
  const { userId }: any = getUserInfo();

  // const { data, isLoading } = useCategorysQuery({});

  const { data, isLoading } = { data: [], isLoading: false };

  if (!userId) {
    return redirect("/");
  }

  const categories = {};

  const publishedCourses = data?.filter((course: any) => course.isPublished);

  const courses = publishedCourses?.filter((course: any) => {
    if (searchParams.title) {
      return course.title
        .toLowerCase()
        .includes(searchParams.title.toLowerCase());
    }

    if (searchParams.categoryId) {
      return course.categoryId === searchParams.categoryId;
    }
    return true;
  });

  console.log(courses);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="px-6 pt-6  md:mb-0 block">
        <SearchInput />
      </div>
      <div className="p-6 space-y-4">
        <Categories items={[]} />
        <CoursesList items={courses} />
      </div>
    </>
  );
};

export default SearchPage;
