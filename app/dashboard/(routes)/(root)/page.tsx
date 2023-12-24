import {
  CheckCircle,
  Clock,
  LayoutDashboard,
  ListIcon,
  User2Icon,
  UserX2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { InfoCard } from "./_components/info-card";

export default async function Dashboard() {
  return (
    <div className="p-6 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <InfoCard icon={Clock} label="In Progress" numberOfItems={12} />
        <InfoCard
          icon={ListIcon}
          label="Total Quizzes"
          numberOfItems={22}
          variant="success"
        />
        <InfoCard
          icon={CheckCircle}
          label="Completed"
          numberOfItems={12}
          variant="success"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InfoCard
          icon={User2Icon}
          label="Classes Completed"
          numberOfItems={3}
        />
        <InfoCard
          icon={LayoutDashboard}
          label="Active Classes"
          numberOfItems={6}
          variant="success"
        />
      </div>
      <div className="grid grid-cols-1   gap-4">
        <InfoCard
          icon={UserX2}
          label="Quizzes uncompleted by students"
          numberOfItems={20}
        />
      </div>
      <div className="grid grid-cols-1 text-center">
        <Link href="/dashboard/admin/quiz">
          <Button className="px-10">View all quizzes</Button>
        </Link>
      </div>
    </div>
  );
}
