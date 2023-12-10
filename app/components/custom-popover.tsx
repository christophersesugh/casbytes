import React from "react";
import {
  Popover as ShPopover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";

type CustomPopoverProps = {
  popoverTrigger: React.ReactNode;
  popoverContent: React.ReactNode;
  popoverContentClassName?: string;
  popoverTriggerClassName?: string;
};

export function Popover({
  popoverTrigger,
  popoverContent,
  popoverContentClassName,
  popoverTriggerClassName,
}: CustomPopoverProps) {
  return (
    <ShPopover>
      <PopoverTrigger className={popoverTriggerClassName} asChild>
        {popoverTrigger}
      </PopoverTrigger>
      <PopoverContent className={popoverContentClassName}>
        {popoverContent}
      </PopoverContent>
    </ShPopover>
  );
}
