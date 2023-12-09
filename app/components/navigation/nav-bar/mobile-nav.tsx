import { Link } from "@remix-run/react";
import { Button } from "~/components/custom-button";
import { SignOutButton } from "~/components/sign-out-button";
// import { SignOutButton } from "~/components/sign-out-button";
import { cn } from "~/libs/shadcn";

type MobileNavProps = {
  isOpen: boolean;
  handleNavToggle: () => void;
  className?: string;
  menuItems: { label: string; href: string }[];
};

export function MobileNav({
  isOpen,
  menuItems,
  className,
  handleNavToggle,
  ...props
}: MobileNavProps) {
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
        <SignOutButton
          isOpen={isOpen}
          className="text-red-500 hover:opacity-70"
        />
      </ul>
    </nav>
  );
}
