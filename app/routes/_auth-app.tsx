import React from "react";
import { Outlet } from "@remix-run/react";
import {
  CalendarCheck,
  CalendarDays,
  Contact2,
  Home,
  LayoutDashboard,
  LibrarySquare,
  UserCircle2,
} from "lucide-react";
import { NavBar, SideBar } from "~/components/navigation";
import { TooltipProvider } from "~/components/custom-tooltip";
import { cn } from "~/libs/shadcn";

export default function AuthApp() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  return (
    <TooltipProvider>
      <NavBar
        menuItems={menuItems}
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
      />
      <SideBar
        menuItems={menuItems}
        isOpen={isNavOpen}
        setIsOpen={setIsNavOpen}
      />
      <div
        className={cn(
          "duration-300",
          isNavOpen ? "ml-0 md:ml-52" : "ml-0 md:ml-16",
        )}
      >
        <Outlet />
      </div>
    </TooltipProvider>
  );
}

const menuItems = [
  {
    icon: <Home size={30} />,
    label: "dashboard",
    href: "dashboard",
  },
  {
    icon: <LibrarySquare size={30} />,
    label: "onboarding",
    href: "onboarding",
  },
  {
    icon: <CalendarDays size={30} />,
    label: "calendar",
    href: "calendar",
  },
  {
    icon: <CalendarCheck size={30} />,
    label: "events",
    href: "event",
  },

  {
    icon: <Contact2 size={30} />,
    label: "workshops",
    href: "workshop",
  },

  {
    icon: <UserCircle2 size={30} />,
    label: "my account",
    href: "my-account",
  },
];
