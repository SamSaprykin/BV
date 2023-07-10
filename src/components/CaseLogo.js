import React from "react";
import IconsLibrary from "./bvIcons";

const CaseLogo = ({ icon, className, bgColor }) => {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className={`${className} rounded-3xl overflow-hidden flex justify-center items-center`}
    >
      <IconsLibrary type={icon} />
    </div>
  );
};

export default CaseLogo;
