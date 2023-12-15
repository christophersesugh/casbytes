import React from "react";
import { Accordion } from "~/components/accordion";
import { BackButton } from "~/components/back-button";
import { Container } from "~/components/container";
import { PageTitle } from "~/components/page-title";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/custom-table";
import { Button } from "~/components/custom-button";
import { Link } from "@remix-run/react";
import { CheckCircle, CircleDashed, CircleOff } from "lucide-react";

export default function ModulesRoute() {
  const [accordionIndex, setAccordionIndex] = React.useState(0);
  return (
    <Container className="max-w-3xl">
      <BackButton to="/course/1" buttonText="Introduction to SE" />
      <PageTitle title="modules" className="mb-12" />
      <div className="flex flex-col gap-6">
        <Accordion
          index={0}
          title="javascript"
          accordionIndex={accordionIndex}
          setAccordionIndex={setAccordionIndex}
        >
          SOME
        </Accordion>
        <Accordion
          index={1}
          title="python"
          accordionIndex={accordionIndex}
          setAccordionIndex={setAccordionIndex}
        >
          <Table className="text-md">
            <TableHeader className="font-bold uppercase bg-slate-50">
              <TableRow>
                <TableHead className="px-6">title</TableHead>
                <TableHead>course</TableHead>
                <TableHead>status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="bg-white">
              {courses.length > 0 ? (
                courses.map((course) => (
                  <TableRow key={course.id}>
                    <TableCell>
                      <Button
                        variant="link"
                        className="text-blue-600 text-md capitalize"
                      >
                        <Link to={`/lesson/${course.id}`}>{course.title}</Link>
                      </Button>
                    </TableCell>
                    <TableCell className="text-sm capitalize">
                      {course.track}
                    </TableCell>
                    <TableCell>
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
        </Accordion>
        <Accordion
          index={2}
          title="ruby"
          accordionIndex={accordionIndex}
          setAccordionIndex={setAccordionIndex}
        >
          SOME
        </Accordion>
      </div>
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
