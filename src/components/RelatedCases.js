import React from "react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const RelatedCases = ({ cases, images }) => {
  return (
    <div className="px-10 w-full mt-[20px]">
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Autoplay]}
        className="mb-[40px]"
      >
        {cases.map((caseItem) => {
          const gImage = getImage(images[caseItem.imageName]);
          return (
            <SwiperSlide key={caseItem.name}>
              <div className="rounded-2xl h-[33vw] max-h-[440px] 2xl:max-h-[600px] overflow-hidden relative">
                <Link
                  to={`/cases/${caseItem.link}`}
                  className="w-full h-[33vw] max-h-[440px] 2xl:max-h-[600px] absolute z-20"
                />
                <GatsbyImage
                  image={gImage}
                  className="w-full object-contain h-[33vw] max-h-[440px] 2xl:max-h-[600px] absolute z-10"
                />
                <div className="p-[20px] flex flex-col absolute top-0 justify-between h-full grow">
                  <div className="flex gap-[6px] z-30 relative">
                    {caseItem.categories.map((category) => {
                      return (
                        <span
                          key={category}
                          className="rounded-[100px] bg-white px-[13px] py-[9px] text-sm font-medium leading-none text-black"
                        >
                          {category}
                        </span>
                      );
                    })}
                  </div>
                  <h4 className="text-white z-30 text-2xl bottom-[20px] left-[20px]">
                    {caseItem.name}
                  </h4>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default RelatedCases;
