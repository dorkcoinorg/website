import React from "react";

const wallets = [
  {
    logo: "/img/logo.webp",
    title: "Dork Core",
    link: "https://github.com/dorkcoinorg/dorkcoin/releases/latest",
  },
  {
    logo: "/img/logo.webp",
    title: "Dorky App",
    link: "https://dorkyapp.com",
  },
  {
    logo: "/logos/coindrop.webp",
    title: "CoinDrop",
    link: "https://www.coindrop.cc/",
  }
];

const Wallets = () => {
  return (
    <div id="wallets" className="max-w-[85rem] mx-auto py-12">
      <div className="my-16 text-center">
        <h2 className="font-stopbuck text-5xl text-dork text-shadow">
          WALLETS
        </h2>
        <h3 className="font-stopbuck text-2xl text-slate-200">
          Wallets and tools for Dorkcoin
        </h3>
      </div>
      {/* ROW */}
      <div className="flex flex-wrap justify-center gap-10">
        {wallets.map((ex, idx) => (
          <a
            key={idx}
            href={ex.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3"
          >
            <div
              role="img"
              aria-label={ex.title}
              className="w-20 h-20 bg-center bg-no-repeat bg-contain hover-spin-reverse"
              style={{ backgroundImage: `url(${ex.logo})` }}
            />
            <span className="text-slate-100 font-semibold">
              {ex.title}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Wallets;