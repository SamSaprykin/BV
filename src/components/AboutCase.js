import React, { useState } from "react";
import IconsLibrary from "./bvIcons";

const AboutCase = ({ data }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(1);

  const [testimonialsLength, seTtestimonialsLength] = useState(
    data?.testimonials.length
  );

  console.log(data);
  return (
    <div className="row-span-2 bg-black rounded-3xl px-[50px] py-[30px]">
      <div className="flex justify-between w-full text-[#a5a5a5] mb-[50px] text-[14px]">
        <span className="">{data.caseName}</span>
        <span>{data.year}</span>
      </div>
      <div className="flex gap-x-[6px]">
        {data.categories.map((category) => {
          return (
            <div
              key={category}
              className="bg-[#313131] py-[9px] px-[12px] rounded-[100px] text-white"
            >
              {category}
            </div>
          );
        })}
      </div>
      <div className="mt-[30px]">
        {data.testimonials.map((testimonial, index) => {
          console.log(currentTestimonial === index, index, currentTestimonial);
          return (
            <div
              key={testimonial.authorName}
              className="text-2xl leading-tight	"
            >
              {currentTestimonial === index ? (
                <div className="text-white">
                  <span className="text-[#a5a5a5]">
                    {testimonial.authorName}
                  </span>
                  {testimonial.testimonial}
                </div>
              ) : (
                <></>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutCase;
