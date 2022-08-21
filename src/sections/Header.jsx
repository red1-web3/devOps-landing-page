import React, { useRef, useState } from "react";
import Logo from "../components/Logo";
import { navItems } from "../data/Constant";
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import classNames from "classnames";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function Header() {
  const [open, setOpen] = useState(false);

  // REF
  const headerRef = useRef(null);
  const logoRef = useRef(null);

  let tl = gsap.timeline();
  let tl2 = gsap.timeline();

  useEffect(() => {
    tl.to(headerRef.current, {
      y: 0,
      duration: 1,
      ease: "back",
      backgroundColor: "transparent",
    });

    gsap.timeline().to(".side1", {
      x: "-100%",
      duration: 1.3,
      ease: "slow(0.7, 0.7, false)",
    });

    gsap.timeline().to(".side2", {
      x: "100%",
      duration: 1.3,
      ease: "slow(0.7, 0.7, false)",
    });

    tl2
      .to(logoRef.current, { y: 0, duration: 0.2, opacity: 1 })
      .to(".navElements", {
        y: 0,
        stagger: 0.1,
        duration: 0.2,
        opacity: 1,
      });
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className="py-5 relative z-[999] -translate-y-20 bg-secondary/80"
      >
        <div className="container-p flex items-center justify-between">
          <div ref={logoRef} className="-translate-y-10 opacity-0">
            <Logo />
          </div>

          <nav className="hidden md:block">
            <ul className="flex items-center">
              {navItems.map(({ label, url }, i) => {
                return (
                  <li
                    key={i}
                    className={
                      "px-5 text-lg font-medium text-white duration-200 hover:text-slate-300 navElements -translate-y-10 opacity-0"
                    }
                  >
                    <a href={url}>{label}</a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile Nav Start */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen((open) => !open)}
              className="flex justify-end text-white/70 select-none"
            >
              <FaBars size={40} />
            </button>
            <div
              className={classNames(
                "fixed top-0 left-0 h-screen bg-secondary/50 transition-all w-full",
                open ? "translate-y-0" : "-translate-y-full",
              )}
            >
              <nav
                className={classNames(
                  "h-3/5 w-full z-[999] relative bg-red-500",
                )}
              >
                <div className="w-full h-full bg-secondary flex flex-col justify-between">
                  <div>
                    <button
                      onClick={() => setOpen((open) => !open)}
                      className="flex justify-end w-full select-none p-7 text-white/80"
                    >
                      <IoClose size={45} />
                    </button>
                    <ul className="text-center">
                      {navItems.map(({ label, url }, i) => {
                        return (
                          <li
                            key={i}
                            className={
                              "px-5 py-3 text-2xl font-medium text-white duration-200 hover:text-slate-300"
                            }
                          >
                            <a href={url}>{label}</a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div className="flex flex-col items-center py-3">
                    <p className="h-px bg-primary/30 w-full"></p>
                    <span className="text-primary/30 font-bold text-[36px]">
                      DevOps
                    </span>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          {/* Mobile Nav End */}
        </div>
      </header>

      <div className="absolute bottom-0 left-0 h-[calc(100vh-100px)] w-full z-[999] grid grid-cols-2 pointer-events-none">
        <div className="side1 h-full bg-secondary blur-sm"></div>
        <div className="side2 h-full bg-secondary blur-sm"></div>
      </div>
    </>
  );
}
