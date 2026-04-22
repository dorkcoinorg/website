import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

const FooterOne = () => {
  return (
    <footer className="section-space-top section-space-sm-bottom position-relative z-1">

      <div className="container">

        <div className="border border-dark shadow-sharp rounded-5 p-8 bg-light">

          <div className="row align-items-center g-4">

            {/* LEFT */}
            <div className="col-lg-6 text-center text-lg-start">

              <p className="mb-1 ff-2 text-dark">
                © 2026 Dorkcoin. Built by Real Dorks.
              </p>

            </div>

            {/* RIGHT */}
            <div className="col-lg-6">

              <div className="d-flex justify-content-center justify-content-lg-end align-items-center gap-2">

                {/* X (TWITTER) */}
                <Link
                  href="https://x.com/dorkcoinorg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-light border border-dark rounded d-flex align-items-center gap-1 px-2 py-1"
                  style={{ fontSize: "12px" }}
                >
                  <Icon icon="tabler:brand-x" width={14} />
                  X (Twitter)
                </Link>
                
                {/* GITHUB */}
                <Link
                  href="https://github.com/dorkcoinorg/dorkcoin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-light border border-dark rounded d-flex align-items-center gap-1 px-2 py-1"
                  style={{ fontSize: "12px" }}
                >
                  <Icon icon="tabler:brand-github" width={14} />
                  Source Code
                </Link>

                {/* WEBSITE */}
                <Link
                  href="https://github.com/dorkcoinorg/website/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-light border border-dark rounded d-flex align-items-center gap-1 px-2 py-1"
                  style={{ fontSize: "12px" }}
                >
                  <Icon icon="tabler:code" width={14} />
                  Repo Website
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default FooterOne;