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
                      &copy; Dorkcoin 2026. <a href="https://github.com/dorkcore/website/">Built</a> by Real Dorks.
                    
                    </p>
                  </div>
                  <div className="col-lg-7">
                    <ul className="list list-row gap-4 flex-wrap justify-content-center justify-content-lg-end">
                      <li>
                        <Link
                          href="https://github.com/dorkcore"
                          className="link fs-18 text-dark hover:text-primary"
                        >
                          <Icon icon="tabler:brand-github" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://x.com/dorkcoinorg"
                          className="link fs-18 text-dark hover:text-primary"
                        >
                          <Icon icon="tabler:brand-x" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://discord.gg/jZYyJkzeWz"
                          className="link fs-18 text-dark hover:text-primary"
                        >
                          <Icon icon="tabler:brand-discord" />
                        </Link>
                      </li>
                    </ul>
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
