import React from "react";
import BvButton from "./Button";

const CtaComponent = ({ text, ctaText, ctaRoute }) => {
  return (
    <div className="px-10 w-full mt-[20px]">
      <div className="w-full bg-mainGreen rounded-3xl p-[50px] h-[400px] flex flex-col justify-between items-start">
        <p className="w-full max-w-[1000px] text-[42px] font-medium leading-none">
          {text}
        </p>
        <BvButton
          url={ctaRoute}
          className="rounded-[12px] flex items-center bg-black border-black border-2 mt-[32px] text-white"
          iconType="sm-arrow-right-white"
          iconClassName="ml-2"
          variant="primary"
          type="link-internal"
        >
          {ctaText}
        </BvButton>
      </div>
    </div>
  );
};

export default CtaComponent;
