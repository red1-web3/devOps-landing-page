import React from "react";

export default function Button({ text }) {
  return (
    <button
      type="button"
      className="relative capitalize px-7 py-3 bg-primary text-[#171A21] rounded font-semibold !font-primary hover:text-black text-lg"
    >
      {text}
    </button>
  );
}
