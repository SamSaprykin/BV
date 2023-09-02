import React, { useState, useEffect } from "react";
import IconsLibrary from "./bvIcons";

const MemberIcon = ({ member }) => {
  const [active, setActive] = useState(false);
  return (
    <div
      key={member.memberName}
      className="relative text-center"
      onMouseEnter={() => setActive(!active)}
      onMouseLeave={() => setActive(!active)}
    >
      <img src={member.memberIcon} />
      <span
        className={`${
          active ? "-top-6 opacity-100" : "-top-4 opacity-0"
        } transition-all ease-in-out	duration-500 bg-mainGreen text-[12px] px-[10px] py-[5px] absolute  right-2 rounded-[4px]`}
      >
        {member.memberName}
        <IconsLibrary
          type="triangle"
          className="absolute top-[28px] right-[30%]"
        />
      </span>
    </div>
  );
};

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
    <div className="row-span-2 bg-black rounded-[20px] md:rounded-2xl px-[30px] xl:px-[50px] py-[30px] relative">
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
      <div className="mt-[30px] relative h-[240px] md:h-[160px] lg:h-[260px] xl:h-[200px]">
        {data.testimonials.map((testimonial, index) => {
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
          className="mr-[11px] relative pl-[14px] text-white text-[22px] underline before:block before:absolute before:w-[6px] before:h-[6px] before:rounded-full before:bg-white before:top-[14px] before:left-0 before:bg-mainGreen"
        >
          {data.websiteUrlText}
        </a>
        <IconsLibrary type="arrow-square" />
      </div>
      {data.team && (
        <div className="lg:absolute mt-[50px] md:mt-[100px] lg:mt-0 lg:bottom-[50px] left-[50px] flex flex-col">
          <h5 className="text-[#a5a5a5] text=[14px] mb-[23px]">
            Brainpower behind this project
          </h5>
          <div className="flex gap-2">
            {data.team.map((member) => {
              return <MemberIcon key={member.memberName} member={member} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutCase;
