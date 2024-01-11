import React from "react";
import { Bell, Star } from "lucide-react";
import { Container } from "~/components/container";
import { PageTitle } from "~/components/page-title";
import {
  UserCard,
  Chart,
  SubscriptionCard,
  Card,
} from "~/components/dashboard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

export default function CourseCatalog() {
  const [tab, setTab] = React.useState("chart");
  return (
    <Container className="lg:p-8 max-w-6xl">
      <PageTitle title="Dashboard" className="mb-12" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-4 rounded-md drop-shadow-md">
        <div className="flex gap-10 flex-col">
          <UserCard />
          <div>
            <Tabs defaultValue="tracks">
              <TabsList className="w-full flex bg-inherit justify-start mb-6">
                <TabsTrigger value="tracks" className="text-xl">
                  Tracks
                </TabsTrigger>
                <TabsTrigger value="courses" className="text-xl">
                  Courses
                </TabsTrigger>
              </TabsList>
              <TabsContent value="tracks">
                <ul className="space-y-5">
                  {tracks.map((course, i) => (
                    <Card i={i} course={course} />
                  ))}
                </ul>
              </TabsContent>
              <TabsContent value="courses">courses</TabsContent>
            </Tabs>
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

            <div className="flex h-12 w-full gap-4 justify-between">
              <div className="flex items-center gap-4 bg-slate-300 rounded-md py-2 px-4">
                <h2 className="font-black text-[2rem]">3</h2>
                <p>my courses</p>
              </div>
              <div className="flex items-center gap-4 bg-slate-300 rounded-md py-2 px-4">
                <h2 className="font-black text-[2rem]">3</h2>
                <p>courses completed</p>
              </div>
              <div className="flex items-center gap-4 bg-slate-300 rounded-md py-2 px-4">
                <h2 className="font-black text-[2rem]">2</h2>
                <p>courses in progress</p>
              </div>
            </div>
            <div className="flex h-12 items-center gap-4 bg-slate-300 rounded-md py-2 px-4">
              <h2 className="font-black text-[2rem]">3</h2>
              <p>
                courses <br /> completed
              </p>
            </div>
          </div>
          <div>
            {/* <h1 className="text-2xl font-black mb-4">Your statistics</h1> */}
            <Tabs defaultValue="chart">
              <TabsList className="w-full flex bg-inherit justify-start mb-6">
                <div className="flex justify-between items-center w-full">
                  <div>
                    <TabsTrigger
                      onClick={() => setTab("chart")}
                      value="chart"
                      className="text-xl"
                    >
                      Learning hours
                    </TabsTrigger>
                    <TabsTrigger
                      onClick={() => setTab("my-courses")}
                      value="my-courses"
                      className="text-xl"
                    >
                      My courses
                    </TabsTrigger>
                  </div>
                  {tab === "chart" ? (
                    <Select>
                      <SelectTrigger className="w-32">
                        <SelectValue placeholder="weekly" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekly">weekly</SelectItem>
                        <SelectItem value="monthly">monthly</SelectItem>
                      </SelectContent>
                    </Select>
                  ) : null}
                </div>
              </TabsList>
              <TabsContent value="chart" className="w-full">
                <Chart />
              </TabsContent>
              <TabsContent value="my-courses">my courses</TabsContent>
            </Tabs>
          </div>
          <SubscriptionCard />
        </div>
      </div>
    </Container>
  );
}

const tracks = [
  {
    id: "1",
    title: "Fundamentals",
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
];
