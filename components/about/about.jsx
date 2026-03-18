import { Icon } from "@iconify/react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import aboutData from "../../data/about.json";

const About = () => {
  const { title, description, description2, button1, buttonLink1, button2, buttonLink2, images } =
    aboutData.about;

  return (
    <>
      <div id="about" className="section-space-y overflow-hidden">
        <div className="container">
          <div className="row g-4 align-items-center">

            <div className="col-md-12">
              <div
                className="position-relative bg-secondary px-6 py-8 px-xl-10 py-xl-12 px-xxl-15 py-xxl-18 rounded-5 border border-2x border-dark shadow-sharp-md z-1 gsap-fade-in"
                data-scroll-trigger="true"
                data-delay="0.75"
              >
                <h2 className="text-light text-stroke text-shadow">{title}</h2>
                <p className="mb-8 fs-24 text-heading">{description}</p>
                <p className="mb-8 fs-24 text-heading">{description2}</p>

                <div className="d-flex align-items-center flex-wrap gap-2">
                  <Link
                    href={buttonLink1}
                    className="btn btn-md btn-light text-heading align-items-center rounded"
                    target="_blank"
                  >
                    <span className="d-inline-block ff-1">{button1}</span>
                  </Link>
                  <Link
                    href={buttonLink2}
                    className="btn btn-md btn-light text-heading align-items-center rounded"
                    target="_blank"
                  >
                    <span className="d-inline-block ff-1">{button2}</span>
                  </Link>
                </div>

                <Image
                  src={images.element1}
                  alt="About element 1"
                  width={79}
                  height={78}
                  className="img-fluid d-none d-xl-block position-absolute start-0 top-0 translate-middle-y pointer-none"
                />
                <Image
                  src={images.element2}
                  alt="About element 2"
                  width={79}
                  height={78}
                  className="img-fluid d-none d-xl-block position-absolute end-0 top-0 translate-middle-y pointer-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
