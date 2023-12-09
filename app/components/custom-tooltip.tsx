import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

type CustomTooltipProps = {
  tooltipTrigger: React.ReactNode;
  tooltipContent: React.ReactNode;
};

export function CustomTooltip({
  tooltipTrigger,
  tooltipContent,
}: CustomTooltipProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{tooltipTrigger}</TooltipTrigger>
      <TooltipContent>{tooltipContent}</TooltipContent>
    </Tooltip>
  );
}

export { TooltipProvider } from "./ui/tooltip";
