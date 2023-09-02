import React from "react";
import BvButton from "./Button";
import IconsLibrary from "./bvIcons";

const BodyTestimonial = ({
  rating,
  authorImage,
  authorName,
  authorPosition,
  authorCompany,
  testimonial,
  className,
}) => {
  console.log(authorImage);
  return (
    <div className={`w-full ${className}`}>
      <div className="w-full bg-gray-testimonial rounded-[20px] md:rounded-2xl p-[30px] md:p-[50px] h-[500px] flex flex-col justify-between items-start">
        <div className="flex flex-col">
          <h5 className="flex mb-[30px] md:mb-[40px]">
            {Array(rating).fill(
              <IconsLibrary type="star" className="mr-[4px]" />
            )}
          </h5>
          <div className="first-letter:pl-[76px] md:first-letter:pl-[100px] relative w-full max-w-[1000px] text-[22px] lg:text-[32px] leading-[26px] md:leading-[36px]">
            <p className="font-medium before:absolute before:bg-cover before:w-[58px] md:before:w-[80px] before:h-[34px] md:before:h-[50px] before:left-4 before:-top-2 md:before:-top-4 before:bg-[url('/photo.png')]">
              &quot;{testimonial}&quot;
            </p>
          </div>
        </div>
        <div className="flex w-full justify-between">
          <span className="text-[16px] leading-tight">{authorName}</span>
          <span className="text-[16px] leading-tight text-[#737373]">
            {authorPosition}, {authorCompany}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BodyTestimonial;
