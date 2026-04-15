"use client";

import About from "@/components/about/about";
import Hero from "@/components/hero/hero";
import Ticker from "@/components/ticker/ticker";
import Stake from "@/components/stake/how-to-stake";
import FooterOne from "@/components/footer/footer";
import MarketStats from "@/components/marketstats/marketstats";
import Wallets from "@/components/wallets/wallets";
import Exchanges from "@/components/exchanges/exchanges";

export default function HomePage() {
  return (
    <main data-page="home" className="bg-primary overflow-x-hidden">

      <div className="smooth-wrapper">
        <div className="smooth-content">

          <Hero />

          <Ticker
            parentClass="ticker-1 py-4 bg-light border-top border-bottom border-2x border-dark gsap-fade-in"
            dir="right"
            delay="3.5"
            changeIcon={true}
            textClass="mb-0 text-secondary text-stroke text-shadow"
            textClassTwo="mb-0 text-primary text-stroke text-shadow"
          />

          <About />
          <Wallets />  
          <MarketStats />
          <Exchanges />
          <Stake />
          <FooterOne />

        </div>
      </div>

    </main>
  );
}