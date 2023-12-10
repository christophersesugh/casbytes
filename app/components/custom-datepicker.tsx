"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "./ui/calendar";
import { Popover } from "./custom-popover";
import { Button } from "./custom-button";
import { cn } from "~/libs/shadcn";

type DatePickerProps = {
  date: Date | undefined;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
};

export function DatePicker({ date, setDate }: DatePickerProps) {
  return (
    <Popover
      popoverTrigger={
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground",
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      }
      popoverContent={
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      }
    />
  );
}
