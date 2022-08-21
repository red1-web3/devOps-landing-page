import React, { useEffect } from "react";
import Form from "../components/Form";
import Vector2 from "../components/Vector2";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function ContactUs() {
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".__contactUsSection",
        start: "top 200px",
      },
    });

    tl.to(".__contactUsForm, .__contactUsVector", {
      x: 0,
      duration: 0.8,
      ease: "back",
      opacity: 1,
    });
  }, []);

  return (
    <section id="contact" className="container-p __contactUsSection">
      <div className="grid-cols-1 grid md:grid-cols-[auto,580px] lg:grid-cols-[auto,680px]">
        <Form />
        <Vector2 />
      </div>
    </section>
  );
}

export default ContactUs;
