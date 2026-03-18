"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; //
import { Icon } from "@iconify/react";

import logoYellow from "../../public/img/logo.png";
import DefaultNav from "./nav/default-nav";

const HeaderOne = ({ headerClass, isDropdown: propDropdown }) => {
  const pathname = usePathname();

  // Automatically enable dropdown for specific paths
  const isDropdown =
    propDropdown;

  return (
    <header className={`navbar navbar-expand-lg primary-header ${headerClass}`}>
      <div className="container align-items-lg-center">
        <Link className="logo" href="/">
          <Image
            src={logoYellow}
            alt="image"
            className="logo__img logo__img--light"
            priority={true}
          />
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar0"
          aria-controls="navbar0"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <Icon icon="solar:hamburger-menu-line-duotone" />
        </button>

        {isDropdown ? <DropdownNav /> : <DefaultNav />}
      </div>
    </header>
  );
};

export default HeaderOne;
