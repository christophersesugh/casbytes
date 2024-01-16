import React from "react";
import { Outlet } from "@remix-run/react";
import { NavBar } from "~/components/navigation";
import { Footer } from "~/components/footer";

export default function UnAuthApp() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  return (
    <>
      <NavBar
        menuItems={menuItems}
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
      />
      <Outlet />
      <Footer />
    </>
  );
}

export const menuItems = [
  { label: "curriculum", href: "curriculum" },
  { label: "FAQs", href: "faqs" },
  { label: "blog", href: "blog" },
];
