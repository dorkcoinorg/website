"use client";

import { useEffect } from "react";

import About from "@/components/about/about";
import HeaderOne from "@/components/header/header";
import Hero from "@/components/hero/hero";
import Ticker from "@/components/ticker/ticker";
import Stake from "@/components/stake/how-to-stake";
import FooterOne from "@/components/footer/footer";

export default function HomePage() {
  useEffect(() => {
    const body = document.body;
    let scrollTimeout;

    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const primaryHeader = document.querySelector(".primary-header");
        if (!primaryHeader) return;

        const primaryHeaderTop = primaryHeader.offsetHeight / 3;
        const scrolled = window.scrollY;

        if (scrolled > primaryHeaderTop) {
          body.classList.add("primary-header-crossed");
        } else {
          body.classList.remove("primary-header-crossed");
        }
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <main data-page="home" className="bg-primary overflow-x-hidden">
      <HeaderOne headerClass="primary-header--transparent-light-alt primary-header--fixed top-0 primary-header-crossed:full-dark" />

      <div className="smooth-wrapper">
        <div className="smooth-content">
          <Hero />
          <Ticker
            parentClass="ticker-1 py-4 bg-light border-top border-bottom border-2x border-dark gsap-fade-in"
            dir="right"
            delay="3.5"
            changeIcon={true}
            textClass="mb-0 text-secondary text-stroke text-shadow"
            textClassTwo="mb-0 text-primary text-stroke text-shadow"
          />
          <About />
          <Stake />
          <FooterOne />
        </div>
      </div>
    </main>
  );
}
