import React from "react";
import BvButton from "./Button";
import IconsLibrary from "./bvIcons";

const KeyNumbers = ({ title, numberItems, titleHighlight }) => {
  console.log(title, titleHighlight, numberItems);
  return (
    <div
      className={`col-span-8 pt-[50px] bg-[#313131] rounded-3xl flex flex-col`}
    >
      <div className="w-full max-w-[65%] mb-8 px-[50px]">
        <h2 className="text-[32px] leading-[40px] font-medium text-white ">
          {title} <span className="text-[#a5a5a5]">{titleHighlight}</span>
        </h2>
      </div>
      <div>
        {numberItems.length &&
          numberItems.map((item, index) => {
            return (
              <div
                key={item.info}
                className={`flex gap-x-8 items-center py-16 justify-between rounded-3xl px-[50px] ${
                  index + 1 !== numberItems.length
                    ? "border-b-[1px] border-white"
                    : "bg-purple"
                }`}
              >
                <div className="flex items-center gap-x-6 min-w-[200px]">
                  <h5 className="text-[82px] leading-[42px] text-white">
                    {item.number}
                  </h5>
                  <span className="text-[82px] leading-[42px] text-[#40e640]">
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
