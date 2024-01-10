import React from "react";
type TitleProps = {
  title: string;
};

export function Title({ title }: TitleProps) {
  return <h1 className="text-lg font-black text-zinc-500 mb-4">{title}</h1>;
}
