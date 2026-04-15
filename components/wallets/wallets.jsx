"use client";

import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

const Wallets = () => {
  return (
    <div id="wallets" className="section-space-top">

      <div className="container">

        {/* TITLE */}
        <div className="section-space-md-bottom text-center">
          <h2 className="mb-3 text-light text-stroke-md text-shadow-md gsap-text-animation">
            DORKY <span className="text-secondary">WALLETS</span>
          </h2>

          <p className="mb-0 fs-18 text-heading">
            List of wallets that support Dorkcoin
          </p>
        </div>

        {/* BUTTONS */}
        <div className="row g-4 justify-content-center">

          {/* DORK CORE */}
          <div className="col-6 col-md-4">
            <Link
              href="https://github.com/dorkcoinorg/dorkcoin/releases/latest"
              className="btn btn-lg btn-light text-heading w-100 d-flex justify-content-center align-items-center gap-2 rounded gsap-fade-in"
            >
              <span className="ff-1">Dork Core</span>
            </Link>
          </div>

          {/* DORK BOT */}
          <div className="col-6 col-md-4">
            <Link
              href="https://discord.gg/H5XEaXSG5m"
              className="btn btn-lg btn-light text-heading w-100 d-flex justify-content-center align-items-center gap-2 rounded gsap-fade-in"
            >
              <span className="ff-1">Dork Bot</span>
            </Link>
          </div>

          {/* Android Wallet */}
          <div className="col-6 col-md-4">
            <Link
              href="https://github.com/syabiz/dorkcoin-android-wallet/releases/latest"
              className="btn btn-lg btn-light text-heading w-100 d-flex justify-content-center align-items-center gap-2 rounded gsap-fade-in"
            >
              <span className="ff-1">Android Wallet</span>
            </Link>
          </div>

          {/* OTHERS */}
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

export default Wallets;