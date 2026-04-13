import Image from "next/image";
import React from "react";

import Link from "next/link";
import { Icon } from "@iconify/react";


const FooterOne = () => {
  return (
    <>
      <footer className="section-space-top section-space-sm-bottom position-relative z-1">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="border border-dark shadow-sharp rounded-4 p-8 bg-light position-relative z-1">
                <div className="row g-4 justify-content-center align-items-center">
                  <div className="col-lg-5">
                    <p className="mb-0 ff-2 text-dark text-center text-lg-start">
                      &copy; Dorkcoin 2026. <a href="https://github.com/dorkcoinorg/website/">Built</a> by Real Dorks.
                    
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterOne;
