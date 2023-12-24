import { SidebarRoutes } from "./sidebar-routes";

export const Sidebar = () => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
      <div className="p-6">
        <h1 className="text-3xl font-bold">fQuiz</h1>
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};
