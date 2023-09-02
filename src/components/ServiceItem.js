import React from "react";

const ServiceItem = ({ data, className }) => {
  return (
    <div
      className={`${className} rounded-3xl bg-gray-testimonial p-[30px] md:p-[50px] flex flex-col justify-between h-full`}
    >
      <div className="bg-black p-[20px] rounded-[20px] w-[80px] h-[80px] flex justify-center items-center">
        <span className=" text-white text-[32px] block leading-[1]">
          {data.service}
        </span>
      </div>
      <div>
        <h2 className="mt-20 md:mt-0 font-medium text-[22px] md:text-[32px] mb-[11px] leading-tight">
          {data.title}
        </h2>
        <p>{data.description}</p>
        <div className="flex gap-[6px] flex-wrap mt-[31px]">
          {data.categories.length &&
            data.categories.map((category) => {
              return (
                <span
                  key={category}
                  className="rounded-[100px] bg-white px-[13px] py-[9px] text-sm font-medium leading-none text-black"
                >
                  {category}
                </span>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
