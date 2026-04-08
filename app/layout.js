"use client";
import { useEffect } from "react";

import { Inter, Lilita_One } from "next/font/google";

import "../public/scss/bootstrap/bootstrap.scss";

import gsap from "gsap";
import {
  Flip,
  ScrollSmoother,
  ScrollToPlugin,
  ScrollTrigger,
  SplitText,
} from "gsap/all";
import {
  fadeInAnimation,
  rocketLaunch,
  textAnimation,
} from "@/utils/animations";

// ========= Plugins CSS START =========
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "simplebar/dist/simplebar.min.css";
// ========= Plugins CSS END =========

// ========= Font-Family START =========
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lilita = Lilita_One({
  subsets: ["latin"],
  weight: "400",
});
// ========= Font-Family END =========

import "../public/scss/style.scss";

export default function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");

    gsap.registerPlugin(
      Flip,
      ScrollSmoother,
      ScrollToPlugin,
      ScrollTrigger,
      SplitText
    );

    fadeInAnimation();
    textAnimation();
    rocketLaunch();
  }, []);
  return (
  <html lang="en" data-bs-theme="light">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Basic SEO */}
      <title>Dorkcoin - Proof of Stake Cryptocurrency</title>
      <meta
        name="description"
        content="Dorkcoin: An open-source peer-to-peer cryptocurrency based on the Proof of Stake algorithm, built for Real Dorks."
      />
      <meta
        name="keywords"
        content="memecoin, crypto, p2p, cryptocurrency, blockchain, PoS, Proof of Stake"
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://dorkcoin.org/" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="Dorkcoin - Real Dorks' Cryptocurrency" />
      <meta
        property="og:description"
        content="Open-source peer-to-peer cryptocurrency based on Proof of Stake, built for Real Dorks."
      />
      <meta property="og:url" content="https://dorkcoin.org/" />
      <meta property="og:site_name" content="Dorkcoin" />
      <meta property="og:image" content="https://dorkcoin.org/img/og-image.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Dorkcoin Cryptocurrency" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Dorkcoin - Real Dorks' Cryptocurrency" />
      <meta
        name="twitter:description"
        content="Open-source peer-to-peer cryptocurrency based on Proof of Stake, built for Real Dorks."
      />
      <meta name="twitter:image" content="https://dorkcoin.org/img/og-image.png" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </head>

    <body className={``} cz-shortcut-listen="true">
      {children}
    </body>
  </html>
);
}
