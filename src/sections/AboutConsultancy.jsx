import React from "react";
import Vector from "../components/Vector";
import AboutOurDevConsutancy from "../components/AboutOurDevConsutancy";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function AboutConsultancy() {
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".__aboutConsultancySection",
        start: "top center",
      },
    });

    tl.to(".__aboutConsultancyImage, .__aboutConsultancyText", {
      duration: 0.5,
      opacity: 1,
      x: 0,
      ease: "back",
    });

    // tl.to(".__aboutConsultancyText", { duration: 0.8, opacity: 1, x: 0 });
  }, []);
  return (
    <section
      id="about"
      className="__aboutConsultancySection container-p grid grid-cols-1 md:grid-cols-[2fr,3fr] items-center gap-[90px]"
    >
      <Vector />
      <AboutOurDevConsutancy />
    </section>
  );
}

export default AboutConsultancy;
