import React from 'react';
import ProjectCard from './ProjectCard';
import { allProjects } from '../data/projectData';
import { Wave } from '../../ui/Wave';

export const Projects = () => {
  return (
    <>
      <Wave />
      <section
        id="projects"
        className="projects-container mx-auto flex flex-col justify-center "
      >
        <div className="w-full sm:w-2/3 lg:w-1/2 mb-20  text-left  justify-start">
          <h2 className="text-blue-600 text-4xl sm:text-5xl font-bold uppercase mb-2">
            Projects
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-100">
            All my projects are collected here
          </p>
        </div>
        <div className="flex justify-center text-xl sm:text-7xl lg:text-9xl space-x-4">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <li key={index}>
                <ProjectCard projectContent={project} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Projects;
