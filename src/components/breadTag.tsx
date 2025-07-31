import React from "react";

const BreadTag = ({ textSrc }: { textSrc: string[] }) => {
  return (
    <ul className="flex gap-2">
      {textSrc.map((text) => (
        <li key={text}>
          <span className="bg-orange rounded-2xl h-[31px] p-2 text-xs font-semibold">
            {text}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default BreadTag;
