import { StaticImage } from "gatsby-plugin-image";

import React from "react";
import BvButton from "./Button";
import IconsLibrary from "./bvIcons";

const Hero = () => {
  return (
    <div className="w-screen h-screen flex items-end">
      <div className="absolute top-0 left-0 w-full h-full">
        <StaticImage
          src="../assets/images/hero-home.png"
          className="!hidden lg:!block w-screen h-screen"
          alt="hero"
          placeholder="dominantColor"
          quality={100}
          objectFit="cover"
        />
        <StaticImage
          src="../assets/images/hero-mobile.png"
          className="block lg:hidden w-screen h-screen"
          alt="hero"
          placeholder="dominantColor"
          quality={100}
          objectFit="cover"
        />
      </div>
      <div className="flex relative z-0 left-[30px] md:left-[40px] lg:left-32 bottom-32 font-sans text-white text-[38px] md:text-headingL font-medium md:font-normal w-full max-w-[340px] md:max-w-[90%] lg:max-w-[800px] flex-wrap gap-[15px] leading-[42px] tracking-normal">
        <h1 className="text-[38px] md:text-headingL font-sans leading-[42px] tracking-normal">
          We combine sharp
        </h1>
        <span>design</span>
        <BvButton
          url="/"
          type="link-internal"
          variant="primary"
          iconType="eyes"
          iconClassName="absolute -top-4 left-[50%]"
          className="px-[20px] py-[8px] md:px-[19px] md:py-[12px] text-xl"
        >
          Energievergelijk.nl
        </BvButton>
        <span> with rich</span>
        <BvButton
          url="/"
          type="link-internal"
          variant="outline"
          className="px-[20px] py-[8px] md:px-[19px] md:py-[12px] text-xl"
        >
          Zorgwijzer.nl
        </BvButton>
        <span>technology to craft</span>
        <span>exciting brands</span>
        <BvButton
          url="/"
          type="link-internal"
          variant="outline"
          className="px-[20px] py-[8px] md:px-[19px] md:py-[12px] text-xl"
        >
          Creditcard.nl
        </BvButton>{" "}
        <BvButton
          url="/"
          type="link-internal"
          variant="ghost"
          className="flex justify-center items-center"
        >
          <IconsLibrary type="arrow-right" fill="white" />
        </BvButton>{" "}
      </div>
    </div>
  );
};

export default Hero;
