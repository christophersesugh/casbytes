import { Bell, Star } from "lucide-react";
import { Container } from "~/components/container";
import { PageTitle } from "~/components/page-title";
import {
  UserCard,
  Chart,
  SubscriptionCard,
  TrackCard,
} from "~/components/dashboard";

export default function CourseCatalog() {
  return (
    <Container className="lg:p-8 max-w-6xl">
      <PageTitle title="Dashboard" className="mb-12" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-4 rounded-md drop-shadow-md">
        <div className="flex gap-10 flex-col">
          <UserCard />
          <div>
            <h1 className="text-2xl font-black mb-4">Tracks</h1>
            <ul className="space-y-5">
              {tracks.map((course, i) => (
                <TrackCard i={i} course={course} />
              ))}
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
            <Chart />
          </div>
          <SubscriptionCard />
          {/* <div className="flex justify-between gap-2 bg-slate-300/50 rounded-md  p-4">
            <div className="flex flex-col gap-2">
              <h2 className="font-black text-[1.3rem]">Learn even more!</h2>
              <p>
                Subscribe for <span className="text-xl font-bold">$15</span>
                /month to unlock all courses.
              </p>
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
          </div> */}
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
