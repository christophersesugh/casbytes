import { Link } from "@remix-run/react";
import { Button } from "~/components/custom-button";
import { cn } from "~/libs/shadcn";

export function PaymentCard() {
  // {}: // index,
  // option,
  // {
  //   index: number;
  //   option: { title: string; price: number };
  // }
  return (
    <article
      className={cn(
        // index === 0 ? "bg-zinc-200" : "bg-blue-200",
        "p-8 rounded-md border-1 w-full bg-blue-200 py-20",
      )}
    >
      <h2 className="text-2xl max-w-md mx-auto mb-12 text-center">
        Start our introductory courses for free. When you are prepared and ready
        to move forward, it's just a step away.
      </h2>

      <div className="rounded-md max-w-lg mx-auto">
        <h3
          className={cn(
            // index === 0 ? "text-zinc-700" : "text-blue-600",
            "mb-4 text-2xl capitalize text-blue-700",
          )}
        >
          {/* {option.title} curriculum */}
          Subscription.
        </h3>
        <div
          className={cn(
            // index === 0 ? "bg-zinc-400" : "bg-blue-400",
            "rounded-t-md p-6 text-lg bg-blue-500",
          )}
        >
          {/* <span className="text-white text-4xl">${option.price}</span> */}
          <span className="text-white text-4xl">$15</span>

          <span className="text-slate-200"> /month</span>
        </div>
        <div className="bg-slate-100 rounded-b-md p-6">
          <p>
            {/* {index === 0
              ? "Gain the basic software engineering experience."
              : "Flourish in authentic real-world software engineering experiences."} */}
            Flourish in authentic real-world software engineering experiences.
          </p>
          <p>Cancel anytime.</p>
          <Button
            className={cn(
              // index === 0 ? "bg-zinc-400" : "bg-blue-400",
              "w-full mt-6 mb-2 text-xl text-slate-100 bg-blue-500 capitalize",
            )}
            asChild
          >
            <Link to="/sign-in">sign in to subscribe</Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
