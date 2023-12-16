import { Link } from "@remix-run/react";
import {
  Bell,
  CheckCircle,
  CircleDashed,
  CircleOff,
  Clock3,
  Star,
} from "lucide-react";
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
import { UserCard } from "~/components/user-card";
import laptop from "~/assets/laptop.png";
import lightbulb from "~/assets/light-bulb.webp";
import { Separator } from "~/components/custom-separator";

export default function CourseCatalog() {
  return (
    <Container className="lg:p-8 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-8 bg-white p-4 rounded-md">
        <div className="flex gap-10 flex-col">
          <UserCard />
          <div>
            <h1 className="text-2xl font-black mb-4">Courses</h1>
            <ul className="space-y-5">
              <li className="flex items-center gap-6 bg-slate-300/50 rounded-md p-2">
                <div className="p-2 bg-white rounded-md h-20 w-24">
                  <img src={laptop} alt="" className="h-full" />
                </div>
                <div className="flex flex-col">
                  <h2 className="font-bold">
                    Introduction to software engineering.
                  </h2>
                  <Separator />
                  <p className="text-sm text-blue-700">by Christopher Sesugh</p>
                </div>
                <div className="flex gap-2">
                  <Star /> <p>4.9</p>
                </div>
                <Button asChild>
                  <Link to="/course/1">View course</Link>
                </Button>
              </li>
              <li className="flex items-center gap-6 bg-slate-300/50 rounded-md p-2">
                <div className="p-2 bg-white rounded-md h-20 w-24">
                  <img src={laptop} alt="" className="h-full" />
                </div>
                <div className="flex flex-col">
                  <h2 className="font-bold">
                    Introduction to software engineering.
                  </h2>
                  <Separator />
                  <p className="text-sm text-blue-700">by Christopher Sesugh</p>
                </div>
                <div className="flex gap-2">
                  <Star /> <p>4.9</p>
                </div>
                <Button>View course</Button>
              </li>
              <li className="flex items-center gap-6 bg-slate-300/50 rounded-md p-2">
                <div className="p-2 bg-white rounded-md h-20 w-24">
                  <img src={laptop} alt="" className="h-full" />
                </div>
                <div className="flex flex-col">
                  <h2 className="font-bold">
                    Introduction to software engineering.
                  </h2>
                  <Separator />
                  <p className="text-sm text-blue-700">by Christopher Sesugh</p>
                </div>
                <div className="flex gap-2">
                  <Star /> <p>4.9</p>
                </div>
                <Button>View course</Button>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 bg-slate-100 rounded-md p-2">
            <div className="flex items-center gap-4 justify-end relative">
              <p className="text-lg text-blue-600">
                <span className="font-bold">3</span> notifications
              </p>
              <Bell />
              <div className="bg-blue-600 h-2 w-2 rounded-full absolute top-0 right-0"></div>
            </div>
            <div className="flex justify-evenly gap-6 ">
              <div className="flex items-center gap-4 bg-slate-300 rounded-md py-2 px-4">
                <h2 className="font-black text-[2rem]">3</h2>
                <p>
                  courses <br /> completed
                </p>
              </div>
              <div className="flex items-center gap-4 bg-slate-300 rounded-md py-2 px-4">
                <h2 className="font-black text-[2rem]">2</h2>
                <p>
                  courses <br /> in progress
                </p>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-black mb-4">Your statistics</h1>
            <p>graph</p>
          </div>
          <div className="flex justify-between bg-slate-300/50 rounded-md py-2 px-4">
            <div className="flex flex-col gap-4">
              <h2 className="font-black text-[1.5rem]">Learn even more!</h2>
              <p>subscribe for $15/month to unlock all courses.</p>
              <Button size="lg" className="text-lg self-start">
                Go Premium
              </Button>
            </div>
            <img
              src={lightbulb}
              alt="Light Bulb"
              width={150}
              height={100}
              className="rounded-md"
            />
          </div>
        </div>
      </div>
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
