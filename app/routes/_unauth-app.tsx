import React from "react";
import { Outlet } from "@remix-run/react";
import { NavBar } from "~/components/navigation";

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
    </>
  );
}

export const menuItems = [
  { label: "curriculum", href: "curriculum" },
  { label: "about", href: "about" },
  { label: "FAQs", href: "faqs" },
];
