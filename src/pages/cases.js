import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import IconsLibrary from "../components/bvIcons";

function getWidthByType(variant) {
  const classMappings = {
    "full-empty-space": `w-[calc(66.6%-20px)]`,
    half: `w-[calc(50%-10px)]`,
    full: `w-full`,
  };

  const className = classMappings[variant];

  // Return the class name if found, or an empty string otherwise
  return className || "";
}

const CasesData = {
  PageName: "Cases",
  HeroText: {
    type: "text",
    textOne: {
      color: "white",
      content:
        "We’re proud to have worked for some of the biggest names in the tech industry over",
    },
    icon: {
      url: "/cases/cases-text-image.png",
    },
    textTwo: {
      color: "white",
      content: "the years,",
    },
    textThree: {
      color: "#a5a5a5",
      content: " learning powerful insights along the way.",
    },
  },
  Cases: [
    {
      categories: ["Design partner", "Website design"],
      caseName: "Bekijk project",
      nameType: "general",
      year: "2023",
      description: "Zorgverzekeringen vergelijken doe je op Zorgwijzer",
      imgName: "BekijkProject",
      size: "full-empty-space",
    },
    {
      categories: ["Design partner", "Website design"],
      caseName: "Zorgwijzer",
      nameType: "marquee",
      year: "2023",
      description: "Dé vergelijkingssite voor creditcards",
      imgName: "Zorgwijzer",
      size: "half",
    },
    {
      categories: ["Design partner", "Website design"],
      caseName: "Energievergelijk.nl",
      nameType: "general",
      year: "2023",
      description: "Dé vergelijkingssite voor creditcards",
      imgName: "EnergievergelijkOne",
      size: "half",
    },
    {
      categories: ["Design partner", "Website design"],
      caseName: "Zorgwijzer One",
      nameType: "general",
      year: "2023",
      description: "Dé vergelijkingssite voor creditcards",
      imgName: "ZorgwijzerOne",
      size: "full",
    },
    {
      categories: ["Design partner", "Website design"],
      caseName: "Creditcard.nl",
      nameType: "general",
      year: "2023",
      description: "Dé vergelijkingssite voor creditcards",
      imgName: "Creditcard",
      size: "half",
    },
    {
      categories: ["Design partner", "Website design"],
      caseName: "Energievergelijk.nl",
      nameType: "general",
      year: "2023",
      description: "Dé vergelijkingssite voor creditcards",
      imgName: "Energievergelijk",
      size: "half",
    },
  ],
};

const Mardquee = ({ name }) => {
  return (
    <div className="absolute top-1/2 translate-y-neg50">
      <div className="overflow-x-hidden">
        <div className="py-12 animate-marquee whitespace-nowrap flex justify-between items-center">
          <span className="mx-2 text-4xl text-white">{name}</span>
          <IconsLibrary type="arrow-right" fill="#40e640" className="mx-2" />
          <span className="mx-2 text-4xl text-white">{name}</span>
          <IconsLibrary type="arrow-right" fill="#40e640" className="mx-2" />
          <span className="mx-2 text-4xl text-white">{name}</span>
          <IconsLibrary type="arrow-right" fill="#40e640" className="mx-2" />
          <span className="mx-2 text-4xl text-white">{name}</span>
          <IconsLibrary type="arrow-right" fill="#40e640" className="mx-2" />
          <span className="mx-2 text-4xl text-white">{name}</span>
          <span className="mx-2 text-4xl text-white">{name}</span>
          <IconsLibrary type="arrow-right" fill="#40e640" className="mx-2" />
          <span className="mx-2 text-4xl text-white">{name}</span>
          <IconsLibrary type="arrow-right" fill="#40e640" className="mx-2" />
          <span className="mx-2 text-4xl text-white">{name}</span>
          <IconsLibrary type="arrow-right" fill="#40e640" className="mx-2" />
          <span className="mx-2 text-4xl text-white">{name}</span>
          <IconsLibrary type="arrow-right" fill="#40e640" className="mx-2" />
          <span className="mx-2 text-4xl text-white">{name}</span>
        </div>
      </div>
    </div>
  );
};

