import { CourseTitle } from "../course-title";
import { Courses, Status, TrophyCarbinet } from ".";

export function SideContent() {
  return (
    <div>
      <CourseTitle title="Trophy cabinet" />
      <TrophyCarbinet />
      <CourseTitle title="Courses" />
      <Status />
      <Courses />
    </div>
  );
}
