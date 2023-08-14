import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/Layout";
import KeyNumbers from "../components/KeyNumbers";
import KeyValues from "../components/KeyValues";
import Team from "../components/Team";
import FaqComponent from "../components/Faq";

const AboutData = {
  PageName: "About Us",
  IncludeFooter: true,
  HeroText: {
    type: "text",
    textOne: {
      color: "white",
      content: "Since 2015 we’ve been working ",
    },
    icon: {
      url: "/cases/cases-text-image.png",
    },
    textTwo: {
      color: "white",
      content: "amazing organisations to create",
    },
    textThree: {
      color: "#a5a5a5",
      content:
        " meaningful impact and compelling experiences that deliver results.",
    },
  },
  KeyNumbers: {
    title: "We believe our industry is ",
    titleHighlight: "blinded by numbers.",
    numbers: [
      {
        number: "100",
        info: "Craft CMS is our content management system of choice. It’s easy to use, flexible and seriously powerful. Craft is perfect for creating beautiful, effective websites of all sizes.",
      },
      {
        number: "15",
        info: "From the first conversation we knew DigitlHaus was the right agency to partner with. They were very thorough, asked a ton of questions and educated us on platform capabilities and technology.",
      },
      {
        number: "6",
        info: "We love Shopify for building online stores. It’s flexible, reliable and incredibly powerful. We’ve used it for everything from single product sites to £multi-million Shopify Plus stores.",
      },
    ],
  },
  Info: {
    title:
      "We created BrightBunch by blending our skills in design, development and creative strategy to build forward thinking digital experiences, so you can focus on result-driven outcomes.",
  },
  KeyValues: {
    items: [
      {
        type: "highlight",
        text: "We created BrightBunch by blending our skills in design, development and creative strategy to build forward thinking digital experiences, so you can focus on result-driven outcomes.",
      },
      {
        type: "text",
        text: "We are not a lorem-ipsum agency that worries about text and images later. Content must always drive design.",
        info: "Our Values",
        indexNumber: "01",
      },
      {
        type: "text",
        text: "When you ask us to do something we’ll often challenge you on it. Digging deeper into a problem makes for a better result.",
        info: "Our Values",
        indexNumber: "02",
      },
      {
        type: "image",
        imageName: "team",
      },
      {
        type: "text",
        text: "Our best work is done when we start with strategy. It’s not rocket science, it’s just a plan.",
        info: "Our Values",
        indexNumber: "03",
      },
      {
        type: "text",
        text: "Building a great agency means building the best team. We pride ourselves on the calibre of our people and the work they’ve done.",
        info: "Our Values",
        indexNumber: "04",
      },
    ],
  },
  Team: {
    title: "Sure, we build products and design brands. But so does everybody. ",
    titleHighlight:
      "And while they do, they forget about who’s behind all this.",
    members: [
      {
        name: "Leandro",
        icon: "/teamMembers/leandro.png",
        position: "Brand Design Team Lead",
        yearJoined: "2015",
        country: "NL",
      },
      {
        name: "Jadyn",
        icon: "/teamMembers/jadyn.png",
        position: "Senior Product Designer",
        yearJoined: "2015",
        country: "NL",
      },
      {
        name: "Claudio",
        icon: "/teamMembers/claudio.png",
        position: "React Developer",
        yearJoined: "2015",
        country: "NL",
      },
      {
        name: "Maid",
        icon: "/teamMembers/maid.png",
        position: "Founder",
        yearJoined: "2015",
        country: "NL",
      },
      {
        name: "Petar",
        icon: "/teamMembers/petar.png",
        position: "UX Researcher",
        yearJoined: "2015",
        country: "NL",
      },
      {
        name: "Pourya",
        icon: "/teamMembers/pourya.png",
        position: "Senior Brand Designer",
        yearJoined: "2015",
        country: "NL",
      },
      {
        name: "Neuyen",
        icon: "/teamMembers/neuyen.png",
        position: "Chief Executive Officer",
        yearJoined: "2015",
        country: "NL",
      },
      {
        name: "Tia",
        icon: "/teamMembers/tia.png",
        position: "HR Specialist",
        yearJoined: "2015",
        country: "NL",
      },
    ],
  },
  FaqSection: {
    title: "When we say we are design and tech,",
    titleHighlight: " it’s about taking responsibility.",
    faqItems: [
      {
        faqQuestion:
          "What about hosting, Do I have to host my website with you?",
        faqAnswer:
          "If you already have a hosting provider in mind or currently have a hosting plan in place, we can design and develop the website to be compatible with your chosen hosting environment. Our goal is to ensure that your website functions seamlessly regardless of the hosting provider you select.",
      },
      {
        faqQuestion: "Do you do graphics design and Can you make me a logo?",
        faqAnswer:
          "Yes, we offer professional graphic design services, including logo design. Our team of skilled designers specializes in creating unique and impactful logos that represent your brand identity effectively. We understand the importance of a well-designed logo in making a lasting impression on your target audience. From conceptualization to the final product, we work closely with you to understand your vision, values, and target market.",
      },
      {
        faqQuestion: "SEO Are your websites SEO friendly?",
        faqAnswer:
          "Absolutely! Ensuring that our websites are SEO-friendly is a top priority for us. We understand the importance of search engine optimization (SEO) in driving organic traffic to your website and improving your online visibility. Our team of web developers and designers follows best practices and implements SEO-friendly elements throughout the website development process.",
      },
      {
        faqQuestion: "How long will it take to get to the 1st page of Google?",
        faqAnswer:
          "The time it takes to reach the first page of Google’s search results can vary significantly depending on several factors. It’s important to understand that achieving a high ranking on the first page is a complex and ongoing process that requires strategic efforts and continuous optimization. ",
      },
      {
        faqQuestion:
          "Actually, I know nothing about websites. How does this website process work?",
        faqAnswer:
          "We begin by understanding your goals, target audience, and specific requirements. We conduct a thorough analysis of your industry and competitors to identify opportunities for differentiation. This stage involves discussions, brainstorming, and gathering all the necessary information.",
      },
      {
        faqQuestion: "How long does it take to build a website?",
        faqAnswer:
          "The time it takes to build a website can vary depending on several factors, such as the complexity of the project, the size of the website, the specific features and functionality required, and the responsiveness of all parties involved in the process. <br /> <br /> For a simple informational website with standard features, the development timeline can range from a few weeks to a couple of months. This timeframe includes various stages, such as initial planning, design, development, content creation, and testing.",
      },
      {
        faqQuestion: "How long will it take to get to the 1st page of Google?",
        faqAnswer:
          "The time it takes to reach the first page of Google’s search results can vary significantly depending on several factors. It’s important to understand that achieving a high ranking on the first page is a complex and ongoing process that requires strategic efforts and continuous optimization. ",
      },
      {
        faqQuestion:
          "Actually, I know nothing about websites. How does this website process work?",
        faqAnswer:
          "We begin by understanding your goals, target audience, and specific requirements. We conduct a thorough analysis of your industry and competitors to identify opportunities for differentiation. This stage involves discussions, brainstorming, and gathering all the necessary information.",
      },
    ],
  },
};

