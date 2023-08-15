import React, { useState } from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

import { navigate } from "gatsby";
import IconsLibrary from "./bvIcons";

const Element = ({ faqItem, id }) => {
  return (
    <div
      key={faqItem.faqQuestion}
      className={`bg-faq-color rounded-[12px] text-[18px] text-[#a5a5a5] p-[50px] leading-normal flex flex-col justify-between mb-[10px] w-full max-w-[900px]`}
    >
      <h4 className="text-[24px] font-medium mb-[10px]">
        {faqItem.faqQuestion}{" "}
      </h4>
      <p className="text-[16px] font-normal" id={id}>
        <div dangerouslySetInnerHTML={{ __html: faqItem.faqAnswer }} />
      </p>
    </div>
  );
};

const FaqComponent = ({
  faqItems,
  faqTitle,
  faqTitleHighlight,
  imageName,
  images,
}) => {
  const gImage = getImage(images[imageName]);
  const [faqOpen, setFaqOpen] = useState(false);

  const handleMenuToggle = (param) => {
    setFaqOpen((prevState) => !prevState);

    setTimeout(() => {
      navigate(`${`/about-us/#${param}`}`);
    }, 100);
    setTimeout(() => {
      // Toggle body scroll class when the menu is open/closed
      if (!faqOpen) {
        document.body.classList.add("disable-scroll");
      } else {
        document.body.classList.remove("disable-scroll");
      }
    }, 200);
  };
  return (
    <>
      <div className="col-span-4 rounded-3xl overflow-hidden">
        <GatsbyImage image={gImage} className="w-full h-full" />
      </div>
      <div className="col-span-8 p-[50px] bg-gray-testimonial rounded-3xl flex flex-col justify-between">
        <h3 className="mb-[100px] w-full max-w-[680px] text-[42px] leading-none font-medium">
          {faqTitle} <span className="text-[#737373]">{faqTitleHighlight}</span>
        </h3>
        <div className="flex flex-col gap-y-[5px]">
          {faqItems.length &&
            faqItems.map((item, index) => {
              return (
                <div
                  key={item.faqQuestion}
                  className="bg-gray-faq rounded-[12px] px-[30px] py-[20px] text-[18px] leading-normal flex items-center justify-between hover:cursor-pointer"
                  onClick={() => handleMenuToggle(`id-${index}`)}
                >
                  <h4>{item.faqQuestion} </h4>
                  <IconsLibrary type="expand-faq" fill="ar(--textNormal)" />
                </div>
              );
            })}
        </div>
      </div>
      <div
        className={`bg-[#1a1a1a] h-[200vh] bg-opacity-95 py-72 fixed top-0 right-0 w-screen h-screen flex flex-col justify-start items-center ease-in-out duration-300 overflow-y-auto	  ${
          faqOpen
            ? "opacity-1 p-[40px] z-10 visible"
            : "opacity-0 p-[32px] z-0 invisible"
        }`}
      >
        {faqItems.length &&
          faqItems.map((item, index) => {
            return (
              <Element
                faqItem={item}
                key={item.faqQuestion}
                id={`id-${index}`}
              />
            );
          })}

        <div
          className="fixed w-[48px] h-[48px] bg-[#d9d9d9] rounded-full flex items-center justify-center right-[calc(50%-520px)] top-[50%] cursor-pointer group"
          onClick={() => handleMenuToggle()}
        >
          <IconsLibrary
            type="close-faq"
            className="ease-in-out duration-300 rotate-45 group-hover:rotate-0"
          />
        </div>
      </div>
    </>
  );
};

export default FaqComponent;
