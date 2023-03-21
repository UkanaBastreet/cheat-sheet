import React from "react";

interface SheetProps {
  id: number;
  name: string;
  blocks: any[];
  createdAt?: number;
}

export default function Sheet(props: SheetProps) {
  return (
    <>
      <li>
        <h2>{props.name}</h2>
        <span>{props.blocks.join(" ")}</span>
        {props.createdAt ? (
          <span>new Date(props.createdAt).toDateString()</span>
        ) : (
          ""
        )}
      </li>
    </>
  );
}
