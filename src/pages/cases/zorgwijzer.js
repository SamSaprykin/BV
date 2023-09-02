import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../../components/Layout";

import CaseImage from "../../components/CaseImage";
import CaseLogo from "../../components/CaseLogo";
import AboutCase from "../../components/AboutCase";
import CtaComponent from "../../components/CtaComponents";
import BodyTestimonial from "../../components/BodyTestimonial";
import RelatedCases from "../../components/RelatedCases";

const CaseData = {
  PageName: "Cases — Zorgwijzer.nl",
  IncludeFooter: false,
  AboutCase: {
    categories: ["Design partner", "Website design"],
    caseName: "Zorgwijzer",
    year: "2023",
    websiteUrlText: "creditcard.nl",
    websiteUrlLink: "https://www.creditcard.nl/",
    team: [
      {
        memberName: "Maid",
        memberIcon: "/maid.png",
      },
      {
        memberName: "Seyi",
        memberIcon: "/seyi.png",
      },
      {
        memberName: "Troy",
        memberIcon: "/troy.png",
      },
    ],
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
      className: "row-span-2 col-span-2 p-8 md:p-0",
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
      type: "body-testimonial",
      rating: 5,
      authorImage: "/photo.png",
      authorName: "Bart Koenraadt",
      authorPosition: "CEO",
      authorCompany: "Zorgwijzer.nl",
      testimonial:
        "I have been working with BrightBunch for nearly two years now. With their keen eye for design, development skills, and expert project management, I have managed to serve a lot more clients than I would without them.",
      className: "col-span-4 row-span-2",
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

  relatedCases: {
    type: "related",
    cases: [
      {
        name: "Bekijk project",
        imageName: "six",
        categories: ["Design partner", "Website design"],
        link: "zorgwijzer",
      },
      {
        name: "Zorgwijzer",
        imageName: "three",
        categories: ["Design partner", "Website design"],
        link: "zorgwijzer",
      },
      {
        name: "Energievergelijk.nl",
        imageName: "seven",
        categories: ["Design partner", "Website design"],
        link: "zorgwijzer",
      },
      {
        name: "Creditcard.nl",
        imageName: "fourteen",
        categories: ["Design partner", "Website design"],
        link: "zorgwijzer",
      },
      {
        name: "Energievergelijk.nl",
        imageName: "eleven",
        categories: ["Design partner", "Website design"],
        link: "zorgwijzer",
      },
      {
        name: "Aantal",
        imageName: "fiveteen",
        categories: ["Design partner", "Website design"],
        link: "zorgwijzer",
      },
    ],
  },
};

export default function CasePage({ location }) {
  const ZorgImages = useStaticQuery(graphql`
    query ZorgImages {
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
    <Layout location={location} includeFooter={CaseData.IncludeFooter}>
      <div className="bg-primary flex items-center flex-col">
        <div className="h-30 md:h-40 p-8 md:p-16 text-lg flex items-center">
          {CaseData.PageName}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-caseLayout w-full px-[10px] md:px-10 gap-x-[20px]">
          <div className="grid grid-cols-4 gap-[10px] md:gap-[20px] order-2 lg:order-1">
            {CaseData.bodyComponents.map((component) => {
              switch (component.type) {
                case "image":
                  return (
                    <CaseImage
                      image={ZorgImages[component.imgName]}
                      className={component.className}
                    />
                  );
                case "body-testimonial":
                  return (
                    <BodyTestimonial
                      testimonial={component.testimonial}
                      className={component.className}
                      rating={component.rating}
                      authorImage={component.authorImage}
                      authorName={component.authorName}
                      authorPosition={component.authorPosition}
                      authorCompany={component.authorCompany}
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
          <div className="order-1 lg:order-2 grid lg:grid-rows-11 mb-4">
            <AboutCase data={CaseData.AboutCase} />
          </div>
        </div>
        {CaseData.ctaComponent && (
          <CtaComponent
            text={CaseData.ctaComponent.text}
            ctaRoute={CaseData.ctaComponent.ctaRoute}
            ctaText={CaseData.ctaComponent.ctaText}
          />
        )}
        <RelatedCases images={ZorgImages} cases={CaseData.relatedCases.cases} />
      </div>
    </Layout>
  );
}
