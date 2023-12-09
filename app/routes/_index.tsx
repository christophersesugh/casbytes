import type { MetaFunction } from "@remix-run/node";
import { Home } from "~/components/home";

export const meta: MetaFunction = () => {
  return [
    { title: "CASBytes" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return <Home />;
}
