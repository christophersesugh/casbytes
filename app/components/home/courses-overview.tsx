import { Link } from "@remix-run/react";
import { ArrowRight } from "lucide-react";
import { Fade } from "react-awesome-reveal";
import { cn } from "~/libs/shadcn";
import { Container } from "../container";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import fundamentals from "~/assets/fundamentals.png";
import llp from "~/assets/llp.png";
import hlp from "~/assets/hlp.png";
import dsa from "~/assets/dsa.png";
import devops from "~/assets/devops.png";
import sd from "~/assets/sd.png";

export function CoursesOverview() {
  return (
    <Container className="bg-white" id="courses">
      <div className="flex flex-col items-center max-w-6xl mx-auto gap-8">
        <h1 className="text-3xl text-blue-600 font-bold mb-8">Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Fade cascade className="static">
            {items.map((item, index) => (
              <Card
                key={`item-${index}`}
                aria-label={item.title}
                className="drop-shadow-xl rounded-md bg-white pt-4 px-4 text-center mx-auto"
              >
                <CardContent className="items-center flex flex-col">
                  <img
                    src={item.image}
                    alt={item.title}
                    width={64}
                    height={64}
                    className="w-16 h-16 mx-auto"
                  />
                  <h2 className="text-xl text-blue-700 capitalize font-black mt-4">
                    {item.title}
                  </h2>
                  <Button variant="ghost" asChild>
                    <Link to="/curriculum" className="mt-4">
                      Learn more <ArrowRight className="ml-4 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Fade>
        </div>
        <Button
          variant="outline"
          className="mt-8"
          aria-label="learn more"
          asChild
        >
          <Link to="/about">learn more...</Link>
        </Button>
      </div>
    </Container>
  );
}

const items = [
  {
    image: fundamentals,
    title: "Front-end development",
    desc: "The Fundamentals track serves as the cornerstone of CASBytes' curriculum. Students embark on a journey to grasp the essential principles of software engineering. From mastering the basics of programming to cultivating problem-solving skills, this track establishes a solid foundation for advanced learning in subsequent tracks.",
  },
  {
    image: llp,
    title: "Backe-end development",
    desc: "Delving into the intricacies of low-level programming, this track immerses students in the world of low-level languages, operating systems, and memory management. By understanding the nuances of how computers operate at the hardware level, students gain a profound insight into the fundamental components that bridge the gap between software and hardware, enhancing their overall programming expertise.",
  },
  {
    image: hlp,
    title: "Fullstack development",
    desc: "Building on the foundational knowledge acquired in earlier tracks, the High-Level Programming track focuses on proficiency in HTML, CSS, Python, JavaScript, and more. Students develop the skills to create scalable, efficient software applications. The emphasis is on practical application, enabling them to build real-world solutions using modern, high-level programming languages.",
  },
  {
    image: dsa,
    title: "System design",
    desc: "The Data Structures and Algorithms track is a crucial component of CASBytes' curriculum. Students master the art of designing and analyzing algorithms while implementing key data structures. The emphasis is on writing efficient, optimized code to solve complex problems, ensuring that graduates possess the skills necessary for effective problem-solving in software engineering.",
  },
  {
    image: devops,
    title: "DevOps",
    desc: "In the DevOps course, students explore the intersection of development and operations. They learn to integrate automation, continuous integration, and deployment into the software development lifecycle. By mastering DevOps tools and practices, students are equipped to streamline processes, enhance collaboration, and deliver high-quality software solutions efficiently.",
  },
  {
    image: sd,
    title: "UI/UX design",
    desc: "Culminating in the System Design course, students synthesize their knowledge from preceding tracks to architect and implement complex software systems. Emphasis is placed on scalability, performance, and reliability. Graduates emerge with the skills needed to design end-to-end solutions that meet real-world requirements, reflecting CASBytes' commitment to producing well-rounded and proficient software engineers.",
  },
];
