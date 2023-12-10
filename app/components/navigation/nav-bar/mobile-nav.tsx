import { Link } from "@remix-run/react";
import { Button } from "~/components/custom-button";
import { Separator } from "~/components/custom-separator";
import { SignOutButton } from "~/components/sign-out-button";
// import { SignOutButton } from "~/components/sign-out-button";
import { cn } from "~/libs/shadcn";

type MobileNavProps = {
  isOpen: boolean;
  authApp: boolean;
  handleNavToggle: () => void;
  className?: string;
  menuItems: { label: string; href: string }[];
};

export function MobileNav({
  isOpen,
  menuItems,
  authApp,
  className,
  handleNavToggle,
  ...props
}: MobileNavProps) {
  const user = true;
  return (
    <nav
      className={cn(
        isOpen ? "flex md:hidden" : "hidden",
        "flex-col md:hidden duration-300 ease-in-out absolute  divide-y-2 bg-slate-200 z-10 w-full border-b-2 drop-shadow-lg",
      )}
      id="nav"
      {...props}
    >
      <ul className="space-y-2">
        {menuItems.map((item, index) => (
          <li key={`items-${index}`} aria-label={item.label}>
            <Button
              variant="link"
              onClick={handleNavToggle}
              className="text-lg capitalize"
              asChild
            >
              <Link to={item.href}>{item.label}</Link>
            </Button>
          </li>
        ))}
        <Separator className="text-white" />
        <li>
          {authApp ? (
            <SignOutButton
              isOpen={isOpen}
              className="text-red-500 hover:opacity-70"
            />
          ) : (
            <Button
              variant="ghost"
              className="self-center text-lg text-blue-600"
              asChild
            >
              <Link to="/sign-in">Sign In</Link>
            </Button>
          )}
        </li>
      </ul>
    </nav>
  );
}
