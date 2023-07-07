import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import { Link } from "gatsby";
import IconsLibrary from "./bvIcons";
import { isBrowser } from "../utils";
import BvButton from "./Button";

const footerData = {
  companyName: "BrightBunch",
  title: "Hola.  Hallo.  Ni hao.",
  years: "© 2015 - 2023",
  ctaText: "Get in touch",
  ctaRoute: "/contact",
  email: "hola@bb.studio",
  mobile: "085 06 5314",
  social: {
    address: "Schiekade 143B 3033BM, Rotterdam (NL)",
    registrationOne: "KvK Rotterdam: 62222724",
    registrationTwo: "BTW-nummer: NL850996144B01",
    socialItems: [
      {
        name: "Linkedin",
        link: "/",
      },
      {
        name: "Instagram",
        link: "/",
      },
      {
        name: "Facebook",
        link: "/",
      },
      {
        name: "Twitter",
        link: "/",
      },
      {
        name: "Dribble",
        link: "/",
      },
      {
        name: "Behance",
        link: "/",
      },
    ],
  },
};

const Footer = () => {
  return (
    <div className="grid grid-cols-footer px-10 pt-[20px] bg-primary gap-x-[20px] mb-[50px]">
      <div className="flex flex-col px-[50px] pt-[42px] pb-[31px] bg-[#40e643] h-[400px] rounded-[25px] items-start">
        <h2 className="text-white bg-black rounded-[100px] overflow-hidden inline-block text-3xl max-w-[244px] whitespace-nowrap leading-9 mb-[43px]">
          {footerData.title}
        </h2>
        <div>
          <h3 className="text-3xl font-medium leading-tight text-black">
            {footerData.email}
          </h3>
          <h3 className="text-3xl font-medium leading-tight text-black">
            {footerData.mobile}
          </h3>
        </div>

        <BvButton
          variant="primary"
          className="rounded-[12px] flex items-center bg-transparent border-black border-2 mt-[32px]"
          iconType="sm-arrow-right"
          iconClassName="ml-2"
          type="link-internal"
          url={footerData.ctaRoute}
        >
          {footerData.ctaText}
        </BvButton>
        <div className="flex w-full justify-between mt-[70px]">
          <span className="text-[14px] text-black">
            {footerData.companyName}
          </span>
          <span className="text-[14px] text-black">{footerData.years}</span>
        </div>
      </div>
      <div className="flex flex-col px-[50px] py-[42px] bg-[#a5a5a5] rounded-[25px] items-start justify-between">
        <div className="grid grid-cols-3 gap-[4px]">
          {footerData.social.socialItems.map((social) => {
            return (
              <BvButton
                variant="primary"
                className="bg-transparent border-black border-2 text-center text-base max-w-[130px] leading-[28px] py-[2px]"
                type="link-internal"
                url={social.link}
                key={social.name}
              >
                {social.name}
              </BvButton>
            );
          })}
        </div>
        <div className="flex justify-between w-full">
          <div className="text-[14px] text-black max-w-[155px]">
            {footerData.social.address}
          </div>
          <div className="flex flex-col">
            <span className="text-[14px] text-black">
              {footerData.social.registrationOne}
            </span>
            <span className="text-[14px] text-black">
              {footerData.social.registrationTwo}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex flex-col gap-y-[20px]">
        <div className="bg-[#313131] rounded-[25px] h-[100px] w-full flex items-center justify-center">
          <IconsLibrary type="moon" />
        </div>
        <div className="bg-[#313131] rounded-[25px] grow"></div>
      </div>
    </div>
  );
};

export default Footer;
