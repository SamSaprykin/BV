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
          className="w-screen h-screen"
          alt="hero"
          placeholder="dominantColor"
        />
      </div>
      <div className="flex relative z-10 left-32 bottom-24 font-sans text-white text-headingL font-normal w-full max-w-[800px] flex-wrap gap-[15px] leading-[42px] tracking-normal">
        <h1 className="text-headingL font-sans leading-[42px] tracking-normal">
          We combine sharp design
        </h1>
        <BvButton
          url="/"
          type="link-internal"
          variant="primary"
          iconType="eyes"
          iconClassName="absolute -top-4 left-[50%]"
          className="text-xl"
        >
          Energievergelijk.nl
        </BvButton>
        <span> with rich</span>{" "}
        <BvButton
          url="/"
          type="link-internal"
          variant="outline"
          className="text-xl"
        >
          Zorgwijzer.nl
        </BvButton>{" "}
        <span>technology to craft</span>
        <span>exciting brands</span>
        <BvButton
          url="/"
          type="link-internal"
          variant="outline"
          className="text-xl"
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
