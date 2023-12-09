import { SideBarContainer } from "./side-bar-container";
import { SideBarProvider, type SideBarProps } from "./side-bar-context";
import { SideBarContent } from "./side-bar-content";
import { Link } from "@remix-run/react";
import { Tooltip } from "@radix-ui/react-tooltip";
import { Button } from "~/components/custom-button";
import { CustomTooltip } from "~/components/custom-tooltip";

export function SideBar({
  menuItems,
  isOpen,
  setIsOpen,
  ...props
}: SideBarProps) {
  return (
    <SideBarProvider
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      menuItems={menuItems}
      {...props}
    >
      <SideBarContainer>
        <SideBarContent>
          {menuItems.map((item) => (
            <Tooltip key={item.label}>
              <Button
                variant="link"
                className="text-slate-200 hover:text-white"
                asChild
              >
                <Link
                  to={item.label}
                  className="flex gap-4 capitalize text-xl items-center"
                >
                  <CustomTooltip
                    tooltipTrigger={item.icon}
                    tooltipContent={item.label}
                  />
                  {isOpen && item.label}
                </Link>
              </Button>
            </Tooltip>
          ))}
        </SideBarContent>
      </SideBarContainer>
    </SideBarProvider>
  );
}
