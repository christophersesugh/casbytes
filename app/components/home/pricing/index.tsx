import { PaymentCard } from "./item";
import { Container } from "~/components/container";

export function Pricing() {
  return (
    <Container>
      <div className="mx-auto">
        {/* <div className="flex flex-col justify-evenly mx-auto md:flex-row gap-6"> */}
        {/* {paymentOptions.map((option, index) => ( */}
        <PaymentCard
        // key={`payment-${index}`}
        // option={option}
        // index={index}
        />
        {/* ))} */}
        {/* </div> */}
      </div>
    </Container>
  );
}

const paymentOptions = [
  { title: "core", price: 49 },
  { title: "advanced", price: 99 },
];
