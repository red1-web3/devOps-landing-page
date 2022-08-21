import React from "react";
import Button from "./Button";

function Form() {
  return (
    <div className="space-y-12 __contactUsForm -translate-x-32 opacity-0">
      <header className="!space-y-6">
        <h3 className="font-black text-[30px] md:text-[40px] lg:text-[50px] capitalize leading-tight">
          <span className="text-white">Contact </span>
          <span className="text-primary">Us</span>
        </h3>
        <p className="md:font-medium text-base md:text-lg lg:text-xl text-white/70">
          Schedule a free DevOps assessment session
        </p>
      </header>

      <form className="space-y-4 md:w-[440px]">
        <input
          type="text"
          placeholder="Name*"
          className="bg-white/10 border outline-none text-white border-white/20 focus:border-white/40 py-3 px-4 w-full placeholder:text-white/40"
        />
        <input
          type="email"
          placeholder="Email*"
          className="bg-white/10 border outline-none text-white border-white/20 focus:border-white/40 py-3 px-4 w-full placeholder:text-white/40"
        />

        <textarea
          className="bg-white/10 border outline-none text-white border-white/20 focus:border-white/40 py-3 px-4 w-full placeholder:text-white/40 resize-none"
          rows={6}
          placeholder="How we can help you?*"
        ></textarea>

        <Button text={"Let’s Chat"} />
      </form>
    </div>
  );
}

export default Form;
