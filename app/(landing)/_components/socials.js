import React from "react";
import LinkCardCircle from "@/components/LinkCardCircle";

const cards = [
  {
    link: "https://explorer.dorkcoin.org",
    title: "Explorer",
    icon: "Explorer",
  },
  {
    link: "https://github.com/dorkcoinorg",
    title: "Github",
    icon: "Github",
  },
  {
    link: "https://x.com/dorkcoinorg",
    title: "X",
    icon: "X",
  },
  {
    link: "https://discord.gg/dorkcoin",
    title: "Discord",
    icon: "Discord",
  },
  {
    link: "https://t.me/dorkcoinorg",
    title: "Telegram",
    icon: "Telegram",
  },
];

const Socials = () => {
  return (
    <div className="relative z-10">
      <div className="hidden">
        <h2 className="font-stopbuck text-6xl text-dork text-shadow text-center">
          Socials
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {cards.map((card, idx) => (
          <LinkCardCircle key={idx} props={card} />
        ))}
      </div>
    </div>
  );
};

export default Socials;
