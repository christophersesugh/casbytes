import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import { Testimonial } from "./testimonial";
import { Fade } from "react-awesome-reveal";
import { Container } from "~/components/container";

export function Testimonials() {
  return (
    <Container>
      <h2 className="text-blue-500 mb-12 text-3xl text-center">
        <span className="text-black opacity-50">Voices of Success:</span> Hear
        What Our Students Say
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  max-w-4xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <Fade cascade key={`testimonial-${index}`}>
            <Testimonial testimonial={testimonial} index={index} />
          </Fade>
        ))}
      </div>
    </Container>
  );
}

const testimonials = [
  {
    image: <BsPersonCircle />,
    name: "Christopher Sesugh",
    content: `
        some Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        voluptatibus soluta earum aperiam totam, fugit consectetur, architecto
        temporibus aliquam iusto quasi, in corporis id! Nihil fugiat quam aut
        aperiam facere.
`,
  },
  {
    image: <BsPersonCircle />,
    name: "Christopher Sesugh",

    content: `
        some Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        voluptatibus soluta earum aperiam totam, fugit consectetur, architecto
        temporibus aliquam iusto quasi, in corporis id! Nihil fugiat quam aut
        aperiam facere.
`,
  },
  {
    image: <BsPersonCircle />,
    name: "Christopher Sesugh",

    content: `
        some Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        voluptatibus soluta earum aperiam totam, fugit consectetur, architecto
        temporibus aliquam iusto quasi, in corporis id! Nihil fugiat quam aut
        aperiam facere.
`,
  },
  {
    image: <BsPersonCircle />,
    name: "Christopher Sesugh",

    content: `
        some Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        voluptatibus soluta earum aperiam totam, fugit consectetur, architecto
        temporibus aliquam iusto quasi, in corporis id! Nihil fugiat quam aut
        aperiam facere.
`,
  },
  {
    image: <BsPersonCircle />,
    name: "Christopher Sesugh",

    content: `
        some Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        voluptatibus soluta earum aperiam totam, fugit consectetur, architecto
        temporibus aliquam iusto quasi, in corporis id! Nihil fugiat quam aut
        aperiam facere.
`,
  },
  {
    image: <BsPersonCircle />,
    name: "Christopher Sesugh",

    content: `
        some Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        voluptatibus soluta earum aperiam totam, fugit consectetur, architecto
        temporibus aliquam iusto quasi, in corporis id! Nihil fugiat quam aut
        aperiam facere.
`,
  },
];
