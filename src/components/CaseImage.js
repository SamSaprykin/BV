import { getImage, GatsbyImage } from "gatsby-plugin-image";
import React from "react";

const CaseImage = ({ image, className }) => {
  const gImage = getImage(image);

  console.log(image);
  return (
    <div className={`${className} rounded-3xl overflow-hidden`}>
      <GatsbyImage image={gImage} className="w-full h-full" />
    </div>
  );
};

export default CaseImage;
