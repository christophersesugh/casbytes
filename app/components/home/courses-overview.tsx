import { Link } from "@remix-run/react";
import { ArrowRight } from "lucide-react";
import { Fade } from "react-awesome-reveal";
import { Container } from "../container";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import frontend from "~/assets/images/frontend.png";
import backend from "~/assets/images/backend.png";
import fullstack from "~/assets/images/fullstack.png";
import dsa from "~/assets/images/dsa.png";
import devops from "~/assets/images/devops.png";
import mobile from "~/assets/images/mobile.png";
import ux from "~/assets/images/ux.png";
import seArchitecture from "~/assets/images/se-architecture.png";
import systemDesign from "~/assets/images/system-design.png";

export function CoursesOverview() {
  return (
    <Container className="bg-white" id="courses">
      <div className="flex flex-col items-center max-w-6xl mx-auto gap-8">
        <h1 className="text-3xl text-blue-600 font-bold mb-8">Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Fade cascade duration={500} className="static">
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
                    width={50}
                    height={50}
                    className="w-16 h-16 mx-auto"
                  />
                  <h2 className="text-lg text-blue-700 capitalize font-black mt-4">
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
    image: frontend,
    title: "Front-end development",
    desc: "The Fundamentals track serves as the cornerstone of CASBytes' curriculum. Students embark on a journey to grasp the essential principles of software engineering. From mastering the basics of programming to cultivating problem-solving skills, this track establishes a solid foundation for advanced learning in subsequent tracks.",
  },
  {
    image: backend,
    title: "Backe-end development",
    desc: "Delving into the intricacies of low-level programming, this track immerses students in the world of low-level languages, operating systems, and memory management. By understanding the nuances of how computers operate at the hardware level, students gain a profound insight into the fundamental components that bridge the gap between software and hardware, enhancing their overall programming expertise.",
  },
  {
    image: fullstack,
    title: "Fullstack development",
    desc: "Building on the foundational knowledge acquired in earlier tracks, the High-Level Programming track focuses on proficiency in HTML, CSS, Python, JavaScript, and more. Students develop the skills to create scalable, efficient software applications. The emphasis is on practical application, enabling them to build real-world solutions using modern, high-level programming languages.",
  },
  {
    image: systemDesign,
    title: "System design",
    desc: "The Data Structures and Algorithms track is a crucial component of CASBytes' curriculum. Students master the art of designing and analyzing algorithms while implementing key data structures. The emphasis is on writing efficient, optimized code to solve complex problems, ensuring that graduates possess the skills necessary for effective problem-solving in software engineering.",
  },
  {
    image: devops,
    title: "DevOps",
    desc: "In the DevOps course, students explore the intersection of development and operations. They learn to integrate automation, continuous integration, and deployment into the software development lifecycle. By mastering DevOps tools and practices, students are equipped to streamline processes, enhance collaboration, and deliver high-quality software solutions efficiently.",
  },
  {
    image: ux,
    title: "UI/UX design",
    desc: "Culminating in the System Design course, students synthesize their knowledge from preceding tracks to architect and implement complex software systems. Emphasis is placed on scalability, performance, and reliability. Graduates emerge with the skills needed to design end-to-end solutions that meet real-world requirements, reflecting CASBytes' commitment to producing well-rounded and proficient software engineers.",
  },
  {
    image: dsa,
    title: "Data structures and algorithms",
  },
  {
    image: seArchitecture,
    title: "software design and architecture",
  },
  {
    image: mobile,
    title: "mobile development",
  },
];
