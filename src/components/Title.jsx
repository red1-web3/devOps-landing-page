import React from "react";

export default function ({ white, yellow }) {
  return (
    <h3 className="font-black text-[30px] md:text-[40px] lg:text-[50px] capitalize leading-[1.1] __titleGsapAnimation">
      <span className="text-white">{white} </span>
      <span className="text-primary">{yellow} </span>
    </h3>
  );
}
