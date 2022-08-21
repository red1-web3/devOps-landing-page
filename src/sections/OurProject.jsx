import React from "react";
import Title from "../components/Title";
import { ourProject } from "../data/Constant";
import { gsap } from "gsap";
import { ScrollTrigger, SlowMo } from "gsap/all";
import { useEffect } from "react";
import classNames from "classnames";

gsap.registerPlugin(ScrollTrigger);

function OurProject() {
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".__ourProjectSectoin",
        start: "top 200px",
      },
    });
    tl.to(".__ourProjectArticles1", {
      x: 0,
      duration: 0.8,
      ease: "back",
      opacity: 1,
    }).to(".__ourProjectImg1", {
      opacity: 1,
      duration: 0.5,
      ease: "back",
      y: 0,
    });
    tl.to(".__ourProjectArticles2", {
      x: 0,
      duration: 0.8,
      ease: "back",
      opacity: 1,
    }).to(".__ourProjectImg2", {
      opacity: 1,
      duration: 0.5,
      ease: "back",
      y: 0,
    });
  }, []);

  return (
    <section
      id="project"
      className="space-y-[80px] container-p __ourProjectSectoin"
    >
      <div className="flex justify-center">
        <Title white="Our" yellow="Project" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-7">
        {ourProject.map(({ img, logo, text, url }, i) => (
          <article
            key={i}
            className={classNames(
              "md:px-10 md:pt-10 pt-5 px-5 rounded-xl bg-[#23252C] flex flex-col items-center gap-[70px] overflow-hidden",
              i % 2 ? "translate-x-32" : "-translate-x-32",
              i <= 1
                ? "__ourProjectArticles1 opacity-0"
                : "__ourProjectArticles2 opacity-0",
            )}
          >
            <div className="flex items-center flex-col gap-4">
              <img
                className={classNames("w-[170px] md:w-[200px] lg:w-[240px]")}
                src={logo}
                alt={"logos"}
              />
              <p
                className={classNames(
                  "md:font-semibold text-base md:text-lg lg:text-xl text-white/70",
                )}
              >
                {text}
              </p>
            </div>
            <a
              className={classNames(
                i <= 1
                  ? "translate-y-full opacity-0 __ourProjectImg1"
                  : "translate-y-full opacity-0 __ourProjectImg2",
              )}
              href={url}
            >
              <img src={img} alt={"Images"} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default OurProject;
