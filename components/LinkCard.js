import React from "react";
import * as FaIcon from "react-icons/fa";

const LinkCard = ({ props: { link, title, icon } }) => {
  const IconComponent = FaIcon[icon];

  return (
    <a href={link} target="_blank">
      <div className="text-2xl bg-slate-700 border-4 border-dork w-48 rounded-2xl p-3 text-center text-white flex flex-col gap-5 hover:bg-slate-900">
        <p className="font-stopbuck">{title}</p>
        <div className="text-6xl flex justify-center">
          <IconComponent />
        </div>
      </div>
    </a>
  );
};

export default LinkCard;
