import React from "react";
import { Link } from "@remix-run/react";
import { Zoom } from "react-awesome-reveal";
import { LuBrainCircuit } from "react-icons/lu";
import { LiaBookReaderSolid } from "react-icons/lia";
import { TbWorldBolt } from "react-icons/tb";
import { Container } from "../container";
import { Button } from "../custom-button";

export function CurriculumOverview() {
  return (
    <Container className="bg-header-2 bg-no-repeat bg-cover">
      <div className="max-w-2xl flex flex-col items-center justify-center mx-auto gap-6 px-2 py-6">
        <h1 className="text-3xl font-bold mb-8 text-blue-500">
          Curriculum overview
        </h1>
        <Zoom cascade triggerOnce>
          <div className="flex flex-col gap-10">
            {items.map((item, index) => (
              <div
                key={`item-${index}`}
                aria-label={item.title}
                className="drop-shadow-xl rounded-md bg-white px-4 py-6 text-center mx-auto"
              >
                <div>
                  <div className="text-blue-500 flex justify-center">
                    {item.icon}
                  </div>
                  <h2 className="text-xl font-black my-4">{item.title}</h2>
                </div>
                <div>{item.desc}</div>
              </div>
            ))}
          </div>
        </Zoom>
        <Link to="/curriculum">
          <Button variant="outline" className="mt-8" aria-label="learn more">
            learn more...
          </Button>
        </Link>
      </div>
    </Container>
  );
}

const items = [
  {
    icon: <LuBrainCircuit className="text-[4rem]" />,
    title: "Embark on a Journey into Computer Systems Mastery",
    desc: `
    At CASBytes, we kickstart your educational odyssey by unraveling the intricate tapestry of computer systems. Dive deep into the very heart of computing, where you'll not only grasp the essentials of hardware components but also navigate the intricate landscapes of operating systems.

Our program is designed to instill in you the core knowledge needed for a thriving software engineering career. By understanding the symbiotic relationship between hardware and operating systems, you'll build a rock-solid foundation that empowers you to unlock the full potential of modern computing.
    `,
  },
  {
    icon: <LiaBookReaderSolid className="text-[4rem]" />,
    title: "Mastering the Spectrum of Programming",
    desc: `At CASBytes, we've meticulously crafted a curriculum that delves deep into the world of programming, spanning both low-level and high-level domains. Here, you'll harness the power of low-level programming languages, gaining an understanding of the intricacies that drive optimal performance.
    But that's just the beginning. We seamlessly guide you to ascend to the realm of high-level languages, where you'll craft efficient and innovative applications. CASBytes is your gateway to a comprehensive skill set that ensures you're ready to conquer the diverse challenges of the programming universe.
    `,
  },
  {
    icon: <TbWorldBolt className="text-[4rem]" />,
    title: "Unlocking Real-World Proficiency",
    desc: `At CASBytes, we transcend mere theory and empower you with real-world readiness. Our cutting-edge curriculum isn't just about learning; it's about doing. We bring the professional world to you through immersive exercises, hands-on industry projects, and true-to-life simulations.
    Picture yourself tackling the very challenges and scenarios that await you in the dynamic realm of software engineering. CASBytes doesn't just teach; we equip you with the confidence and practical skills needed to not only thrive but excel in your future career. It's not just about knowledge; it's about real-world proficiency.
    `,
  },
];
