import React from "react";
import * as Icon from "@/components/icons";

const LinkCardCircle = ({ props: { link, icon } }) => {
  const IconComponent = Icon[icon];

  return (
    <a href={link} target="_blank" className="group">
      <div className="aspect-square text-lg sm:text-2xl md:text-4xl bg-slate-700 border-4 border-dork w-fit rounded-full p-2 sm:p-4 text-center text-white flex flex-col gap-5 group-hover:bg-dork group-hover:border-slate-700 group-hover:scale-125">
        <div className="flex justify-center group-hover:text-[#5c4a42]">
          <IconComponent />
        </div>
      </div>
    </a>
  );
};

export default LinkCardCircle;
