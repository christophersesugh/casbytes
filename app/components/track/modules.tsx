import React from "react";
import { ModuleCard } from ".";
import { Description } from "../description";

export function Modules() {
  return (
    <ul className="col-span-3 flex flex-col gap-6 overflow-y-auto h-screen">
      <Description
        content=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
        expedita corporis rem porro laboriosam, quibusdam est quaerat. Voluptas
        neque dicta, totam, numquam pariatur quia omnis, dignissimos aliquam
        nesciunt quis soluta?"
      />
      {Array.from({ length: 15 }).map((_, i) => (
        <ModuleCard i={i} />
      ))}
    </ul>
  );
}
