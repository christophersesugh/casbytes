import React from "react";
import { CourseTitle } from "../course-title";
import { Courses, Status, TrophyCarbinet } from ".";

export function SideContent() {
  return (
    <>
      <CourseTitle title=" Javascript trophy cabinet" />
      <TrophyCarbinet />
      <CourseTitle title="Courses" />
      <Status />
      <Courses />
    </>
  );
}
