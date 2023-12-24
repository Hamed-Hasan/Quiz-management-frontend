"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { BsPlusCircle, BsSmartwatch } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { PiUsersThreeDuotone } from "react-icons/pi";
import { TbUsersPlus } from "react-icons/tb";

import { cn } from "@/lib/utils";
import { getUserInfo } from "@/services/auth.service";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const { role }: any = getUserInfo();

  const pathname = usePathname();
  const params = useParams();

  const performer = [
    {
      href: `/`,
      label: "Home",
      active: pathname === `/`,
      icon: <IoHomeOutline />,
    },
    {
      href: `/activity`,
      label: "Activity",
      active: pathname === `/activity`,
      icon: <BsSmartwatch />,
    },

    {
      href: `/class`,
      label: "Classes",
      active: pathname === `/class`,
      icon: <PiUsersThreeDuotone />,
    },
  ];

  const instanter = [
    ...performer,
    {
      href: `/dashboard`,
      label: "Create Quiz",
      active: pathname === `/create-quiz`,
      icon: <BsPlusCircle />,
    },
    {
      href: `/create-class`,
      label: "Create Class",
      active: pathname === `/create-class`,
      icon: <TbUsersPlus />,
    },
  ];

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-9", className)}
      {...props}
    >
      {role === "admin"
        ? instanter.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary flex items-center justify-center gap-1 ",
                route.active
                  ? "text-black dark:text-white font-bold"
                  : "text-muted-foreground"
              )}
            >
              <span className="font-bold text-base">{route.icon}</span>
              {route.label}
            </Link>
          ))
        : role === "performer"
        ? performer.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary flex items-center justify-center gap-1 ",
                route.active
                  ? "text-black dark:text-white font-bold"
                  : "text-muted-foreground"
              )}
            >
              <span className="font-bold text-base">{route.icon}</span>
              {route.label}
            </Link>
          ))
        : performer.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary flex items-center justify-center gap-1 ",
                route.active
                  ? "text-black dark:text-white font-bold "
                  : "text-muted-foreground"
              )}
            >
              <span className="font-bold text-base">{route.icon}</span>
              {route.label}
            </Link>
          ))}
    </nav>
  );
}
