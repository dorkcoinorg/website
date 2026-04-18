"use client";

import React from "react";
import Link from "next/link";

const Exchanges = () => {
  return (
    <div id="exchanges" className="section-space-top">

      <div className="container">

        {/* TITLE */}
        <div className="section-space-md-bottom text-center">
          <h2 className="mb-3 text-light text-stroke-md text-shadow-md gsap-text-animation">
            DORKY <span className="text-secondary">EXCHANGES</span>
          </h2>

          <p className="mb-0 fs-18 text-heading">
            List of exchanges that support Dorkcoin
          </p>
        </div>

        {/* BUTTONS */}
        <div className="row g-4 justify-content-center">

          {/* Cexius */}
          <div className="col-6 col-md-4">
            <Link
              href="https://cexius.com/trade/DORK-USDT"
              className="btn btn-lg btn-light text-heading w-100 d-flex justify-content-center align-items-center gap-2 rounded gsap-fade-in"
            >
              <span className="ff-1">Cexius</span>
            </Link>
          </div>
          <div className="col-6 col-md-4">
            <Link
              href="https://trade.nestex.one/spot/dork"
              className="btn btn-lg btn-light text-heading w-100 d-flex justify-content-center align-items-center gap-2 rounded gsap-fade-in"
            >
              <span className="ff-1">NestEx</span>
            </Link>
          </div>
          

          {/* FUTURE */}
          <div className="col-6 col-md-4">
            <Link
              href="#"
              className="btn btn-lg btn-light text-heading w-100 d-flex justify-content-center align-items-center gap-2 rounded gsap-fade-in"
            >
              <span className="ff-1">More soon</span>
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Exchanges;