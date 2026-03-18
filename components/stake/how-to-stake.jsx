import React from "react";
import Image from "next/image";

import howToStakeData from "../../data/howToStake.json";

import img1 from "../../public/img/how-to-stake-img.png";

const howToStake = () => {
  const leftItems = howToStakeData.howToStake.slice(0, 2);
  const rightItems = howToStakeData.howToStake.slice(2);

  return (
    <>
      <div id="how-to-stake" className="section-space-top">
        <div className="container-fluid container-fhd">
          <div className="row">
            <div className="col-12">
              <div className="how-to-stake-section-1 section-space-y">
                {/* Section Title */}
                <div className="section-space-md-bottom">
                  <div className="container">
                    <div className="row">
                      <div className="col-12">
                        <h2
                          className="mb-0 text-center text-light text-stroke-md text-shadow-md fs-6vw gsap-text-animation"
                          data-split-type="words"
                          data-scroll-trigger="true"
                        >
                          HOW TO <span className="text-secondary">STAKE</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="container">
                  <div className="row g-4 align-items-center">
                    {/* Left Column */}
                    <div className="col-xl-4">
                      <div className="row g-4">
                        {leftItems.map((item) => (
                          <div key={item.id} className="col-md-6 col-xl-12">
                            <div
                              className="border border-dark shadow-sharp rounded-5 bg-light gsap-fade-in"
                              data-scroll-trigger="true"
                              data-y={item.y}
                            >
                              <div className="border-bottom border-dark px-8 pt-8 pb-4">
                                <ul className="list list-row gap-2">
                                  <li>
                                    <span className="d-block w-4 h-4 rounded-circle border border-2x border-dark bg-danger"></span>
                                  </li>
                                  <li>
                                    <span className="d-block w-4 h-4 rounded-circle border border-2x border-dark bg-warning"></span>
                                  </li>
                                  <li>
                                    <span className="d-block w-4 h-4 rounded-circle border border-2x border-dark bg-success"></span>
                                  </li>
                                </ul>
                              </div>
                              <div className="p-8">
                                <h5>{item.title}</h5>
                                <p className="mb-0 fs-18 text-heading">
                                  {item.text}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Center Image */}
                    <div className="col-xl-4 d-none d-xl-block">
                      <Image
                        src={img1}
                        width={416}
                        height={443}
                        alt="image"
                        className="img-fluid gsap-fade-in"
                        data-scroll-trigger="true"
                        data-delay="1"
                      />
                    </div>

                    {/* Right Column */}
                    <div className="col-xl-4">
                      <div className="row g-4">
                        {rightItems.map((item) => (
                          <div key={item.id} className="col-md-6 col-xl-12">
                            <div
                              className="border border-dark shadow-sharp rounded-5 bg-light gsap-fade-in"
                              data-scroll-trigger="true"
                              data-y={item.y}
                            >
                              <div className="border-bottom border-dark px-8 pt-8 pb-4">
                                <ul className="list list-row gap-2">
                                  <li>
                                    <span className="d-block w-4 h-4 rounded-circle border border-2x border-dark bg-danger"></span>
                                  </li>
                                  <li>
                                    <span className="d-block w-4 h-4 rounded-circle border border-2x border-dark bg-warning"></span>
                                  </li>
                                  <li>
                                    <span className="d-block w-4 h-4 rounded-circle border border-2x border-dark bg-success"></span>
                                  </li>
                                </ul>
                              </div>
                              <div className="p-8">
                                <h5>{item.title}</h5>
                                <p className="mb-0 fs-18 text-heading">
                                  {item.text}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default howToStake;
