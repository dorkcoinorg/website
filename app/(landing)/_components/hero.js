import React from "react";

const Hero = () => {
  return (
    <div className="h-dvh">
      <div className="bg-[url(/img/hero.webp)] bg-center bg-cover bg-no-repeat fixed top-0 left-0 h-full w-full -z-10"></div>
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          <p className="uppercase tracking-[0.5em] text-dork text-sm font-medium mb-4">
            Real Dorks&apos; Cryptocurrency
          </p>
          <h1 className="font-stopbuck text-6xl sm:text-7xl text-white drop-shadow-lg">
            DORKCOIN
          </h1>
          <p className="mt-6 text-lg sm:text-2xl text-white leading-relaxed">
            Dorkcoin is a community-first Proof-of-Stake memecoin for the internet&apos;s Real Dorks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
