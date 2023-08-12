import React from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

const KeyValues = ({ valuesItems, images }) => {
  return (
    <>
      {valuesItems.length &&
        valuesItems.map((item) => {
          switch (item.type) {
            case "text":
              return (
                <div
                  key={item.text}
                  className="col-span-3 bg-[#ebebeb] row-span-2 p-[50px] rounded-3xl flex flex-col justify-between h-[300px]"
                >
                  <div className="flex items-between">
                    <h5 className="text-[20px] 2xl:text-[24px] leading-[1.2] text-black">
                      {item.text}
                    </h5>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-[14px] leading-[1.2] text-[#737373]">
                      {item.info}
                    </p>
                    <p className="text-[14px] leading-[1.2] text-[#737373]">
                      {item.indexNumber}
                    </p>
                  </div>
                </div>
              );
            case "highlight":
              return (
                <div className="row-span-3 col-span-6 bg-mainGreen p-[50px] text-[32px] 2xl:text-[42px] leading-none tracking-normal rounded-3xl h-full font-medium">
                  {item.text}
                </div>
              );
            case "image":
              const gImage = getImage(images[item.imageName]);
              return (
                <div className="row-span-3 col-span-6 rounded-3xl overflow-hidden">
                  <GatsbyImage image={gImage} className="w-full h-full" />
                </div>
              );
            default:
              return <></>;
          }
        })}
    </>
  );
};

export default KeyValues;
