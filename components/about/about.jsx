import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="section-space-y overflow-hidden">
      <div className="container">
        <div className="row g-4 align-items-center">

          <div className="col-md-12">
            <div
              className="position-relative bg-secondary px-6 py-8 px-xl-10 py-xl-12 px-xxl-15 py-xxl-18 rounded-5 border border-2x border-dark shadow-sharp-md z-1 gsap-fade-in"
              data-scroll-trigger="true"
              data-delay="0.75"
            >

              <h2 className="text-light text-stroke text-shadow">
                What is Dorkcoin?
              </h2>

              <p className="mb-6 fs-24 text-heading">
                Dorkcoin is a fun memecoin built for internet misfits — the “Real Dorks”.
                It runs on its own blockchain and uses Proof-of-Stake instead of mining.
              </p>

              <p className="mb-6 fs-24 text-heading">
                Beyond crypto, it’s a community-driven project that mixes humor,
                decentralization, and a culture of creativity and dorkiness.
              </p>

              <Image
                src="/img/about-element-1.png"
                alt="About element 1"
                width={79}
                height={78}
                className="img-fluid d-none d-xl-block position-absolute start-0 top-0 translate-middle-y pointer-none"
              />

              <Image
                src="/img/about-element-2.png"
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
  );
};

export default About;