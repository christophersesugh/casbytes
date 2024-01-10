import { cn } from "~/libs/shadcn";

type CourseTitleProps = {
  title: string;
  className?: string;
};

export function CourseTitle({ title, className }: CourseTitleProps) {
  return (
    <h1
      className={cn(
        "text-lg text-slate-100  bg-gradient-to-r from-blue-600 to-purple-500 rounded-t-md mb-4 p-2",
        className,
      )}
    >
      {title}
    </h1>
  );
}
