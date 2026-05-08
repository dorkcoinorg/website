import React from "react";
import OrderCard from "@/components/OrderCard";

const HowToStake = () => {
  return (
    <div id="stake" className="max-w-[85rem] mx-auto p-12">
      <div className="my-16">
        <h2 className="font-stopbuck text-6xl text-dork text-shadow text-center">
          How To Stake
        </h2>
        <h3 className="font-stopbuck text-2xl text-center text-slate-200">
          Contribute to the network and earn rewards
        </h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-36 justify-items-center">
        <OrderCard order={1} title={"download core"} style={"rotate-3"}>
          <span>
            Download and install Dork Core for Windows, Linux, or macOS. Launch the wallet and let it fully sync with the network before staking.
          </span>
        </OrderCard>
        <OrderCard order={2} title={"deposit DORK"} style={"-rotate-6"}>
          <span>
            Add Dorkcoin to your wallet by receiving to your DORK wallet address. Wait until the balance appears and the wallet is ready.
          </span>
        </OrderCard>
        <OrderCard order={3} title={"keep online"} style={"-rotate-1"}>
          <span>
            Keep your wallet online and unlocked. Staking runs automatically while your wallet is connected, so your DORK earns rewards in the background.
          </span>
        </OrderCard>
        <OrderCard order={4} title={"earn rewards"} style={"rotate-2"}>
          <span>
            Stay connected to the Dorkcoin network and enjoy stake rewards. The longer you participate, the more rewarding it becomes.
          </span>
        </OrderCard>
      </div>

      <div className="my-16">
      </div>
    </div>
  );
};

export default HowToStake;
