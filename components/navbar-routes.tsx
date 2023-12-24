"use client";

import { HomeIcon, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
// import { isTeacher } from "@/lib/teacher";

import Profile from "./profile";
import { SearchInput } from "./search-input";

export const NavbarRoutes = () => {
  //   const { userId } = useAuth();
  const userId = "123";
  const pathname = usePathname();

  const isTeacher = true;

  const isTeacherPage = pathname?.startsWith("/admin");
  const isCoursePage = pathname?.includes("/quiz");
  const isSearchPage = pathname === "/search";

  return (
    <>
      {isSearchPage && (
        <div className="hidden md:block">
          <SearchInput />
        </div>
      )}
      {!isCoursePage ? (
        <div>
          <Link href="/">
            <Button size="sm" variant="outline">
              <HomeIcon className="h-4 w-4 mr-2" />
              Home
            </Button>
          </Link>
        </div>
      ) : null}

      <div className="flex gap-x-2 ml-auto">
        {isTeacherPage || isCoursePage ? (
          <Link href="/dashboard">
            <Button variant="destructive" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              Exit
            </Button>
          </Link>
        ) : isTeacher ? (
          <Link href="/dashboard/admin/quiz">
            <Button size="sm" variant="default">
              Admin mode
            </Button>
          </Link>
        ) : null}
        {/* <UserButton afterSignOutUrl="/" /> */}
        <Profile />
      </div>
    </>
  );
};
