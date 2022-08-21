import React from "react";

export default function ParaText({ white, yellow }) {
  return (
    <p className="font-medium text-lg md:text-xl __aboutParaText">
      <span className="text-primary">{yellow && yellow}</span>
      <span className="text-white/80">{white}</span>
    </p>
  );
}
