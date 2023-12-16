import { Link } from "@remix-run/react";
import {
  CheckCircle,
  CircleDashed,
  CircleDot,
  CircleEllipsis,
  CircleOff,
  Star,
} from "lucide-react";
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
import laptop from "~/assets/laptop.png";

export default function CoursesRoute() {
  return (
    <Container className="max-w-4xl mt-6">
      <BackButton to="/course-catalog" buttonText="course catalog" />
      <PageTitle
        title="introduction to software engineering"
        className="mb-12"
      />
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <Link to={`/module/1`}>
          <div className="bg-white drop-shadow-md rounded-md p-4 ">
            <div className="">
              {/* <Badge className="mb-4">
              <h1>Course</h1>
            </Badge> */}
              <img src={laptop} alt="" className="w-full rounded-md" />
              <h2 className="text-lg my-4">
                Introduction to software engineering.
              </h2>
            </div>
            <Badge className="bg-zinc-600 flex justify-between w-full mb-4">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4" /> <p>4.9</p>
              </div>
              <div className="flex items-center gap-2">
                <CircleEllipsis className="w-4 h-4 text-blue-100" />
                In progress
              </div>
            </Badge>
            <div className="bg-blue-200 rounded-md">
              <div className="bg-blue-600 p-1 text-sm text-slate-50 rounded-t-md">
                <h1>Module</h1>
              </div>
              <div className=" p-2">
                <h2 className="text-2xl text-zinc-800">Introduction</h2>
              </div>
            </div>
          </div>
        </Link>

        <div className="bg-white drop-shadow-md rounded-md p-4 flex flex-col">
          <div>
            {/* <Badge className="mb-4">
              <h1>Course</h1>
            </Badge> */}
            <img src={laptop} alt="" className="w-full rounded-md" />
            <h2 className="text-lg my-4">
              Introduction to software engineering.
            </h2>
          </div>
          <Badge className="bg-zinc-600 flex justify-between w-full mb-4">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4" /> <p>4.9</p>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-blue-100" />
              Completed
            </div>
          </Badge>
          <div className="bg-blue-200 rounded-md">
            <div className="bg-blue-600 p-1 text-slate-50 rounded-t-md">
              <h1>Module</h1>
            </div>
            <div className=" p-2">
              <h2 className="text-2xl text-zinc-800">Introduction</h2>
            </div>
          </div>
        </div>
        <div className="bg-white drop-shadow-md rounded-md p-4 flex flex-col">
          <div>
            {/* <Badge className="mb-4">
              <h1>Course</h1>
            </Badge> */}
            <img src={laptop} alt="" className="w-full rounded-md" />
            <h2 className="text-lg my-4">
              Introduction to software engineering.
            </h2>
          </div>
          <Badge className="bg-zinc-600 flex justify-between w-full mb-4">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4" /> <p>4.9</p>
            </div>
            <div className="flex items-center gap-2">
              <CircleDot className="w-4 h-4 text-blue-100" />
              Not started
            </div>
          </Badge>
          <div className="bg-blue-200 rounded-md">
            <div className="bg-blue-600 p-1 text-sm text-slate-50 rounded-t-md">
              <h1>Module</h1>
            </div>
            <div className=" p-2">
              <h2 className="text-2xl text-zinc-800">Introduction</h2>
            </div>
          </div>
        </div>
        <div className="bg-white drop-shadow-md rounded-md p-4 ">
          <div className="">
            {/* <Badge className="mb-4">
              <h1>Course</h1>
            </Badge> */}
            <img src={laptop} alt="" className="w-full rounded-md" />
            <h2 className="text-lg my-4">
              Introduction to software engineering.
            </h2>
          </div>
          <div className="bg-blue-300 rounded-md">
            <div className="bg-blue-600 p-1 text-slate-50 rounded-t-md">
              <h1>Module</h1>
            </div>
            <div className=" p-2">
              <h2 className="text-2xl text-zinc-800">Introduction</h2>
            </div>
          </div>
        </div>
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
