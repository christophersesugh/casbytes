import { BackButton } from "~/components/back-button";
import { Container } from "~/components/container";
import { PageTitle } from "~/components/page-title";
import {
  Courses,
  ModuleCard,
  TrackStatus,
  TrophyCarbinet,
} from "~/components/track";

export default function CoursesRoute() {
  return (
    <Container className="max-w-6xl mt-6">
      <BackButton to="/dashboard" buttonText="dashboard" />
      <PageTitle
        title="introduction to software engineering"
        className="mb-12"
      />
      <div className="md:grid md:grid-cols md:grid-cols-5 gap-6">
        <ModuleCard />
        <div className="hidden md:block col-span-2 border bg-slate-200/70 overflow-y-auto h-screen">
          <h1 className="text-lg text-slate-100 bg-zinc-700 rounded-t-md mb-4 p-2">
            Javascript trophy cabinet
          </h1>
          <TrophyCarbinet />
          <h1 className="text-lg text-slate-100 bg-zinc-600 rounded-t-md mb-4 p-2">
            Courses
          </h1>
          <TrackStatus />
          <Courses />
        </div>
      </div>
    </Container>
  );
}
