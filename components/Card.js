import React, { useState } from "react";
import Image from "next/image";

const Card = ({ props: { img, title, desc, isActive, onClick } }) => {
  const active = isActive;

  return (
    <div
      className="group relative block h-40 md:h-96 max-w-32 md:max-w-80 cursor-pointer"
      onClick={onClick}
    >
      <span className="absolute inset-0 bg-dork rounded-xl border-2 border-dashed border-black"></span>

      <div className="relative h-full transform rounded-xl border-2 border-slate-700 bg-slate-900 transition-transform -translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0">
        <div className="h-full transition-opacity grid grid-rows-4">
          <div className="row-span-3 flex justify-center items-center border-b-2 rounded-b-xl border-slate-700">
            <Image
              src={`/img/${img}`}
              alt={title}
              width={500}
              height={500}
              unoptimized
              className="h-full object-cover"
            />
          </div>

          <div className="py-2 sm:py-3 text-center font-stopbuck">
            <div className="relative overflow-hidden">
              <h2 className={`text-[10px] sm:text-2xl font-medium uppercase text-dork transition-all duration-300 ${
                active ? 'opacity-0 transform -translate-y-full' : 'opacity-100 transform translate-y-0'
              }`}>
                {title}
              </h2>
              <p className={`text-[10px] sm:text-2xl font-thin text-slate-100 transition-all duration-300 absolute inset-0 flex items-center justify-center ${
                isActive ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-full'
              }`}>
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
