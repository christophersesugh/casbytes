import { NotificationMenuTrigger } from "./notification-menu-trigger";
import { NotificationMenu } from "./notification-menu";
import { CourseBadge } from "./course-badge";
import { DropdownMenu } from "~/components/ui/dropdown-menu";

export function Notification() {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-start sm:justify-between gap-4 bg-slate-200 rounded-md p-2">
      <CourseBadge />
      <CourseBadge />
      <CourseBadge />
      <DropdownMenu>
        <NotificationMenuTrigger />
        <NotificationMenu />
      </DropdownMenu>
    </div>
  );
}
