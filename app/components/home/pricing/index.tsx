import { PaymentCard } from "./item";
import { Container } from "~/components/container";

export function Pricing() {
  return (
    <Container>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl mb-12 text-center">
          Start our introductory courses for free. When you are prepared and
          ready to move forward, it's just a step away.
        </h2>
        <div className="flex flex-col justify-evenly mx-auto md:flex-row gap-6">
          {paymentOptions.map((option, index) => (
            <PaymentCard
              key={`payment-${index}`}
              option={option}
              index={index}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

const paymentOptions = [
  { title: "core", price: 49 },
  { title: "advanced", price: 99 },
];
