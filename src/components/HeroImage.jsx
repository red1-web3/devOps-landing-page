import React from "react";

export default function HeroImage() {
  return (
    <div className="order-1 md:order-none HEROIMAGE translate-x-full opacity-0">
      <img
        src="/img/HeroImg.png"
        alt="Hero Image"
        className="-translate-x-[35px] my-6 md:my-0 scale-[1.6] md:scale-[1.4] md:-translate-x-12 md:translate-y-8 w-full"
      />
    </div>
  );
}
