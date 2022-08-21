import React from "react";
import Button from "./Button";
import ParaText from "./ParaText";

export default function HeroText() {
  return (
    <div className="md:space-y-[30px] space-y-5 order-2 md:order-none HEROTEXT -translate-x-full opacity-0">
      <h1 className="text-[40px] md:text-[62px] lg:text-[72px] font-black leading-[1.1] text-white">
        Cloud <span className="text-primary">DevOps</span> Consulting Services
      </h1>
      <ParaText
        white={
          "Let us take care of your software delivery process; with efficiency, accuracy, faster, and more frequently."
        }
      />
      <div className="mt-3 md:!mt-[50px]">
        <Button text={"Work with us"} />
      </div>
    </div>
  );
}
