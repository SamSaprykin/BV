import React, { useState, useEffect } from "react";
import IconsLibrary from "./bvIcons";

const AboutCase = ({ data }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonial(
        (prevIndex) => (prevIndex + 1) % data.testimonials.length
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [data.testimonials.length]);

  const navArray = Array.from(
    { length: data.testimonials.length },
    (_, index) => {
      // Create your element here based on the index or originalArray
      return `Element ${index}`;
    }
  );
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
      <div className="mt-[30px] relative h-[200px]">
        {data.testimonials.map((testimonial, index) => {
          console.log(currentTestimonial === index, index, currentTestimonial);
          return (
            <div
              key={testimonial.authorName}
              className={`text-2xl leading-tight absolute top-0 left-0 w-full h-full transition-all ease-in-out	duration-2000	 ${
                index === currentTestimonial
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
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
      <div className="mt-2 flex">
        {navArray.map((el, index) => {
          return (
            <div
              key={el}
              className={`rounded-[100px] transition-all ease-in-out	duration-1000  h-[6px] mr-[8px] hover:cursor-pointer ${
                index === currentTestimonial
                  ? "w-[20px] bg-white"
                  : "w-[6px] bg-[#737373]"
              }`}
              onClick={() => setCurrentTestimonial(index)}
            />
          );
        })}
      </div>
      <div className="mt-[40px] flex items-center">
        <a
          href={data.websiteUrlLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mr-[11px] relative pl-[14px] text-white text-[22px] underline before:block before:absolute before:w-[6px] before:h-[6px] before:rounded-full before:bg-white before:top-[14px] before:left-0 before:bg-[#40e640]"
        >
          {data.websiteUrlText}
        </a>
        <IconsLibrary type="arrow-square" />
      </div>
    </div>
  );
};

export default AboutCase;
