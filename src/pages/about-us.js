import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/Layout";
import KeyNumbers from "../components/KeyNumbers";

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
        text: "We are not a lorem-ipsum agency that worries about text and images later. Content must always drive design.",
      },
      {
        text: "When you ask us to do something we’ll often challenge you on it. Digging deeper into a problem makes for a better result.",
      },
      {
        text: "Our best work is done when we start with strategy. It’s not rocket science, it’s just a plan.",
      },
      {
        text: "Building a great agency means building the best team. We pride ourselves on the calibre of our people and the work they’ve done.",
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
        icon: "",
        position: "Brand Design Team Lead",
        yearJoined: "2015",
        brand: "NL",
      },
      {
        name: "Jadyn",
        icon: "",
        position: "Senior Product Designer",
        yearJoined: "2015",
        brand: "NL",
      },
      {
        name: "Claudio",
        icon: "",
        position: "React Developer",
        yearJoined: "2015",
        brand: "NL",
      },
      {
        name: "Maid",
        icon: "",
        position: "Founder",
        yearJoined: "2015",
        brand: "NL",
      },
      {
        name: "Petar",
        icon: "",
        position: "UX Researcher",
        yearJoined: "2015",
        brand: "NL",
      },
      {
        name: "Pourya",
        icon: "",
        position: "Senior Brand Designer",
        yearJoined: "2015",
        brand: "NL",
      },
      {
        name: "Neuyen",
        icon: "",
        position: "Chief Executive Officer",
        yearJoined: "2015",
        brand: "NL",
      },
      {
        name: "Tia",
        icon: "",
        position: "HR Specialist",
        yearJoined: "2015",
        brand: "NL",
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
        faqAnswer: "What about hosting, Do I have to host my website with you?",
      },
      {
        faqQuestion: "Do you do graphics design and Can you make me a logo?",
        faqAnswer: "Do you do graphics design and Can you make me a logo?",
      },
      {
        faqQuestion: "SEO Are your websites SEO friendly?",
        faqAnswer: "SEO Are your websites SEO friendly?",
      },
      {
        faqQuestion: "How long will it take to get to the 1st page of Google?",
        faqAnswer: "How long will it take to get to the 1st page of Google?",
      },
      {
        faqQuestion:
          "Actually, I know nothing about websites. How does this website process work?",
        faqAnswer:
          "Actually, I know nothing about websites. How does this website process work?",
      },
      {
        faqQuestion: "How long does it take to build a website?",
        faqAnswer: "How long does it take to build a website?",
      },
      {
        faqQuestion: "How long will it take to get to the 1st page of Google?",
        faqAnswer: "How long will it take to get to the 1st page of Google?",
      },
      {
        faqQuestion:
          "Actually, I know nothing about websites. How does this website process work?",
        faqAnswer:
          "Actually, I know nothing about websites. How does this website process work?",
      },
    ],
  },
};

export default function AboutUs({ location }) {
  return (
    <Layout location={location} includeFooter={AboutData.IncludeFooter}>
      <div className="bg-primary flex items-center flex-col">
        <div className="h-40 p-16 text-lg">{AboutData.PageName}</div>
        <div className="flex flex-wrap px-10 gap-[20px] w-full">
          <div className="bg-black p-[50px] w-1/3 flex rounded-3xl">
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
        </div>
      </div>
    </Layout>
  );
}
