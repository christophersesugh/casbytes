import React from "react";
import { Link, NavLink, useMatches } from "@remix-run/react";
import { Menu, UserCircle2, X } from "lucide-react";
import { Button } from "~/components/custom-button";
import logo from "~/assets/logo.png";
import { cn } from "~/libs/shadcn";
import { Badge } from "~/components/custom-badge";

type MainNavProps = {
  menuItems?: { label: string; href: string }[];
  isOpen: boolean;
  handleNavToggle: () => void;
};

type ItemProps = {
  label: string;
  href: string;
};

export function MainNav({ isOpen, menuItems, handleNavToggle }: MainNavProps) {
  const matches = useMatches();
  const user = true;

  const authApp = matches.some((match) =>
    match.id.includes("_auth-app") && user ? true : false,
  );
  return (
    <nav className={cn("bg-[#E1F4FF]")}>
      <div className="flex items-center justify-between py-8 px-4 xl:px-0 max-w-6xl mx-auto">
        {authApp ? null : (
          <Button variant="ghost" asChild>
            <Link to="/">
              <img src={logo} alt="CASBytes" width={200} />
            </Link>
          </Button>
        )}

        {authApp ? (
          <div></div>
        ) : (
          <div className="hidden md:flex gap-4">
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
        )}
        <div>
          <Button
            onClick={handleNavToggle}
            size="icon"
            variant="outline"
            aria-label="toggle navigation"
            className="md:!hidden"
            id="navbar"
            asChild
          >
            {isOpen ? (
              <X className="h-4 w-4 text-red-500" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </Button>

          {authApp ? (
            <Badge className="text-md py-1 bg-blue-500">
              {" "}
              <UserCircle2 className="mr-2" />
              Christopher
            </Badge>
          ) : (
            <div className="md:flex gap-4 hidden items-center">
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
          )}
        </div>
      </div>
    </nav>
  );
}
