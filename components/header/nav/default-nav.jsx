"use client";

import Link from "next/link";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

const menuLinks = [
  { id: 1, label: "About", path: "about" },
  { id: 2, label: "How to Stake", path: "how-to-stake" },
  { id: 3, label: "Dork Explorer", href: "https://explorer.dorkcoin.org" },
  { id: 4, label: "Support Project", href: "https://donate.dorkcoin.org" },
];

const DefaultNav = () => {
  return (
    <nav className="collapse navbar-collapse" id="navbar0">
  <ul className="navbar-nav flex-grow-1 justify-content-center mx-lg-4 mb-2 mb-lg-0">
    {menuLinks.map((link) => (
      <li key={link.id} className="nav-item">
        {link.href ? (
          <a
            className="nav-link"
            href={link.href}
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        ) : (
          <ScrollLink
            className="nav-link"
            to={link.path}
            spy={true}
            smooth={true}
            duration={500}
            offset={0}
            href={`#${link.path}`}
          >
            {link.label}
          </ScrollLink>
        )}
      </li>
    ))}
  </ul>
</nav>
  );
};

export default DefaultNav;
