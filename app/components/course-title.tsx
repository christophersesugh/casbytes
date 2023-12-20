type CourseTitleProps = {
  title: string;
  className?: string;
};

export function CourseTitle({ title, className }: CourseTitleProps) {
  return (
    <h1 className="text-lg text-slate-100  bg-gradient-to-r from-blue-600 to-purple-500 rounded-t-md mb-4 p-2">
      {title}
    </h1>
  );
}
