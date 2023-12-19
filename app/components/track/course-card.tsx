import React from "react";
import jsLogo from "~/assets/js-logo.png";
import { Badge } from "../custom-badge";
import { Button } from "../custom-button";
import { Link } from "@remix-run/react";
import { Progress } from "../custom-progress";
import { CheckCheck, Plus } from "lucide-react";

export function CourseCard({ i, course }: { i: number; course: any }) {
  return (
    <li className="flex flex-wrap md:flex-nowrap gap-2 justify-between items-center bg-slate-300/50 rounded-md p-2 relative">
      <div className="absolute rounded-tl rounded-br text-slate-50 text-xs p-1 bg-blue-600 top-0 left-0">
        {i + 1}
      </div>
      <div className="flex gap-2">
        <img src={jsLogo} alt={course.title} width={80} height={70} />
        <div className="flex flex-col text-left">
          <h2 className="font-black text-lg capitalize mb-2">{course.title}</h2>
          <p className="text-xs text-blue-700">2000 students.</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 items-center">
        {i < 2 ? <Progress value={34} /> : <Progress value={0} />}
        <Button asChild>
          <Link to={`/course/1`}>
            {i < 2 ? (
              <>
                <CheckCheck className="mr-4 h-4 w-4" /> Joined
              </>
            ) : (
              <>
                <Plus className="mr-4 h-4 w-4" /> Join
              </>
            )}
          </Link>
        </Button>
      </div>
    </li>
  );
}
