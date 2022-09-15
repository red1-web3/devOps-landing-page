import React from "react";

import { whatWeCanDo } from "../data/Constant";
import classNames from "classnames";
import { gsap } from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function CloudComponents() {
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".__whatwecando",
        start: "top 40%",
      },
    });
    tl.to(".__cards", {
      duration: 0.5,
      ease: "back",
      backgroundColor: "#23252C",
      opacity: 1,
    })
      .from(".__cardImages", {
        scale: 1,
        rotateX: 360,
        duration: 1.7,
        ease: "bounce",
      })
      .to(
        ".__cardSubTitleText1",
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "back",
          delay: 0,
          stagger: {
            grid: [1, 5],
            from: "center",
            amount: 0.5,
          },
        },
        "-=1.9",
      )
      .to(
        ".__cardParaText1",
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "back",
          delay: 0,
          stagger: {
            grid: [7, 15],
            from: "center",
            amount: 0.5,
          },
        },
        "-=1.7",
      )
      .to(
        ".__cardSubTitleText2",
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "back",
          delay: 0,
          stagger: {
            grid: [1, 5],
            from: "center",
            amount: 0.5,
          },
        },
        "-=.9",
      )
      .to(
        ".__cardParaText2",
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "back",
          delay: 0,
          stagger: {
            grid: [7, 15],
            from: "center",
            amount: 0.5,
          },
        },
        "-=.7",
      );
  }, []);

  return (
    <>
      {whatWeCanDo.map(({ img, para, subTitle, alt }, index) => {
        return (
          <div
            key={index}
            className={classNames(
              "bg-[#0907073b] md:py-10 py-5 px-5 md:px-[30px] space-y-3 rounded-2xl __cards",
            )}
          >
            <div className={classNames("!mb-[24px] __cardImages")}>
              <img src={img} alt={alt} />
            </div>
            <h5 className="font-black text-2xl text-white">
              {[...subTitle].map((letter, i) => (
                <span
                  key={i}
                  className={classNames(
                    "translate-y-8 inline-block whitespace-pre opacity-0",
                    index < 3 ? "__cardSubTitleText1" : "__cardSubTitleText2",
                  )}
                >
                  {letter}
                </span>
              ))}
            </h5>
            <div className="w-[85%]">
              <p className="font-medium text-lg md:text-xl text-white/80">
                {[...para].map((letter, i) => (
                  <span
                    className={classNames(
                      "translate-x-5 opacity-0",
                      index < 3 ? "__cardParaText1" : "__cardParaText2",
                    )}
                    key={i}
                  >
                    {letter}
                  </span>
                ))}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}
