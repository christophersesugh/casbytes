import React from "react";
import jsLogo from "~/assets/js-logo.png";
import { Link } from "@remix-run/react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export function TrackCard({ i, course }: { i: number; course: any }) {
  return (
    <li className="flex flex-wrap md:flex-nowrap gap-2 justify-between items-center bg-slate-300/50 rounded-md p-2 relative">
      <div className="absolute rounded-tl rounded-br text-slate-50 text-xs p-1 bg-blue-600 top-0 left-0">
        {i + 1}
      </div>
      <div className="flex gap-2">
        <img src={jsLogo} alt={course.title} width={70} height={70} />
        <div className="flex flex-col text-left">
          <h2 className="font-black capitalize mb-2">{course.title}</h2>
          <p className="text-xs text-blue-700">700,000 students</p>
        </div>
      </div>

      <div className="flex justify-between gap-2 items-center ">
        <Badge className="bg-stone-600 hover:bg-stone-500 p-1 rounded-full">
          6 courses
        </Badge>
        <Button size="sm">
          <Link to={`/track/1`}>View track</Link>
        </Button>
      </div>
    </li>
  );
}
