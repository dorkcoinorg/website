"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

import { Icon } from "@iconify/react";

import heroImg from "../../public/img/hero-img.png";

const Hero = () => {
  return (
    <>
      <section className="hero section-space-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-9 text-center">
              <span
                className="d-inline-block mb-4 text-secondary fs-24 text-stroke gsap-text-animation"
                data-split-type="words"
                data-delay="0.5"
              >
                {" "}
                Real Dorks' Cryptocurrency{" "}
              </span>
              <h1
                className="hero__title mb-10 text-light text-stroke-md text-shadow-md gsap-text-animation"
                data-split-type="chars"
                data-delay="0.75"
              >
                {" "}
                DORKCOIN{" "}
              </h1>
              <div className="d-flex justify-content-center align-items-center flex-wrap gap-4">
                <Link
                  href="https://discord.gg/dorkcoin"
                  className="btn btn-lg btn-light text-heading align-items-center rounded rounded gsap-fade-in"
                  data-delay="1.15"
                  data-y="50%"
                >
                  <span className="d-inline-block ff-1">Join Real Dorks</span>
                  <Icon icon="tabler:brand-discord" />
                </Link>
              </div>
              <Image
                src={heroImg}
                alt="Hero main image"
                className="img-fluid mt-10 gsap-fade-in"
                data-delay="1.25"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
