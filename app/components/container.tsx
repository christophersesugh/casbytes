import React from "react";
import { cn } from "~/libs/shadcn";

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

export function Container({
  className = "",
  children,
  ...props
}: ContainerProps) {
  return (
    <section
      className={cn("px-4 w-full h-full mx-auto py-6", className)}
      {...props}
    >
      {children}
    </section>
  );
}
