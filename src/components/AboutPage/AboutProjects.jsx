import React from "react";
import ProjectCard from "/components/ProjectsPage/ProjectCard";
import Button from "/ui/Button";

import { allProjects } from "../data/projectData";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const AboutProjects = () => {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="container flex flex-col justify-center mx-auto"
    >
      <div className="flex flex-col w-full mb-20 text-left lg:flex-row lg:justify-evenly lg:items-center lg:gap-6">
        <div className="lg:w-[60%]">
          <h2 className="mb-2 text-4xl font-bold text-blue-600 uppercase sm:text-5xl">
            {t("about.portfolio")}
          </h2>
          <p className="text-xl text-gray-600 sm:text-2xl dark:text-gray-100">
            {t("about.projects_title")}
          </p>
        </div>
        <div className="mt-4 ">
          <Button
            text={t("about.projects_button")}
            href="/projects"
            as={Link}
          />
        </div>
      </div>

      <div className="flex justify-center space-x-4 text-xl sm:text-7xl lg:text-9xl">
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {allProjects.slice(0, 4).map((project, index) => (
            <li key={index}>
              <ProjectCard projectContent={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutProjects;
