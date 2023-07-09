import React from "react";
import IconsLibrary from "./bvIcons";

const CaseLogo = ({ icon, className, bgColor }) => {
  console.log(bgColor);

  const bg = `bg-[${bgColor}]`;
  return (
    <div
      className={`${className} ${bg} rounded-3xl overflow-hidden flex justify-center items-center`}
    >
      <IconsLibrary type={icon} />
    </div>
  );
};

export default CaseLogo;
