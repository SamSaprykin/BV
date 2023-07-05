import { StaticImage } from "gatsby-plugin-image";
import React from "react";

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
      <div className="flex relative z-10 left-32 bottom-24 font-sans text-white text-headingL font-normal w-full max-w-[800px] flex-wrap gap-[15px] leading-[42px]">
        <h1 className="text-headingL font-sans leading-[42px]">
          We combine sharp design
        </h1>
        <span> with rich</span> <span>technology to craft</span>
      </div>
    </div>
  );
};

export default Hero;
