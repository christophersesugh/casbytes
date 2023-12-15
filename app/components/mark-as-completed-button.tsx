import { Link } from "@remix-run/react";
import { CheckCircle } from "lucide-react";
import { Button } from "./custom-button";

type MarkAsCompletedButtonProps = {
  to: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

export function MarkAsCompletedButton({
  to,
  onClick,
  className = "",
  disabled,
  ...props
}: MarkAsCompletedButtonProps) {
  return (
    <Button
      variant="ghost"
      aria-label="mark as completed"
      onClick={onClick}
      className={className}
      disabled={disabled}
      {...props}
      asChild
    >
      <Link prefetch="intent" to={to}>
        <CheckCircle className="text-blue-500 hover:text-white-100 inline mr-2" />
        mark as completed
      </Link>
    </Button>
  );
}
