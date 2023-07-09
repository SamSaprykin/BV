import * as React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/Layout";
import IconsLibrary from "../../components/bvIcons";
import CaseImage from "../../components/CaseImage";
import CaseLogo from "../../components/CaseLogo";
import AboutCase from "../../components/AboutCase";

const CaseData = {
  PageName: "Cases — Zorgwijzer.nl",
  AboutCase: {
    categories: ["Design partner", "Website design"],
    caseName: "Zorgwijzer",
    year: "2023",
    websiteUrl: "creditcard.nl",
    testimonials: [
      {
        authorName: "De klant: ",
        testimonial:
          "NNZ “the packaging network” bestaat 100 jaar 🎉 Dit moest natuurlijk gevierd worden en wij kregen de taak om een onvergetelijke ervaring te creëren.",
      },
      {
        authorName: "De klant second test: ",
        testimonial:
          "NNZ “the packaging network” bestaat 100 jaar 🎉 Dit moest natuurlijk gevierd worden en wij kregen de taak om een onvergetelijke ervaring te creëren.",
      },
      {
        authorName: "Test number 3: ",
        testimonial:
          "NNZ “the packaging network” bestaat 100 jaar 🎉 Dit moest natuurlijk gevierd worden en wij kregen de taak om een onvergetelijke ervaring te creëren.",
      },
    ],
    colaborators: [
      {
        name: "Maid",
        iconName: "maid-emoji-icon",
      },
      {
        name: "Maid",
        iconName: "tim-emoji-icon",
      },
      {
        name: "Maid",
        iconName: "max-emoji-icon",
      },
    ],
  },
  bodyComponents: [
    {
      type: "image",
      imgName: "one",
      className: "row-span-3 col-span-2",
    },
    {
      type: "case-logo",
      iconName: "zorgwijzerLogo",
      className: "row-span-2 col-span-2",
      bgColor: "#0051ff",
    },
    {
      type: "image",
      imgName: "three",
      className: "row-span-2 col-span-2",
    },
    {
      type: "image",
      imgName: "four",
      className: "row-span-1 col-span-2",
    },
    {
      type: "image",
      imgName: "five",
      className: "col-span-4",
    },
    {
      type: "image",
      imgName: "six",
      className: "row-span-2 col-span-2",
    },
    {
      type: "image",
      imgName: "seven",
      className: "row-span-1 col-span-2",
    },
    {
      type: "image",
      imgName: "eight",
      className: "row-span-1 col-span-2",
    },
    {
      type: "image",
      imgName: "nine",
      className: "col-span-4",
    },
    {
      type: "image",
      imgName: "fourteen",
      className: "col-span-2 row-span-2",
    },
    {
      type: "image",
      imgName: "eleven",
      className: "col-span-2 ",
    },
    {
      type: "image",
      imgName: "twelve",
      className: "",
    },
    {
      type: "image",
      imgName: "thirteen",
      className: "",
    },

    {
      type: "image",
      imgName: "fiveteen",
      className: "col-span-4",
    },
  ],
  ctaComponent: {
    text: "Now it’s your turn to describe your vision and let us unveil the full potential of your ideas!",
    ctaText: "Get in touch",
    ctaRoute: "/contact",
  },
};

export default function CasePage({ location }) {
  console.log(location);

  const CaseImages = useStaticQuery(graphql`
    query CaseImages {
      one: file(relativePath: { eq: "images/case/1.png" }) {
        childImageSharp {
          gatsbyImageData(
            webpOptions: { quality: 100 }
            blurredOptions: { toFormat: WEBP }
          )
        }
      }
      three: file(relativePath: { eq: "images/case/4.png" }) {
        childImageSharp {
          gatsbyImageData(
            webpOptions: { quality: 100 }
            blurredOptions: { toFormat: WEBP }
          )
        }
      }
      four: file(relativePath: { eq: "images/case/3.png" }) {
        childImageSharp {
          gatsbyImageData(
            webpOptions: { quality: 100 }
            blurredOptions: { toFormat: WEBP }
          )
        }
      }
      five: file(relativePath: { eq: "images/case/5.png" }) {
        childImageSharp {
          gatsbyImageData(
            webpOptions: { quality: 100 }
            blurredOptions: { toFormat: WEBP }
          )
        }
      }
      six: file(relativePath: { eq: "images/case/6.png" }) {
        childImageSharp {
          gatsbyImageData(
            webpOptions: { quality: 100 }
            blurredOptions: { toFormat: WEBP }
          )
        }
      }
      seven: file(relativePath: { eq: "images/case/7.png" }) {
        childImageSharp {
          gatsbyImageData(
            webpOptions: { quality: 100 }
            blurredOptions: { toFormat: WEBP }
          )
        }
      }
      eight: file(relativePath: { eq: "images/case/8.png" }) {
        childImageSharp {
          gatsbyImageData(
            webpOptions: { quality: 100 }
            blurredOptions: { toFormat: WEBP }
          )
        }
      }
      nine: file(relativePath: { eq: "images/case/9.png" }) {
        childImageSharp {
          gatsbyImageData(
            webpOptions: { quality: 100 }
            blurredOptions: { toFormat: WEBP }
          )
        }
      }
      eleven: file(relativePath: { eq: "images/case/11.png" }) {
        childImageSharp {
          gatsbyImageData(
            webpOptions: { quality: 100 }
            blurredOptions: { toFormat: WEBP }
          )
        }
      }
      twelve: file(relativePath: { eq: "images/case/12.png" }) {
        childImageSharp {
          gatsbyImageData(
            webpOptions: { quality: 100 }
            blurredOptions: { toFormat: WEBP }
          )
        }
      }
      thirteen: file(relativePath: { eq: "images/case/13.png" }) {
        childImageSharp {
          gatsbyImageData(
            webpOptions: { quality: 100 }
            blurredOptions: { toFormat: WEBP }
          )
        }
      }
      fourteen: file(relativePath: { eq: "images/case/14.png" }) {
        childImageSharp {
          gatsbyImageData(
            webpOptions: { quality: 100 }
            blurredOptions: { toFormat: WEBP }
          )
        }
      }
      fiveteen: file(relativePath: { eq: "images/case/15.png" }) {
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
        <div className="h-40 p-16 text-lg">{CaseData.PageName}</div>
        <div className="grid grid-cols-caseLayout w-full px-10 gap-x-[20px]">
          <div className="grid grid-cols-4 gap-[20px]">
            {CaseData.bodyComponents.map((component) => {
              switch (component.type) {
                case "image":
                  return (
                    <CaseImage
                      image={CaseImages[component.imgName]}
                      className={component.className}
                    />
                  );
                case "case-logo":
                  return (
                    <CaseLogo
                      icon={component.iconName}
                      className={component.className}
                      bgColor={component.bgColor}
                    />
                  );
                default:
                  return <></>;
              }
            })}
          </div>
          <div className="grid grid-rows-10 ">
            <AboutCase data={CaseData.AboutCase} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
