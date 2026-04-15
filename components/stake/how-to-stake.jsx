import React from "react";

const HowToStake = () => {
  return (
    <div id="how-to-stake" className="section-space-top">

      <div className="container">

        {/* TITLE */}
        <div className="section-space-md-bottom text-center">
          <h2 className="mb-3 text-light text-stroke-md text-shadow-md gsap-text-animation">
            HOW TO <span className="text-secondary">STAKE</span>
          </h2>

          <p className="mb-0 fs-18 text-heading">
            Contribute to the network and earn rewards
          </p>
        </div>

        {/* BOXES */}
        <div className="row g-4">

          {/* STEP 1 */}
          <div className="col-md-4">
            <div className="bg-light border border-dark shadow-sharp rounded-5 p-8 gsap-fade-in h-100">
              <h5 className="text-heading mb-2">
                DOWNLOAD CORE
              </h5>

              <p className="text-primary text-stroke mb-0 fs-20">
                Download and install Dork Core for Windows, Linux, or macOS. Launch the wallet and let it fully sync with the network so you’re ready to start staking.
              </p>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="col-md-4">
            <div className="bg-light border border-dark shadow-sharp rounded-5 p-8 gsap-fade-in h-100">
              <h5 className="text-heading mb-2">
                DEPOSIT DORK
              </h5>

              <p className="text-secondary text-stroke mb-0 fs-20">
                Add coins to your wallet by sending them from an exchange or withdrawing them from DORK BOT. Once the coins arrive, you’re ready to put them to work.
              </p>
            </div>
          </div>

          {/* STEP 3 */}
          <div className="col-md-4">
            <div className="bg-light border border-dark shadow-sharp rounded-5 p-8 gsap-fade-in h-100">
              <h5 className="text-heading mb-2">
                KEEP ONLINE
              </h5>

              <p className="text-success text-stroke mb-0 fs-20">
                Keep your wallet online and unlocked. Staking runs automatically in the background while your wallet is open, giving you a chance to earn rewards.
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default HowToStake;