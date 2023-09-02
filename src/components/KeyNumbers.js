import React from "react";

const KeyNumbers = ({ title, numberItems, titleHighlight }) => {
  return (
    <div
      className={`col-span-12 lg:col-span-8 pt-[50px] bg-[#313131] rounded-3xl flex flex-col`}
    >
      <div className="w-full md:max-w-[65%] md:mb-8 px-[30px] md:px-[50px]">
        <h2 className="text-[22px] md:text-[32px] leading-snug md:leading-[40px] font-medium text-white ">
          {title} <span className="text-[#a5a5a5]">{titleHighlight}</span>
        </h2>
      </div>
      <div>
        {numberItems.length &&
          numberItems.map((item, index) => {
            return (
              <div
                key={item.info}
                className={`flex flex-col md:flex-row  gap-x-8 md:items-center py-8 md:py-16 justify-between rounded-3xl px-[30px] md:px-[50px] ${
                  index + 1 !== numberItems.length
                    ? "border-b-[1px] border-white"
                    : "bg-purple"
                }`}
              >
                <div className="mb-[13px] md:mb-0 flex items-center gap-x-6 min-w-[200px]">
                  <h5 className="text-[62px] md:text-[82px] leading-none md:leading-[42px] text-white">
                    {item.number}
                  </h5>
                  <span className="text-[62px] md:text-[82px] leading-none md:leading-[42px] text-[#40e640]">
                    +
                  </span>
                </div>
                <p className="text-[16px] leading-[24px] text-white">
                  {item.info}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default KeyNumbers;
