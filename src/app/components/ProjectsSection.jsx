"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Zaandijk Website",
    description: "Dit is een Fivem website gemaakt voor Shine",
    image: "/images/projects/1.jpg",
    tag: ["Web"],
    gitUrl: "https://github.com/MMik1/Zaandijkrp-website",
    previewUrl: "https://mmik1.github.io/Zaandijkrp-website/",
  },
  {
    id: 2,
    title: "Point and Click Game",
    description: "Website en game in een",
    image: "/images/projects/2.png",
    tag: ["Web"],
    gitUrl: "https://github.com/MMik1/PointClickwebgame",
    previewUrl: "",
  },
  {
    id: 3,
    title: "Unity ShooterGame",
    description: "Ik maakte een schiet game in Unity ",
    image: "/images/projects/3.png",
    tag: ["Gaming"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Persona",
    description: "Deze website verteld veel over mijn hobbys en mij zelf.",
    image: "/images/projects/4.png",
    tag: ["Web"],
    gitUrl: "https://github.com/MMik1/Persona",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
       Mijn Projecten
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Gaming"
          isSelected={tag === "Gaming"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
