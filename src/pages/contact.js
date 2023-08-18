import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/Layout";
import ContactForm from "../components/ContactForm";

const ContactData = {
  PageName: "Contact",
  IncludeFooter: true,
  HeroText: {
    type: "text",
    textOne: {
      color: "white",
      content:
        "Take the first step by filling out our project form below, and someone from our team  ",
    },
    textThree: {
      color: "#a5a5a5",
      content: " will reach back to you within two business days.",
    },
  },
  ContactForm: {
    typesTitle: "Ik wil",
    types: [
      {
        typeName: "project",
        typeLabel: "Een project starten",
        inputsRows: [
          {
            rowNumber: "1",
            inputs: [
              {
                label: "Mijn naam is",
                type: "text",
                placeholder: "je naam*",
                id: "name",
                required: true,
              },
              {
                label: "van",
                type: "text",
                placeholder: "bedrijfsnaam",
                id: "",
                required: false,
              },
            ],
          },
          {
            rowNumber: "2",
            inputs: [
              {
                label: "I’m interested in:",
                type: "options-check",
                placeholder: "",
                id: "",
                required: false,
                options: [
                  "Webdesign",
                  "Digital design",
                  "Prototyping & Testing",
                  "Growth Strategy",
                  "Technical SEO",
                  "UX Research",
                  "Frontend Development",
                  "Motion Design",
                  "Ecommerce Development",
                  "User Testing",
                  "GatsbyJS Development",
                ],
              },
            ],
          },
          {
            rowNumber: "3",
            inputs: [
              {
                label: "I would like to share more about my project:",
                type: "textarea",
                placeholder: "type project details*",
                id: "",
                required: true,
                height: "h-64",
                rows: 5,
              },
            ],
          },
          {
            rowNumber: "4",
            inputs: [
              {
                label: "A budget for this project is",
                type: "range",
                rangeMax: "5",
                rangeMin: "100",
                id: "budget",
                required: true,
              },
            ],
          },
          {
            rowNumber: "5",
            inputs: [
              {
                label: "Get back in touch with me at",
                type: "email",
                placeholder: "your email*",
                id: "",
                required: true,
              },
              {
                label: "Start Journey",
                type: "submit",
                iconType: "rocket",
              },
            ],
          },
        ],
      },
      {
        typeName: "contact-question",
        typeLabel: "Een vraag stellen",
        inputsRows: [
          {
            rowNumber: "1",
            inputs: [
              {
                label: "Mijn naam is",
                type: "text",
                placeholder: "je naam*",
                id: "name",
                required: true,
              },
              {
                label: "van",
                type: "text",
                placeholder: "bedrijfsnaam",
                id: "",
                required: false,
              },
            ],
          },
          {
            rowNumber: "2",
            inputs: [
              {
                label: "I would like to share more about my project:",
                type: "textarea",
                placeholder: "type project details*",
                id: "",
                required: true,
                height: "h-128",
                rows: 7,
              },
            ],
          },
          {
            rowNumber: "3",
            inputs: [
              {
                label: "Get back in touch with me at",
                type: "email",
                placeholder: "your email*",
                id: "",
                required: true,
              },
              {
                label: "Start Journey",
                type: "submit",
                iconType: "rocket",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default function ContacttUs({ location }) {
  return (
    <Layout location={location} includeFooter={ContactData.IncludeFooter}>
      <div className="bg-primary flex items-center flex-col">
        <div className="h-40 p-16 text-lg">{ContactData.PageName}</div>
        <div className="grid grid-cols-12 gap-4 px-10 w-full">
          <div className="bg-black p-[50px] col-span-4 flex rounded-3xl">
            <h1
              className={`text-${ContactData.HeroText.textOne.color} text-[42px] leading-none tracking-normal`}
            >
              <span
                className={`text-${ContactData.HeroText.textOne.color} text-[42px] leading-none after:content-[''] after:mx-2 after:bg-[url("/contact-text.png")] after:w-[100px] after:h-[38px] after:inline-block after:align-middle`}
              >
                {ContactData.HeroText.textOne.content}
              </span>
              <span
                className={`text-[${ContactData.HeroText.textThree.color}] text-[42px] leading-none`}
              >
                {ContactData.HeroText.textThree.content}
              </span>
            </h1>
          </div>
          <ContactForm
            types={ContactData.ContactForm.types}
            typesTitle={ContactData.ContactForm.typesTitle}
          />
        </div>
      </div>
    </Layout>
  );
}
