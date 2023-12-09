import React from "react";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";

type NavBarProps = {
  menuItems: { label: string; href: string }[];
  isNavOpen: boolean;
  setIsNavOpen: (value: boolean) => void;
};

export function NavBar({ menuItems, isNavOpen, setIsNavOpen }: NavBarProps) {
  function handleNavToggle() {
    setIsNavOpen(!isNavOpen);
  }
  return (
    <>
      <MainNav isOpen={isNavOpen} handleNavToggle={handleNavToggle} />
      <MobileNav
        menuItems={menuItems}
        isOpen={isNavOpen}
        handleNavToggle={handleNavToggle}
      />
    </>
  );
}
