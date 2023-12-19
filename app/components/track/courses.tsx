import React from "react";
import { Button } from "../custom-button";
import { Link } from "@remix-run/react";
import { CheckCircle, Lock } from "lucide-react";
import jsLogo from "~/assets/js-logo.png";
import { CourseCard } from "./course-card";

export function Courses() {
  return (
    <ul className="flex flex-col gap-4 p-2 overflow-y-auto">
      {courses.map((course, i) => (
        <CourseCard i={i} course={course} />
      ))}
    </ul>
  );
}

const courses = [
  {
    id: "1",
    title: "HTML",
  },
  {
    id: "1",
    title: "CSS",
  },
  {
    id: "1",
    title: "JavaScript",
  },
  {
    id: "1",
    title: "Python",
  },
];