export default function AboutUs({ location }) {
  const AboutImages = useStaticQuery(graphql`
    query AboutImages {
      team: file(relativePath: { eq: "images/about/team.png" }) {
        childImageSharp {
          gatsbyImageData(
            webpOptions: { quality: 100 }
            blurredOptions: { toFormat: WEBP }
          )
        }
      }
      faq: file(relativePath: { eq: "images/about/about-image.png" }) {
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
    <Layout location={location} includeFooter={AboutData.IncludeFooter}>
      <div className="bg-primary flex items-center flex-col">
        <div className="h-40 p-16 text-lg">{AboutData.PageName}</div>
        <div className="grid grid-cols-12 gap-4 px-10 w-full">
          <div className="bg-black p-[50px] col-span-4 flex rounded-3xl">
            <h1
              className={`text-${AboutData.HeroText.textOne.color} text-[42px] leading-none tracking-normal`}
            >
              <span
                className={`text-${AboutData.HeroText.textOne.color} text-[42px] leading-none after:content-[''] after:mx-2 after:bg-[url("/about-text.png")] after:w-[100px] after:h-[38px] after:inline-block after:align-middle`}
              >
                {AboutData.HeroText.textOne.content}
              </span>
              <span
                className={`text-${AboutData.HeroText.textTwo.color} text-[42px] leading-none`}
              >
                {AboutData.HeroText.textTwo.content}
              </span>
              <span
                className={`text-[${AboutData.HeroText.textThree.color}] text-[42px] leading-none`}
              >
                {AboutData.HeroText.textThree.content}
              </span>
            </h1>
          </div>
          <KeyNumbers
            title={AboutData.KeyNumbers.title}
            titleHighlight={AboutData.KeyNumbers.titleHighlight}
            numberItems={AboutData.KeyNumbers.numbers}
          />
          <KeyValues
            valuesItems={AboutData.KeyValues.items}
            images={AboutImages}
          />
          <Team
            title={AboutData.Team.title}
            titleHighlight={AboutData.Team.titleHighlight}
            members={AboutData.Team.members}
          />
          <FaqComponent
            faqItems={AboutData.FaqSection.faqItems}
            faqTitle={AboutData.FaqSection.title}
            faqTitleHighlight={AboutData.FaqSection.titleHighlight}
            imageName="faq"
            images={AboutImages}
          />
        </div>
      </div>
    </Layout>
  );
}
