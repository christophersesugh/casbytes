import { Link } from "@remix-run/react";
import { CheckCircle, CircleDashed, CircleOff } from "lucide-react";
import React from "react";
import { BackButton } from "~/components/back-button";
import { Container } from "~/components/container";
import { Badge } from "~/components/custom-badge";
import { Button } from "~/components/custom-button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/custom-table";
import { PageTitle } from "~/components/page-title";

export default function CoursesRoute() {
  return (
    <Container className="max-w-3xl mt-6">
      <BackButton to="/course-catalog" buttonText="course catalog" />
      <PageTitle
        title="introduction to software engineering"
        className="mb-12"
      />
      <Table className="text-md drop-shadow-md rounded-md border border-blue-500">
        <TableHeader className="font-bold uppercase bg-slate-50">
          <TableRow>
            <TableHead className="px-4 py-2">title</TableHead>
            <TableHead className="px-4 py-2">course</TableHead>
            <TableHead className="px-4 py-2">status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-white">
          {courses.length > 0 ? (
            courses.map((course) => (
              <TableRow key={course.id}>
                <TableCell className="px-4 py-2">
                  <Button
                    variant="link"
                    className="text-blue-600 text-md capitalize"
                  >
                    <Link to={`/module/${course.id}`}>{course.title}</Link>
                  </Button>
                </TableCell>
                <TableCell className="px-4 py-2 text-sm capitalize">
                  {course.track}
                </TableCell>
                <TableCell className="px-4 py-2">
                  {course.status === "completed" ? (
                    <CheckCircle size={20} className="text-green-600" />
                  ) : course.status === "in-progress" ? (
                    <CircleDashed size={20} className="text-blue-600" />
                  ) : (
                    <CircleOff size={20} className="text-slate-600" />
                  )}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell className="px-4 py-8" colSpan={3}>
                <p className="text-center text-xl font-bold">
                  No courses available at the moment.
                </p>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Container>
  );
}

const courses = [
  {
    id: "1",
    title: "introduction",
    track: " introduction to software engineering",
    status: "completed",
  },
  {
    id: "2",
    title: "number system",
    track: " introduction to software engineering",
    status: "in-progress",
  },
];
