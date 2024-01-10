import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { cn } from "~/libs/shadcn";
import { Button } from "./ui/button";

type AccordionProps = {
  index: number;
  title: string;
  children: React.ReactNode;
  buttonProps?: React.ReactNode;
  accordionIndex: number;
  setAccordionIndex: React.Dispatch<React.SetStateAction<number>>;
};

export function Accordion({
  index,
  title = "javascript",
  children,
  buttonProps,
  accordionIndex,
  setAccordionIndex,
  ...props
}: AccordionProps) {
  return (
    <section
      className={cn(
        "bg-blue-50/60 w-full",
        accordionIndex === index && "border border-blue-300 rounded-md",
      )}
    >
      <Button
        variant="ghost"
        size="lg"
        onClick={() =>
          setAccordionIndex((prevAccordionIndex: number) =>
            prevAccordionIndex === index ? -1 : index,
          )
        }
        aria-label={title}
        className={cn(
          "-p-1 drop-shadow-sm  rounded-md border-white text-slate-50 bg-blue-600 w-full flex justify-between capitalize text-lg flex-wrap border-2",
          // accordionIndex === index
          //   ? "text-stone-900"
          //   : "border-l border-white",
        )}
        {...props}
      >
        <span>
          <span className="mr-2">{buttonProps ? buttonProps : null}</span>{" "}
          {title}{" "}
        </span>
        {accordionIndex === index ? (
          <BiSolidUpArrow className="mr-2" />
        ) : (
          <BiSolidDownArrow className="mr-2" />
        )}
      </Button>
      <div className={cn(accordionIndex === index ? "block" : "hidden")}>
        {children}
      </div>
    </section>
  );
}
