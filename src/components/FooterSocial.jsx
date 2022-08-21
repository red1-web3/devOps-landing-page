import React from "react";
import { social } from "../data/Constant";

export default function FooterSocial() {
  return (
    <ul className="flex items-center gap-3 __footerIcons -translate-y-10 opacity-0">
      {social.map(({ icon, url }, i) => (
        <li
          key={i}
          className="group text-xl w-10 aspect-square flex items-center justify-center bg-white/40 rounded-full text-white cursor-pointer"
        >
          <a className="group-hover:rotate-animation inline-block" href={url}>
            {icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
