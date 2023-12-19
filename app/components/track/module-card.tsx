import React from "react";
import { Progress } from "../custom-progress";
import { Button } from "../custom-button";
import { Link } from "@remix-run/react";
import { Check, CheckCheck, Lock, Plus, Star } from "lucide-react";

export function ModuleCard() {
  return (
    <ul className="col-span-3 flex flex-col gap-6 overflow-y-auto h-screen">
      {Array.from({ length: 15 }).map((_, i) => (
        <li className="flex rounded-md bg-slate-300/50">
          <div className="flex flex-col items-start gap-4 bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-l-md">
            <h1 className="text-xl text-slate-300">Course</h1>
            <p className="text-slate-100">JavaScript</p>
          </div>
          <div className="flex flex-1 justify-between rounded-r-md p-6">
            <div className="flex flex-col justify-between">
              <p className="text-lg text-slate-600">Module {i + 1}</p>
              <h1 className="text-xl mb-2">Functions</h1>
            </div>
            <div className="flex flex-col justify-between items-center">
              {i < 2 ? <Progress value={34} /> : <Progress value={0} />}
              <Button asChild>
                <Link to={`/course/1`}>
                  {i < 2 ? (
                    <>
                      <CheckCheck className="mr-4" /> Completed
                    </>
                  ) : (
                    <>
                      <Lock className="mr-4" /> Start
                    </>
                  )}
                </Link>
              </Button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