export default function Cases({ location }) {
  console.log(location);
  const CasesImages = useStaticQuery(graphql`
    query CasesImages {
      BekijkProject: file(
        relativePath: { eq: "images/cases/rst-omnichannel-xl-us-en.png" }
      ) {
        childImageSharp {
          gatsbyImageData(
            webpOptions: { quality: 100 }
            blurredOptions: { toFormat: WEBP }
          )
        }
      }
      Zorgwijzer: file(relativePath: { eq: "images/cases/swell.png" }) {
        childImageSharp {
          gatsbyImageData(
            webpOptions: { quality: 100 }
            blurredOptions: { toFormat: WEBP }
          )
        }
      }
      EnergievergelijkOne: file(
        relativePath: { eq: "images/cases/swell.png" }
      ) {
        childImageSharp {
          gatsbyImageData(
            webpOptions: { quality: 100 }
            blurredOptions: { toFormat: WEBP }
          )
        }
      }
      ZorgwijzerOne: file(relativePath: { eq: "images/cases/zorgwijzer.png" }) {
        childImageSharp {
          gatsbyImageData(
            webpOptions: { quality: 100 }
            blurredOptions: { toFormat: WEBP }
          )
        }
      }
      Creditcard: file(relativePath: { eq: "images/cases/yondeur.png" }) {
        childImageSharp {
          gatsbyImageData(
            webpOptions: { quality: 100 }
            blurredOptions: { toFormat: WEBP }
          )
        }
      }
      Energievergelijk: file(relativePath: { eq: "images/cases/bizzon.png" }) {
        childImageSharp {
          gatsbyImageData(
            webpOptions: { quality: 100 }
            blurredOptions: { toFormat: WEBP }
          )
        }
      }
    }
  `);

  return (
    <Layout location={location}>
      <div className="bg-primary flex items-center flex-col">
        <div className="h-40 p-16 text-lg">{CasesData.PageName}</div>
      </div>

      <div className="flex flex-wrap px-10 gap-[20px] w-full">
        <div className="bg-black p-[50px] w-1/3 flex rounded-3xl">
          <h1
            className={`text-${CasesData.HeroText.textOne.color} text-[42px] leading-none tracking-normal`}
          >
            <span
              className={`text-${CasesData.HeroText.textOne.color} text-[42px] leading-none after:content-[''] after:mx-2 after:bg-[url("/cases/cases-text-image.png")] after:w-[100px] after:h-[38px] after:inline-block after:align-middle`}
            >
              {CasesData.HeroText.textOne.content}
            </span>
            <span
              className={`text-${CasesData.HeroText.textTwo.color} text-[42px] leading-none`}
            >
              {CasesData.HeroText.textTwo.content}
            </span>
            <span
              className={`text-[${CasesData.HeroText.textThree.color}] text-[42px] leading-none`}
            >
              {CasesData.HeroText.textThree.content}
            </span>
          </h1>
        </div>

        {CasesData.Cases.map((useCase) => {
          const widthCardClass = getWidthByType(useCase.size);

          const image = getImage(CasesImages[useCase.imgName]);
          return (
            <div
              key={useCase.name}
              className={`${widthCardClass} bg-primary rounded-3xl flex flex-col overflow-hidden relative border-[1px]`}
              style={{
                borderColor: "var(--borderColorItem)",
              }}
            >
              <GatsbyImage
                image={image}
                alt={useCase.caseName}
                className="rounded-3xl w-full object-cover"
              />
              {useCase.nameType === "general" ? (
                <h2 className="left-[30px] bottom-[112px] absolute text-white text-3xl">
                  {useCase.caseName}
                </h2>
              ) : (
                <Mardquee name={useCase.caseName} />
              )}

              <span className="right-[30px] top-[30px] absolute px-[18px] py-[9px] text-sm text-white border-[1px] rounded-[100px] border-white">
                {useCase.year}
              </span>
              <div className="absolute top-[30px] left-[30px] flex gap-[6px]">
                {useCase.categories.map((category) => {
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

              <div className="h-[80px] flex px-[30px] items-center">
                <h3> {useCase.description}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
