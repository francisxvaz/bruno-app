import React from "react";
import Link from "next/link";

const people = [
  { v: "car", name: "bruno" },
  { v: "bus", name: "jayden" },
  { v: "airplane", name: "ethan" },
  { v: "rickshaw", name: "francis" },
  { v: "walking", name: "leena" },
];

function Details() {
  return (
    <div>
      {people.map((e) => {
        <div>
          <Link as={`/${e.v}/${e.name}`} href="/[vehicles]/[person]">
            <a>{e.name}</a>
          </Link>
        </div>;
      })}
    </div>
  );
}

export default Details;
