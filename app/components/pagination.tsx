import React from "react";
import { Link, Form } from "@remix-run/react";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import { MarkAsCompletedButton } from "./mark-as-completed-button";
import { Button } from "./custom-button";

type PaginationProps = {
  nextTo: string;
  previousTo: string;
  markAsCompletedTo: string;
  previousItem?: string;
  nextItem?: string;
  previousItemOnClick?: () => void;
  nextItemOnClick?: () => void;
  markAsCompletedOnClick?: () => void;
  markAsCompletedDisabled?: boolean;
  previousItemDisabled?: boolean;
  nextItemDisabled?: boolean;
};

export function Pagination({
  nextTo,
  previousTo,
  markAsCompletedTo,
  previousItem = "",
  nextItem = "",
  previousItemOnClick,
  nextItemOnClick,
  markAsCompletedOnClick,
  markAsCompletedDisabled,
  previousItemDisabled,
  nextItemDisabled,
}: PaginationProps) {
  return (
    <Form className="flex flex-wrap justify-between">
      <Button
        variant="outline"
        onClick={previousItemOnClick}
        disabled={previousItemDisabled}
        aria-label={previousItem}
        asChild
        className="flex items-center"
      >
        <Link prefetch="intent" to={previousTo}>
          <RiArrowLeftSLine className="inline h-6 w-6" /> {previousItem}
        </Link>
      </Button>
      <MarkAsCompletedButton
        to={markAsCompletedTo}
        onClick={markAsCompletedOnClick}
        disabled={markAsCompletedDisabled}
      />
      <Button
        variant="outline"
        onClick={nextItemOnClick}
        disabled={nextItemDisabled}
        aria-abel={nextItem}
        asChild
        className="flex items-center"
      >
        <Link prefetch="intent" to={nextTo}>
          {nextItem} <RiArrowRightSLine className="inline h-6 w-6" />
        </Link>
      </Button>
    </Form>
  );
}
