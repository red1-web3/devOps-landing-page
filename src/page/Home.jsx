import React from "react";
import AboutConsultancy from "../sections/AboutConsultancy";
import ContactUs from "../sections/ContactUs";
import Footer from "../sections/Footer";
import Header from "../sections/Header";
import Hero from "../sections/Hero";
import OurProject from "../sections/OurProject";
import WhatWeCanDo from "../sections/WhatWeCanDo";

export default function Home() {
  return (
    <>
      <Header />
      <div className="space-y-[60px] md:space-y-[110px] lg:space-y-[130px]">
        <Hero />
        <AboutConsultancy />
        <WhatWeCanDo />
        <OurProject />
        <ContactUs />
      </div>
      <Footer />
    </>
  );
}
