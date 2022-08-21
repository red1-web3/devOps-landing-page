import React from "react";
import Button from "../components/Button";
import FooterSocial from "../components/FooterSocial";
import Logo from "../components/Logo";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".__footer",
        start: "100px bottom",
      },
    });
    tl.to(".__logoForFooter, .__buttonForFooter", {
      duration: 0.5,
      opacity: 1,
      y: 0,
      ease: "back",
    }).to(".__footerIcons", { y: 0, stagger: 0.1, opacity: 1, duration: 0.5 });
  }, []);

  return (
    <footer className="bg-[#101217] py-10 mt-10 __footer">
      <div className="container-p flex flex-col gap-10 md:gap-0 md:flex-row justify-between items-center">
        <a
          href=""
          className="flex flex-col items-start leading-none gap-1 __logoForFooter -translate-y-10 opacity-0"
        >
          <span className="text-primary font-bold text-[36px]">DevOps</span>
          <span className="text-white text-[22px]">Consultancy</span>
        </a>
        <FooterSocial />
        <button
          type="button"
          className="__buttonForFooter opacity-0 -translate-y-10 relative capitalize px-7 py-3 bg-primary text-[#171A21] rounded font-semibold !font-primary hover:text-black text-lg"
        >
          Work with us
        </button>
      </div>
    </footer>
  );
}
