import { cn } from "~/libs/shadcn";
import { Label } from "./ui/label";
import { CustomAlert } from "./custom-alert";

type CheckboxProps = {
  id: string;
  name: string;
  label: string | React.ReactNode;
  checked?: boolean;
  message?: string;
  className?: string;
  defaultChecked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Checkbox({
  id,
  name,
  label,
  checked,
  message = "",
  onChange,
  className,
  defaultChecked,
  ...props
}: CheckboxProps) {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id={id}
          name={name}
          onChange={onChange}
          className={cn(
            "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500",
            className,
          )}
          {...props}
        />
        <Label htmlFor={id}>{label}</Label>
      </div>
      {message ? (
        <CustomAlert title={message} variant="destructive" className="mt-4" />
      ) : null}
    </div>
  );
}
