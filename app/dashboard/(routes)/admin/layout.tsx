const TeacherLayout = ({ children }: { children: React.ReactNode }) => {
  // const { userId } = auth();

  // if (!isTeacher(userId)) {
  //   return redirect("/");
  // }

  return <>{children}</>;
};

export default TeacherLayout;
