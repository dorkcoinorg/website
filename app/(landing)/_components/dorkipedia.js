import React from "react";

const Dorkipedia = () => {
  return (
    <div>
      <div id="faq" className="max-w-[85rem] mx-auto py-12">
        
        <div className="my-10 text-center flex flex-col items-center gap-6">
          <h2 className="font-stopbuck text-6xl text-dork text-shadow">
            DORKIPEDIA
          </h2>

          <h3 className="font-stopbuck text-2xl text-slate-200">
            Complete documentation and answers
          </h3>

          <div
            role="img"
            aria-label="Dorkipedia illustration"
            className="w-full max-w-[700px] h-[420px] sm:h-[520px] rounded-3xl bg-contain bg-no-repeat bg-center mx-auto"
            style={{ backgroundImage: "url('/img/dorkipedia.webp')" }}
          />

          <a
            href="/dorkipedia"
            className="font-stopbuck px-8 py-4 text-lg rounded-xl bg-dork text-[#5c4a42] hover:bg-yellow-400 transition shadow-lg border-2 border-[#5c4a42]"
          >
            Read the Full Dorkipedia →
          </a>
        </div>

      </div>
    </div>
  );
};

export default Dorkipedia;