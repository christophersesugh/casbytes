import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { cn } from "~/libs/shadcn";
import { Button } from "./custom-button";

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
          "-p-1 drop-shadow-sm duration-300 rounded-md bg-slate-200 w-full flex justify-between capitalize text-lg flex-wrap border-2",
          accordionIndex === index
            ? "text-stone-900"
            : "text-blue-600 border-l border-slate-200",
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
