import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="relative overflow-hidden">
      <div id="about" className="max-w-6xl mx-auto px-4 py-12 sm:py-16">

        {/* HEADER */}
        <div className="text-center space-y-3 mb-10">
          <h2 className="font-stopbuck text-4xl sm:text-5xl lg:text-6xl text-dork">
            What is Dorkcoin?
          </h2>
          <p className="font-stopbuck text-lg sm:text-xl italic text-slate-300">
            Real Dorks&apos; native coin on a Proof-of-Stake chain
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">

          <div>
            <Image
              className="w-full h-auto object-cover rounded-2xl"
              src="/img/about.png"
              width={700}
              height={700}
              alt="Dorkcoin Image"
            />
          </div>

          <div className="font-mono text-slate-200 text-base sm:text-lg leading-relaxed space-y-4">
            <p>
              Dorkcoin is a fun memecoin built for internet misfits — the Real Dorks.
              It runs on its own blockchain and uses Proof-of-Stake instead of mining.
            </p>

            <p>
              Beyond crypto, it&apos;s a community-driven project that mixes humor,
              decentralization, and a culture of creativity and dorkiness.
            </p>

            <p>
              The project is designed to be playful, accessible, and powered by
              people who love memes, freedom, and blockchain.
            </p>
          </div>
        </div>

        {/* FOOTER TEXT */}
        <div className="mt-12 text-center space-y-6 font-mono text-slate-200">
          <p className="text-base sm:text-lg">
            Dorkcoin is built for community participation and real stake rewards
            rather than traditional mining.
          </p>

          <p className="text-xl sm:text-2xl">
            <span className="font-stopbuck text-2xl sm:text-3xl font-bold underline decoration-dork">
              DORK
            </span>{" "}
            is for the people who embrace their weirdness and want a fun,
            decentralized dorky experience.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;