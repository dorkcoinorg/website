import Image from "next/image";

import Header from "./_components/header";
import Nav from "./_components/nav";
import Hero from "./_components/hero";
import About from "./_components/about";
import Dorkonomics from "./_components/dorkonomics";
import Exchanges from "./_components/exchanges";
import HowToStake from "./_components/howtostake";
import Wallets from "./_components/wallets";
import Footer from "./_components/footer";
import Dorkipedia from "./_components/dorkipedia";

export default function Home() {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Hero />
      <div className="bg-slate-950 text-slate-100">
        <About />

        

        <Dorkonomics />
        <div className="max-w-[85rem] mx-auto mt-24">
          <span className="flex items-center">
            <span className="h-[3px] flex-1 bg-dork"></span>
            <div>
              <Image
                className=""
                src="/img/bottom-1.png"
                width={300}
                height={300}
                alt="dorkcoin-7"
              />
            </div>
            <span className="h-[3px] flex-1 bg-dork"></span>
          </span>
        </div>

        <div className="max-w-[85rem] mx-auto mt-24 grid grid-cols-1 md:grid-cols-2 gap-10">
  <Wallets />
  <Exchanges />
</div>
        

        <div className="max-w-[85rem] mx-auto mt-24">
          <span className="flex items-center">
            <span className="h-[3px] flex-1 bg-dork"></span>
            <div>
              <Image
                className=""
                src="/img/bottom-2.png"
                width={300}
                height={300}
                alt="dorkcoin-5"
              />
            </div>
            <span className="h-[3px] flex-1 bg-dork"></span>
          </span>
        </div>

        <HowToStake />
        <Dorkipedia />
        <Footer />
      </div>
    </>
  );
}
