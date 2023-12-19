import {
  CheckCheck,
  CircleDashed,
  CircleDotDashed,
  LockKeyhole,
  SigmaSquare,
} from "lucide-react";
import { Badge } from "../custom-badge";

export function Status() {
  return (
    <ul className="gap-4 grid grid-cols-2 border-l-4 border-blue-600 p-2 text-md my-4">
      <li className="flex">
        <CheckCheck className="mr-2 text-blue-600" /> Completed:{" "}
        <Badge className="rounded-full ml-2">20</Badge>
      </li>
      <li className="flex">
        <CircleDashed className="mr-2 text-blue-600" /> Available:{" "}
        <Badge className="rounded-full ml-2">20</Badge>
      </li>
      <li className="flex">
        <CircleDotDashed className="mr-2 text-green-700" /> In progress:{" "}
        <Badge className="rounded-full ml-2">0</Badge>
      </li>
      <li className="flex">
        <LockKeyhole className="mr-2 text-slate-400" /> Locked:{" "}
        <Badge className="rounded-full ml-2">0</Badge>
      </li>
      <li className="flex">
        <SigmaSquare className="mr-2" /> Total:{" "}
        <Badge className="rounded-full ml-2">0</Badge>
      </li>
    </ul>
  );
}
