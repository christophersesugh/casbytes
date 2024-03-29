import React from "react";
import { BsInfoCircle } from "react-icons/bs";
import { Link } from "@remix-run/react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";
import clsx from "clsx";
import { AspectRatio } from "../ui/aspect-ratio";

type ElemProps = {
  children?: React.ReactNode;
};

export function P(props: ElemProps): React.ReactElement {
  if (
    React.isValidElement(props.children) &&
    typeof props.children.type === "string" &&
    props.children.type === "img"
  ) {
    return <>{props.children}</>;
  }
  return <p {...props} />;
}

export function H1(props: ElemProps): React.ReactElement {
  return (
    <h1
      className="text-3xl mt-5 mb-4 capitalize dark:text-white text-blue-700"
      {...props}
    />
  );
}

export function H2(props: ElemProps): React.ReactElement {
  return (
    <h2
      className="text-2xl mt-4 mb-3 capitalize dark:text-white text-blue-700"
      {...props}
    />
  );
}
export function H3(props: ElemProps): React.ReactElement {
  return (
    <h3
      className="text-xl mt-3 mb-2 capitalize dark:text-white text-blue-700"
      {...props}
    />
  );
}

export function H4(props: ElemProps): React.ReactElement {
  return (
    <h4
      className="text-lg mt-3 mb-2 capitalize dark:text-amber-600 text-amber-700"
      {...props}
    />
  );
}

export function H5(props: ElemProps): React.ReactElement {
  return (
    <h4
      className="text-lg mt-3 mb-2 capitalize dark:text-white text-blue-700"
      {...props}
    />
  );
}

export function H6(props: ElemProps): React.ReactElement {
  return (
    <h4
      className="text-lg mt-3 mb-2 capitalize dark:text-white text-blue-700"
      {...props}
    />
  );
}

export function UL(props: ElemProps): React.ReactElement {
  return <ul className="list-disc list-inside space-y-3 text-lg" {...props} />;
}

export function OL(props: ElemProps): React.ReactElement {
  return (
    <ol className="list-decimal list-inside space-y-3 text-lg" {...props} />
  );
}

export function BlockQuote(props: ElemProps): React.ReactElement {
  return (
    <blockquote
      className="relative bg-blue-200 border-l-8 border-blue-500 text-black p-4 my-6 rounded-md"
      {...props}
    >
      <BsInfoCircle
        title="Info"
        className="w-4 h-4 inline mb-2 -p-6 absolute top-1 left-1"
      />
      <div className="mt-2">{props.children}</div>
    </blockquote>
  );
}

export function Strong(props: ElemProps): React.ReactElement {
  return (
    <strong className="font-black text-black dark:text-white" {...props} />
  );
}

export function B(props: ElemProps): React.ReactElement {
  return <b className="font-bold text-black dark:text-white" {...props} />;
}

export function Img(props: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <AspectRatio className="mx-auto my-6">
      <img className="rounded-sm object-cover" {...props} alt={props.alt} />
    </AspectRatio>
  );
}

export function MdLink(props: any): React.ReactElement {
  return (
    <Link
      to={props.href}
      target="_blank"
      prefetch="intent"
      className="text-blue-700"
      {...props}
    >
      {props.children}
    </Link>
  );
}

export function CodeBlock(props: any): React.ReactElement {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { node, inline, className, children } = props;
  const match = /language-(\w+)/.exec(className || "");
  return !inline && match ? (
    <SyntaxHighlighter
      {...props}
      children={String(children).replace(/\n$/, "")}
      style={nightOwl}
      showLineNumbers
      language={match[1]}
      PreTag="div"
    />
  ) : (
    <code
      {...props}
      className={clsx(
        "rounded-sm px-1 bg-slate-200 dark:bg-slate-500 dark:text-white text-lg",
        className,
      )}
    >
      {children}
    </code>
  );
}
