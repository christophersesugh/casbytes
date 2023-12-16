import { Container } from "~/components/container";
import { Button } from "../custom-button";

export function Pricing() {
  return (
    <Container>
      <div className="mx-auto bg-blue-200 rounded-md py-20">
        <div className="max-w-md mx-auto">
          <h1 className="text-center text-2xl mb-8">
            Start our introductory courses for free. When you are prepared and
            ready to move forward, it's just a step away.
          </h1>
          <div className="flex items-center  rounded-md">
            <div className="p-6 bg-blue-600 text-white rounded-l-md h-full">
              <span className="text-[2rem] font-black">$14.9</span>/month
            </div>
            <div className="bg-white">
              <p>
                Nurture your growth through genuine, real-world software
                engineering experiences.{" "}
              </p>
              <p>Cancel anytime</p>
              <Button>Learn more...</Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

const paymentOptions = [
  { title: "core", price: 49 },
  { title: "advanced", price: 99 },
];
