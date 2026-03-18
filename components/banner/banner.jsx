import React from "react";
import Link from "next/link";
import Image from "next/image";

import heroImg from "../../public/img/shape/hero-bg-2.png";

const Banner = ({ title, subTitle, pageTitle }) => {
  return (
    <>
      <div className="banner bg-danger-emphasis">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="h1 text-primary-subtle"> {subTitle} </h2>
              <nav>
                <ol className="breadcrumb breadcrumb-modifier">
                  <li className="breadcrumb-item">
                    <Link href="/" className="link fs-14 text-secondary">
                      {pageTitle}
                    </Link>
                  </li>
                  <li className="breadcrumb-item active fs-14"> {title} </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <Image
          src={heroImg}
          width={1535}
          height={552}
          alt="image"
          className="img-fluid w-100 position-absolute start-0 bottom-0 z-n1 pointer-none opacity-50"
        />
      </div>
    </>
  );
};

export default Banner;
