import React from "react";

const exchanges = [
  {
    logo: "/logos/nestex.webp",
    title: "NestEx",
    link: "https://trade.nestex.one/spot/dork",
  },
  {
    logo: "/logos/klingex.webp",
    title: "KlingEx",
    link: "https://klingex.io/trade/DORK-USDT",
  },
  {
    logo: "/logos/cexius.webp",
    title: "Cexius",
    link: "https://cexius.com/trade/DORK-USDT",
  },
];

const Exchanges = () => {
  return (
    <div id="exchanges" className="max-w-[85rem] mx-auto py-12">
      <div className="my-16 text-center">
        <h2 className="font-stopbuck text-5xl text-dork text-shadow">
          EXCHANGES
        </h2>
        <h3 className="font-stopbuck text-2xl text-slate-200">
          Where Dorkcoin trades today
        </h3>
      </div>

      {/* ROW */}
      <div className="flex flex-wrap justify-center gap-10">
        {exchanges.map((ex, idx) => (
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
              className="w-20 h-20 bg-center bg-no-repeat bg-contain hover:animate-spin"
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

export default Exchanges;