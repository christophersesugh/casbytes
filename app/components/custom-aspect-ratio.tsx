import React from "react";
import { AspectRatio as ShAspectRatio } from "./ui/aspect-ratio";
import { cn } from "~/libs/shadcn";

type AspectRatioProps = {
  ratio?: number;
  className?: string;
  children?: React.ReactNode;
};

export function AspectRatio({
  className,
  children,
  ...props
}: AspectRatioProps) {
  return (
    <ShAspectRatio
      ratio={16 / 9}
      className={cn("bg-muted", className)}
      {...props}
    >
      {children}
    </ShAspectRatio>
  );
}
