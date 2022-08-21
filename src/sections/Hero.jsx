import React from "react";
import { useEffect } from "react";
import HeroImage from "../components/HeroImage";
import HeroText from "../components/HeroText";
import { gsap } from "gsap";

export default function Hero() {
  useEffect(() => {
    let tl = gsap.timeline();

    gsap
      .timeline()
      .to(".HEROIMAGE", { duration: 0.8, opacity: 1, ease: "back", x: 0 });
    gsap
      .timeline()
      .to(".HEROTEXT", { duration: 0.8, opacity: 1, ease: "back", x: 0 });
  }, []);

  return (
    <section id="home">
      <div className="container-p grid grid-cols-1 md:grid-cols-[auto,550px] lg:grid-cols-[auto,700px] place-items-center">
        <HeroText />
        <HeroImage />
      </div>
    </section>
  );
}
