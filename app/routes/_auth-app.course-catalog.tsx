import { Link } from "@remix-run/react";
import { CheckCircle, CircleDashed, CircleOff } from "lucide-react";
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

export default function CourseCatalog() {
  return (
    <Container className="max-w-3xl mt-6">
      <PageTitle title="courses" className="mb-12" />
      <Table className="text-md drop-shadow-md rounded-md border border-blue-500">
        <TableHeader className="font-bold uppercase bg-slate-50">
          <TableRow>
            <TableHead className="px-4 py-2">title</TableHead>
            <TableHead className="px-4 py-2">curriculum</TableHead>
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
                    <Link to={`/course/${course.id}`}>{course.title}</Link>
                  </Button>
                </TableCell>
                <TableCell className="px-4 py-2">
                  {course.curriculum === "core" ? (
                    <Badge>{course.curriculum}</Badge>
                  ) : (
                    <Badge className="bg-purple-600 hover:bg-purple-500">
                      {course.curriculum}
                    </Badge>
                  )}
                </TableCell>
                <TableCell className="px-4 py-2">
                  {course.status === "completed" ? (
                    <CheckCircle size={20} className="text-green-600" />
                  ) : course.status === "started" ? (
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
    title: "introduction to software engineering",
    curriculum: "core",
    status: "completed",
  },
  {
    id: "2",
    title: "low level programming",
    curriculum: "core",
    status: "started",
  },
  {
    id: "3",
    title: "high level programming",
    curriculum: "advanced",
    status: "not-started",
  },
  {
    id: "4",
    title: "data structures and algorithms",
    curriculum: "advanced",
    status: "not-started",
  },
  {
    id: "5",
    title: "devops",
    curriculum: "advanced",
    status: "not-started",
  },
  {
    id: "6",
    title: "system design",
    curriculum: "advanced",
    status: "not-started",
  },
  {
    id: "7",
    title: "capstone project",
    curriculum: "advanced",
    status: "not-started",
  },
];
