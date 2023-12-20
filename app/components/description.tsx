import React from "react";
import { cn } from "~/libs/shadcn";
import { Badge } from "./custom-badge";

type DescriptionProps = {
  content: string;
  className?: string;
};

export function Description({ content, className }: DescriptionProps) {
  return (
    <h2
      className={cn(
        "border-l-4 bg-blue-100/50 rounded-md p-4 pt-6 border-zinc-600 relative",
        className,
      )}
    >
      <Badge className="top-0 right-0 absolute bg-zinc-600">
        What you will learn...
      </Badge>
      {content}
    </h2>
  );
}
