import React from "react";

const Card = ({ props: { img, title, desc, isActive, onClick } }) => {
  const active = isActive;

  return (
    <div
      className="group relative block w-full max-w-[260px] cursor-pointer mx-auto"
      onClick={onClick}
    >
      <span className="absolute inset-0 bg-dork rounded-xl border-2 border-dashed border-black"></span>

      <div className="relative transform rounded-xl border-2 border-slate-700 bg-slate-900 transition-transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 overflow-hidden">
        <div className="transition-opacity">
          <div className="w-full aspect-square bg-center bg-cover"
            role="img"
            aria-label={title}
            style={{ backgroundImage: `url(/img/${img})` }}
          />

          <div className="py-2 sm:py-3 text-center font-stopbuck">
            <div className="relative overflow-hidden">
              <h2 className={`text-[10px] sm:text-2xl font-medium uppercase text-dork transition-all duration-300 ${
                active ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'
              } group-hover:opacity-0 group-hover:-translate-y-full`}>
                {title}
              </h2>
              <p className={`text-[10px] sm:text-2xl font-thin text-slate-100 transition-all duration-300 absolute inset-0 flex items-center justify-center ${
                active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
              } group-hover:opacity-100 group-hover:translate-y-0`}>
                {desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
