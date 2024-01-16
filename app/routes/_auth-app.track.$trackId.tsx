import { BackButton } from "~/components/back-button";
import { Container } from "~/components/container";
import { CourseTitle } from "~/components/course-title";
import { Description } from "~/components/content-intro-badge";
import { PageTitle } from "~/components/page-title";
import {
  Courses,
  ModuleCard,
  Status,
  TrophyCarbinet,
} from "~/components/track";
import { Modules } from "~/components/track/modules";
import { SideContent } from "~/components/track/side-content";

export default function CoursesRoute() {
  return (
    <Container className="max-w-3xl lg:max-w-6xl mt-6">
      <BackButton to="/dashboard" buttonText="dashboard" />
      <PageTitle
        title="introduction to software engineering"
        className="mb-12"
      />
      <div className="lg:grid lg:grid-cols lg:grid-cols-5 gap-6">
        <Modules />
        <aside className="hidden lg:block col-span-2 border bg-slate-200/70 overflow-y-auto h-screen">
          <SideContent />
        </aside>
      </div>
    </Container>
  );
}
