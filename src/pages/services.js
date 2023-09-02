import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/Layout";

import CaseImage from "../components/CaseImage";
import ServiceItem from "../components/ServiceItem";

const ServiceData = {
  PageName: "Services",
  IncludeFooter: true,
  HeroText: {
    type: "text",
    textOne: {
      color: "white",
      content:
        "We help bold and ambitious companies connect with their audiences",
    },
    icon: {
      url: "/cases/service-hero.png",
    },
    textTwo: {
      color: "white",
      content: "and",
    },
    textThree: {
      color: "#a5a5a5",
      content: " drive growth through design.",
    },
  },
  bodyComponents: [
    {
      type: "service",
      service: "Cd",
      title: "Content & Design",
      description:
        "The more we understand the issues at hand, the better our design solution will become. That is why we begin with an exploration phase. Learning everything there is to know about your project and its goals so that we can make informed decisions later on.",
      categories: [
        "Design partner",
        "Webdesign",
        "Digital design",
        "Prototyping & Testing",
        "Growth Strategy",
      ],
      className: "row-span-4 col-span-12 md:col-span-7",
    },
    {
      type: "image",
      imgName: "one",
      className: "row-span-2 col-span-6 md:col-span-5",
    },
    {
      type: "image",
      imgName: "five",
      className: "row-span-2 col-span-6 md:col-span-5",
    },
    {
      type: "service",
      service: "Wd",
      title: "Website & Development",
      description:
        "The more we understand the issues at hand, the better our design solution will become. That is why we begin with an exploration phase. Learning everything there is to know about your project and its goals so that we can make informed decisions later on.",
      categories: [
        "Design partner",
        "Webdesign",
        "Digital design",
        "Prototyping & Testing",
        "Growth Strategy",
      ],
      className: "row-span-4 col-span-12 md:col-span-7",
    },
    {
      type: "image",
      imgName: "three",
      className: "row-span-2 col-span-6 md:col-span-5",
    },
    {
      type: "image",
      imgName: "four",
      className: "row-span-2 col-span-6 md:col-span-5",
    },
  ],
};

export default function Services({ location }) {
  const CaseImages = useStaticQuery(graphql`
    query CaseImages {
      one: file(relativePath: { eq: "images/services/twenty.png" }) {
        childImageSharp {
          gatsbyImageData(
            webpOptions: { quality: 100 }
            blurredOptions: { toFormat: WEBP }
          )
        }
      }
      three: file(relativePath: { eq: "images/services/twenty-one.png" }) {
        childImageSharp {
          gatsbyImageData(
            webpOptions: { quality: 100 }
            blurredOptions: { toFormat: WEBP }
          )
        }
      }
      four: file(relativePath: { eq: "images/services/twenty-two.png" }) {
        childImageSharp {
          gatsbyImageData(
            webpOptions: { quality: 100 }
            blurredOptions: { toFormat: WEBP }
          )
        }
      }
      five: file(relativePath: { eq: "images/services/twenty-three.png" }) {
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
    <Layout location={location} includeFooter={ServiceData.IncludeFooter}>
      <div className="bg-primary flex items-center flex-col">
        <div className="h-30 md:h-40 p-8 md:p-16 text-lg flex items-center">
          {ServiceData.PageName}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-serviceLayout w-full px-[10px] md:px-10 gap-x-[20px]">
          <div className="bg-black p-[30px] md:p-[50px] flex rounded-3xl max-h-[1280px] mb-[10px] md:mb-[20px]">
            <h1
              className={`text-${ServiceData.HeroText.textOne.color} text-[28px] md:text-[42px] leading-none tracking-normal`}
            >
              <span
                className={`text-${ServiceData.HeroText.textOne.color} text-[28px] md:text-[42px] leading-none after:content-[''] after:mx-2 after:bg-[url("/service-hero.png")] after:w-[74px] after:h-[26px] md:after:w-[100px] md:after:h-[38px] after:bg-cover after:inline-block after:align-middle`}
              >
                {ServiceData.HeroText.textOne.content}
              </span>
              <span
                className={`text-${ServiceData.HeroText.textTwo.color} text-[28px] md:text-[42px] leading-none`}
              >
                {ServiceData.HeroText.textTwo.content}
              </span>
              <span
                className={`text-[${ServiceData.HeroText.textThree.color}] text-[28px] md:text-[42px] leading-none`}
              >
                {ServiceData.HeroText.textThree.content}
              </span>
            </h1>
          </div>
          <div className="grid grid-cols-12 gap-[20px]">
            {ServiceData.bodyComponents.map((component) => {
              switch (component.type) {
                case "image":
                  return (
                    <CaseImage
                      image={CaseImages[component.imgName]}
                      className={component.className}
                    />
                  );
                case "service":
                  return (
                    <ServiceItem
                      className={component.className}
                      data={component}
                    />
                  );
                default:
                  return <></>;
              }
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}
