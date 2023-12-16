import React from "react";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Card as ShCard,
} from "./ui/card";

type CardProps = {
  title: string;
  description?: string;
  footerContent?: string;
  className?: string;
};

export default function Card({
  children,
  className = "",
  title,
  description,
  footerContent,
  ...props
}: React.PropsWithChildren<CardProps>) {
  return (
    <ShCard className={className} {...props}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      {footerContent ? <CardFooter>{footerContent}</CardFooter> : null}
    </ShCard>
  );
}
