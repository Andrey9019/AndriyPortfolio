import React from "react";
import ProjectCard from "/components/ProjectsPage/ProjectCard";
import Button from "/ui/Button";

import { allProjects } from "../data/projectData";

export const AboutProjects = () => {
  return (
    <section
      id="projects"
      className="container mx-auto flex flex-col justify-center"
    >
      <div className="w-full mb-20 text-left flex flex-col lg:flex-row lg:justify-evenly lg:items-center lg:gap-6">
        <div className="lg:w-[60%]">
          <h2 className="text-blue-600 text-4xl sm:text-5xl font-bold uppercase mb-2">
            Portfolio
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-100">
            A gallery of my projects. I made them myself and together with my
            friends. Do you want to see more?
          </p>
        </div>
        <div className="mt-4 ">
          <Button text="All projects" href="/projects" />
        </div>
      </div>

      <div className="flex justify-center text-xl sm:text-7xl lg:text-9xl space-x-4">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.slice(0, 4).map((project, index) => (
            <li key={index}>
              <ProjectCard projectContent={project} />{" "}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutProjects;
