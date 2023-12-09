import React from "react";
import { Tabs as ShTabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { cn } from "~/libs/shadcn";

type TabsProps = {
  defaultValue?: string;
  tabContent: { label: string; content: string }[];
  className?: string;
};

export function Tabs({
  defaultValue,
  tabContent = [
    { label: "account", content: "Account" },
    { label: "password", content: "Password" },
  ],
  className,
  ...props
}: TabsProps) {
  const [tabValue, setTabValue] = React.useState(0);
  return (
    <ShTabs
      className="w-full"
      defaultValue={defaultValue ? defaultValue : tabContent[0].label}
      {...props}
    >
      <TabsList className="w-full">
        {tabContent.map((tab, index) => (
          <TabsTrigger
            key={tab.label}
            value={tab.label}
            onClick={() => setTabValue(index)}
          >
            {tab.content}
          </TabsTrigger>
        ))}
        {/* <TabsTrigger value="account">Account</TabsTrigger>
         <TabsTrigger value="password">Password</TabsTrigger> */}
      </TabsList>
      <TabsContent
        value={tabContent[tabValue].content}
        className="w-full text-red-700"
      >
        {tabContent[tabValue].content}
      </TabsContent>
    </ShTabs>
  );
}
