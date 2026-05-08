import React from "react";
import Image from "next/image";
import Socials from "./socials";

const Footer = () => {
  return (
    <footer className="relative">
      <div className="text-center font-stopbuck mt-16 pb-5 border-t border-slate-700 pt-8">
        <div className="my-5 mb-10">
          <Socials />
        </div>
        <div>
          <p className="text-md/relaxed text-slate-400">
            © 2026 Dorkcoin. Built by Real Dorks.
          </p>
        </div>
      </div>
      <div className="overflow-hidden relative h-24">
        <img className="absolute bottom-0 w-full" src="/img/floor.png" alt="grass" />
      </div>

      <div className="absolute bottom-0 w-full">
        <div className="flex justify-between px-5 lg:justify-around">
          <div className="flex">
            <div>
              <Image
                className=""
                src="/img/footer-1.png"
                width={200}
                height={200}
                alt="dui 1"
              />
            </div>
            <div>
              <Image
                className=""
                src="/img/footer-2.png"
                width={200}
                height={200}
                alt="dui 2"
              />
            </div>
          </div>
          <div className="flex">
            <div>
              <Image
                className=""
                src="/img/footer-3.png"
                width={200}
                height={200}
                alt="dui 4"
              />
            </div>
            <div>
              <Image
                className=""
                src="/img/footer-4.png"
                width={200}
                height={200}
                alt="dui 3"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
