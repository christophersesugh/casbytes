import React from "react";
import { Link, NavLink, useMatches } from "@remix-run/react";
import { Menu, UserCircle2, X } from "lucide-react";
import { Button } from "~/components/custom-button";
import logo from "~/assets/logo.png";
import { cn } from "~/libs/shadcn";
import { RiMenuFoldLine } from "react-icons/ri";
import { ImMenu3, ImMenu4 } from "react-icons/im";

type MainNavProps = {
  menuItems?: { label: string; href: string }[];
  isOpen: boolean;
  authApp: boolean;
  handleNavToggle: () => void;
};

type ItemProps = {
  label: string;
  href: string;
};

export function MainNav({
  isOpen,
  menuItems,
  authApp,
  handleNavToggle,
}: MainNavProps) {
  return (
    <nav className={cn("bg-[#E1F4FF]", authApp ? "lg:hidden block" : "")}>
      <div className="flex items-center justify-between py-8 px-4 xl:px-0 max-w-6xl mx-auto">
        <div className={cn("flex", authApp ? "gap-4" : "")}>
          {authApp ? (
            <Button
              onClick={handleNavToggle}
              size="icon"
              variant="ghost"
              aria-label="toggle navigation"
              className="lg:hidden"
              id="navbar"
              asChild
            >
              {isOpen ? (
                <ImMenu4 className="h-4 w-4 font-black" />
              ) : (
                <ImMenu3 className="h-4 w-4 font-black" />
              )}
            </Button>
          ) : null}
          <Button variant="ghost" asChild>
            <Link to="/">
              <img src={logo} alt="CASBytes" width={200} />
            </Link>
          </Button>
        </div>

        <div className="hidden lg:flex gap-4">
          <div className="flex gap-4 items-center">
            <ul className="flex gap-4">
              {menuItems && menuItems?.length > 0
                ? menuItems?.map((item: ItemProps, index: number) => (
                    <li>
                      <NavLink
                        key={`${item.href}-${index}`}
                        to={item.href}
                        aria-label={item.label}
                        className={({ isActive }) =>
                          isActive ? "text-blue-500 rounded-md" : ""
                        }
                      >
                        <Button variant="link" className="text-lg capitalize">
                          {item.label}
                        </Button>
                      </NavLink>
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </div>
        <div>
          <Button
            // onClick={handleNavToggle}
            size="icon"
            variant="ghost"
            aria-label="toggle navigation"
            className="lg:hidden"
            id="navbar"
            asChild
          >
            <RiMenuFoldLine className="h-4 w-4" />
          </Button>

          <div className="lg:flex gap-4 hidden items-center">
            <Link prefetch="intent" to="/sign-in">
              <Button
                className="capitalize"
                variant="outline"
                aria-label="sign in"
              >
                sign in
              </Button>
            </Link>
            <Link prefetch="intent" to="/sign-up">
              <Button aria-label="sign up" className="capitalize">
                sign up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
