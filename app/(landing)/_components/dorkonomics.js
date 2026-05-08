"use client";

import React, { useEffect, useState } from "react";
import Card from "@/components/Card";

const formatValue = (value, decimals = 2, prefix = "") => {
  if (value === null || value === undefined) return "-";

  const num = Number(value);
  if (isNaN(num)) return value;

  return (
    prefix +
    new Intl.NumberFormat("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(num)
  );
};

// 💰 Market Cap formatter (WITH $)
const formatMarketCap = (value) => {
  if (value === null || value === undefined) return "-";

  const num = Number(value);
  if (isNaN(num)) return value;

  if (num < 1000) return `$${num}`;

  if (num < 1_000_000) {
    return `$${new Intl.NumberFormat("en-US").format(num)}`;
  }

  if (num < 1_000_000_000) {
    const val = (num / 1_000_000).toFixed(2).replace(/\.00$/, "");
    return `$${val}M`;
  }

  const val = (num / 1_000_000_000).toFixed(2).replace(/\.00$/, "");
  return `$${val}B`;
};

const Dorkconomics = () => {
  const [data, setData] = useState(null);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/");
      const json = await res.json();
      setData(json);
    };

    fetchData();
  }, []);

  const cards = data
    ? [
        {
          img: "price.webp",
          title: "Price",
          desc: formatValue(data.price, 6, "$"),
        },
        {
          img: "mcap.webp",
          title: "Market Cap",
          desc: formatMarketCap(data.marketCap),
        },
        {
          img: "emission.webp",
          title: "Emission (24h)",
          desc: formatValue(data.emission24h, 0),
        },
        {
          img: "supply.webp",
          title: "Current Supply",
          desc: formatValue(data.coinSupply, 0),
        },
        {
          img: "reward.webp",
          title: "Block Reward",
          desc: "100 DORK",
        },


        {
          img: "time.webp",
          title: "BLOCK TIME",
          desc: "1 MIN",
        },

        {
          img: "donations.webp",
          title: "DONATIONS",
          desc: "1% of rewards",
        },

        {
          img: "maxsupply.webp",
          title: "Max Supply",
          desc: "Unlimited",
        },
      ]
    : [];

  return (
    <div id="dorkonomics" className="max-w-[85rem] mx-auto py-12 px-4 md:px-0">
      <div className="my-16 text-center">
        <h2 className="font-stopbuck text-5xl text-dork text-shadow">Dorkonomics</h2>
        <h3 className="font-stopbuck text-2xl text-slate-200">Live data of Dorkcoin</h3>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-4 gap-5 gap-y-20 justify-items-center">
        {cards.map((card, idx) => (
          <div key={idx} className="w-full flex justify-center">
            <Card props={{ ...card, isActive: idx === activeCard, onClick: () => setActiveCard(idx === activeCard ? null : idx) }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dorkconomics;