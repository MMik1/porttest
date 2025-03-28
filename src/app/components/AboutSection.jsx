"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
          <li>Node.js</li>
          <li>PHPAdmin</li>
          <li>Lua</li>
          <li>JavaScript</li>
          <li>Html & Css</li>
        </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>SintLucas Software developer</li>
      </ul>
    ),
  },
  {
    title: "Certificaten",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Code dojo</li>
        <li>Scratch Certificaat</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Informatie</h2>
          <p className="text-base lg:text-lg">
          Ik ben een full-stack webontwikkelaar met een passie voor creëren
            interactieve en responsieve webapplicaties. ik heb ervaring
            werken met JavaScript, HTML & CSS ,Node.js, Lua, PHPadmin,
            , HTML, CSS en Git. Ik leer snel en dat ben ik altijd gebleven
            Ik wil mijn kennis en vaardigheden uitbreiden. Ik ben een teamspeler en
            Ik vind het geweldig om samen met anderen geweldige applicaties te creëren.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Studie{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certificaten{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
