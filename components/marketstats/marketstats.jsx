"use client";

import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

const MarketStats = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(false);

      const res = await fetch("/api/market", {
        cache: "no-store",
      });

      if (!res.ok) throw new Error("API error");

      const json = await res.json();
      setData(json);

    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const formatPrice = (v) =>
    v?.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 6,
    });

  const formatNumber = (v) =>
    v?.toLocaleString(undefined);

  if (error) {
    return (
      <div className="section-space-y">
        <div className="container">
          <div className="bg-danger text-light p-8 rounded-5 border border-dark">
            Failed to load market data (API unreachable)
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="market-stats" className="section-space-y overflow-hidden">

      <div className="container">

        {/* TITLE */}
        <div className="section-space-md-bottom text-center">
          <h2 className="mb-3 text-light text-stroke-md text-shadow-md gsap-text-animation">
            DORKY <span className="text-secondary">STATS</span>
          </h2>

          <p className="mb-0 fs-18 text-heading">
            Live data from the Dorkcoin explorer
          </p>
        </div>

        {/* PANELS */}
        <div className="row g-4">

          <div className="col-md-4">
            <div className="bg-light border border-dark shadow-sharp rounded-5 p-8 gsap-fade-in">
              <h5 className="text-heading mb-2">PRICE</h5>
              <h2 className="text-primary text-stroke mb-0">
                {loading ? "..." : `$${formatPrice(data?.price)}`}
              </h2>
            </div>
          </div>

          <div className="col-md-4">
            <div className="bg-light border border-dark shadow-sharp rounded-5 p-8 gsap-fade-in">
              <h5 className="text-heading mb-2">MARKET CAP</h5>
              <h2 className="text-secondary text-stroke mb-0">
                {loading ? "..." : `$${formatNumber(data?.marketcap)}`}
              </h2>
            </div>
          </div>

          <div className="col-md-4">
            <div className="bg-light border border-dark shadow-sharp rounded-5 p-8 gsap-fade-in">
              <h5 className="text-heading mb-2">CURRENT SUPPLY</h5>
              <h2 className="text-success text-stroke mb-0">
                {loading ? "..." : formatNumber(data?.supply)}
              </h2>
            </div>
          </div>

        </div>

        {/* HERO STYLE BUTTON */}
        <div className="text-center mt-8">

          <a
            href="https://explorer.dorkcoin.org"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-lg btn-light text-heading align-items-center rounded gsap-fade-in"
            data-delay="1.15"
            data-y="50%"
          >
            <span className="d-inline-block ff-1">
              More data on Block Explorer
            </span>
          </a>

        </div>

      </div>
    </div>
  );
};

export default MarketStats;