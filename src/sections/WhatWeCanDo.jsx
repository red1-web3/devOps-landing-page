import React from "react";
import CloudComponents from "../components/CloudComponents";
import Title from "../components/Title";

function WhatWeCanDo() {
  return (
    <section
      className="__whatwecando container-p space-y-[80px] relative"
      id="whatwecando"
    >
      <div className="text-center">
        {" "}
        <Title white="What We" yellow="Can Do" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-0 md:gap-x-7 md:gap-y-14">
        <CloudComponents />
      </div>
    </section>
  );
}

export default WhatWeCanDo;
