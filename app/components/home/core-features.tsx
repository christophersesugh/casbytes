import React from "react";
import { Link } from "@remix-run/react";
import { Fade } from "react-awesome-reveal";
import { FaThinkPeaks } from "react-icons/fa";
import { MdQuiz } from "react-icons/md";
import { BiBookContent } from "react-icons/bi";
import { Container } from "../container";
import { Button } from "../custom-button";

export function CoreFeatures() {
  return (
    <Container className="bg-white">
      <div className="flex flex-col items-center max-w-6xl mx-auto gap-8 px-4">
        <h1 className="text-3xl text-blue-600 font-bold mb-8">Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Fade cascade className="grid static">
            {items.map((item, index) => (
              <div
                key={`item-${index}`}
                aria-label={item.title}
                className="drop-shadow-xl rounded-md bg-white p-4 text-center mx-auto"
              >
                <div className="items-center flex flex-col">
                  <div className="text-blue-500 slef-center">{item.icon}</div>
                  <h2 className="text-xl font-black my-4">{item.title}</h2>
                </div>
                <p>{item.desc}</p>
              </div>
            ))}
          </Fade>
        </div>
        <Link to="/about">
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
    icon: <BiBookContent className="text-[3rem]" />,
    title: "Comprehensive Core Curriculum",
    desc: "Dive into our expansive core curriculum tailored for aspiring software engineers. Explore a myriad of meticulously crafted modules, each designed to cover indispensable topics. Our curriculum guarantees a robust foundation in the bedrock principles of software engineering.",
  },
  {
    icon: <MdQuiz className="text-[3rem]" />,
    title: "Low level programming",
    desc: "Elevate your comprehension of pivotal concepts through our engaging interactive quizzes. Within every submodule, you'll discover quizzes meticulously designed to challenge your understanding while offering instant feedback. Dive into self-assessment and chart your journey as you navigate through our curriculum.",
  },
  {
    icon: <FaThinkPeaks className="text-[3rem]" />,
    title: "Hands-On Coding Exercises",
    desc: "Immerse yourself in the world of practicality through our hands-on coding exercises. Explore submodules meticulously crafted to both challenge and fortify your coding prowess. Hone your problem-solving abilities, enhance code efficiency, and gain invaluable hands-on experience that will arm you for the rigors of real-world software engineering challenges.",
  },
  {
    icon: <FaThinkPeaks className="text-[3rem]" />,
    title: "Hands-On Coding Exercises",
    desc: "Immerse yourself in the world of practicality through our hands-on coding exercises. Explore submodules meticulously crafted to both challenge and fortify your coding prowess. Hone your problem-solving abilities, enhance code efficiency, and gain invaluable hands-on experience that will arm you for the rigors of real-world software engineering challenges.",
  },
  {
    icon: <FaThinkPeaks className="text-[3rem]" />,
    title: "Hands-On Coding Exercises",
    desc: "Immerse yourself in the world of practicality through our hands-on coding exercises. Explore submodules meticulously crafted to both challenge and fortify your coding prowess. Hone your problem-solving abilities, enhance code efficiency, and gain invaluable hands-on experience that will arm you for the rigors of real-world software engineering challenges.",
  },
  {
    icon: <FaThinkPeaks className="text-[3rem]" />,
    title: "System design",
    desc: "Immerse yourself in the world of practicality through our hands-on coding exercises. Explore submodules meticulously crafted to both challenge and fortify your coding prowess. Hone your problem-solving abilities, enhance code efficiency, and gain invaluable hands-on experience that will arm you for the rigors of real-world software engineering challenges.",
  },
];
