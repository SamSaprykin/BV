import React, { useState, useEffect } from "react";

import IconsLibrary from "./bvIcons";

import BvButton from "./Button";

const footerData = {
  companyName: "BrightBunch",
  title: "Hola.  Hallo.  Ni hao.",
  years: "© 2015 - 2023",
  ctaText: "Get in touch",
  ctaRoute: "/contact",
  email: "hola@bb.studio",
  mobile: "085 06 5314",
  currentProjects: {
    amount: 4,
    projects: [
      {
        projectName: "Aantal",
        description: "lopende projecten",
      },
      {
        projectName: "Zorgwijzer",
        description: "lopende projecten",
      },
      {
        projectName: "Energievergelijk",
        description: "Dé vergelijkingssite voor creditcards",
      },
      {
        projectName: "Creditcard",
        description: "lopende projecten",
      },
    ],
  },
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
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentProject(
        (prevIndex) =>
          (prevIndex + 1) % footerData.currentProjects.projects.length
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [footerData.currentProjects.projects.length]);

  const navArray = Array.from(
    { length: footerData.currentProjects.projects.length },
    (_, index) => {
      // Create your element here based on the index or originalArray
      return `Element ${index}`;
    }
  );
  return (
    <div className="grid grid-cols-6 lg:grid-cols-footer px-[10px] md:px-10 pt-[20px] bg-primary gap-x-[20px] mb-[20px] md:mb-[50px]">
      <div className="col-span-6 lg:col-auto flex flex-col px-[30px] md:px-[50px] pt-[32px] md:pt-[42px] pb-[21px] md:pb-[31px] bg-[#40e643] h-[400px] rounded-[25px] items-start">
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
      <div className="mt-[10px] lg:mt-0 col-span-6 md:col-span-4 lg:col-auto flex flex-col px-[30px] md:px-[50px] py-[30px] md:py-[42px] bg-[#a5a5a5] rounded-[25px] items-start justify-between">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-[4px] mb-[40px] md:mb-0">
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
        <div className="flex justify-between w-full gap-[16px] flex-col md:flex-row">
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
      <div className="mt-[10px] lg:mt-0 col-span-6 md:col-span-2 lg:col-auto	flex flex-row md:flex-col gap-[10px] md:gap-[20px]">
        <div className="bg-[#313131] rounded-[25px] h-full md:h-[100px] w-1/2 md:w-full flex items-center justify-center">
          <IconsLibrary type="moon" />
        </div>
        <div className="bg-[#313131] rounded-[25px] grow p-[15px] flex flex-col items-center justify-between">
          <h2 className="text-[42px] md:text-[62px] text-white mt-[16px] md:mt-[20px]">
            {footerData.currentProjects.amount}
          </h2>
          <div className="mt-[17px] md:mt-[20px] relative h-[60px] w-full text-center">
            {footerData.currentProjects.projects.map((project, index) => {
              return (
                <div
                  key={project.projectName}
                  className={`text-2xl leading-tight absolute top-0 left-0 w-full h-full transition-all ease-in-out	duration-2000	 ${
                    index === currentProject
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  {currentProject === index ? (
                    <div className="text-white text-[14px]">
                      <h3 className="text-[#a5a5a5] text-[14px]">
                        {project.projectName}
                      </h3>
                      <span>{project.description}</span>
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
                    index === currentProject
                      ? "w-[20px] bg-white"
                      : "w-[6px] bg-[#737373]"
                  }`}
                  onClick={() => setCurrentProject(index)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
