import React from "react";
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
        <div
          aria-hidden="true"
          className="absolute bottom-0 w-full h-24 bg-bottom bg-cover"
          style={{ backgroundImage: "url('/img/floor.webp')" }}
        />
      </div>

      <div className="absolute bottom-0 w-full pointer-events-none">
        <div className="flex justify-between px-5 lg:justify-around">
          <div className="flex">
            <div>
            <div
              aria-hidden="true"
              className="w-[200px] h-[200px] bg-center bg-no-repeat bg-contain"
              style={{ backgroundImage: "url('/img/footer-1.webp')" }}
            />
            <div
              aria-hidden="true"
              className="w-[200px] h-[200px] bg-center bg-no-repeat bg-contain"
              style={{ backgroundImage: "url('/img/footer-2.webp')" }}
            />
          </div>
          </div>
          <div className="flex">
            <div>
            <div
              aria-hidden="true"
              className="w-[200px] h-[200px] bg-center bg-no-repeat bg-contain"
              style={{ backgroundImage: "url('/img/footer-3.webp')" }}
            />
            <div
              aria-hidden="true"
              className="w-[200px] h-[200px] bg-center bg-no-repeat bg-contain"
              style={{ backgroundImage: "url('/img/footer-4.webp')" }}
            />
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
