import React from "react";
import clsx from "clsx";
import { GrBlockQuote } from "react-icons/gr";

type Testimonial = {
  image: React.ReactNode;
  name: string;
  content: string;
};

export function Testimonial({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  return (
    <article
      className={clsx(
        "bg-white drop-shadow-xl rounded-md flex flex-col items-center mx-auto pb-2 mb-2 p-4 border border-blue-500",
        index % 2 === 0 && "md:mt-3 md:-mb-3",
      )}
    >
      <GrBlockQuote className="self-start opacity-30 text-4xl mb-4 text-blue-500" />
      <p className="text-sm">{testimonial.content}</p>
      <div className="flex items-center self-start gap-2 my-4">
        <div className="text-3xl">{testimonial.image}</div>
        <div>
          <h1 className="text-sm font-black opacity-80">{testimonial.name}</h1>
          <h2 className="capitalize text-xs opacity-50">software engineer</h2>
        </div>
      </div>
    </article>
  );
}
