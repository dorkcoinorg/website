"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Dorkonomics", href: "#dorkonomics" },
  { name: "How to stake", href: "#stake" },
];

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      aria-label="Global"
      className={`fixed top-0 left-0 w-full z-50 shadow-2xl shadow-slate-700/30 backdrop-blur-xl transition-all duration-300 ${
        isScrolled ? "h-20" : "h-28"
      } bg-slate-950/95`}
    >
      <div className="flex items-center justify-between p-4 lg:px-8 mx-auto max-w-screen-xl">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="#" className="-m-1.5 p-1.5">
            <Image
              src="/img/logo.png"
              width={500}
              height={500}
              className={`transition-all duration-300 ${
                isScrolled ? "h-14 w-auto" : "h-20 w-auto"
              }`}
              alt="logo coin"
            />
          </Link>
        </div>

        {/* Navigatio n Links */}
        <div className="hidden lg:flex lg:gap-x-12 cursor-pointer uppercase">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`transition duration-200 text-slate-100 text-shadow-dork-not-hover text-2xl font-bold font-stopbuck hover:text-dork hover:decoration-solid hover:decoration-slate-300`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Buy Button */}
        <div className="lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/#wallets"
            className="transition duration-200 font-stopbuck text-lg sm:text-2xl rounded-xl px-3.5 py-2.5 font-medium text-slate-950 shadow-2xl bg-dork hover:bg-yellow-400 hover:text-slate-950 outline outline-2 outline-offset-0 outline-slate-200"
          >
            #GETDORKED
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
