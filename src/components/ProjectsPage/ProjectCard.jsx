import { ImageWithFade } from "/ui/ImageWithFade";
import React, { useState } from "react";

import { useTranslation } from "react-i18next";

export const ProjectCard = ({ projectContent }) => {
  const [hover, setHover] = useState(false);

  const { i18n } = useTranslation();

  const translation =
    projectContent.translations[i18n.language] ||
    projectContent.translations.en;

  return (
    <a
      href={projectContent.links[0]}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full h-full py-2 no-underline transition-colors duration-200 rounded"
    >
      <div
        className="relative flex flex-col p-4 mx-auto overflow-hidden transition-all duration-300 ease-in-out bg-white rounded-lg shadow-md dark:bg-gray-200"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="w-full text-center transition-transform duration-300 ease-in-out rounded-lg">
          <ImageWithFade
            src={projectContent.image.mobileSrc}
            srcSet={`${projectContent.image.mobileSrc} 500w, ${projectContent.image.desktopSrc} 1000w`}
            sizes="(max-width: 768px) 500px, 1000px"
            alt={`Screenshot of the ${projectContent.heading} project`}
            className="rounded-lg"
          />
        </div>

        <h4 className="hidden mt-4 text-2xl font-bold text-center text-blue-600 md:block ">
          {projectContent.heading}
        </h4>

        <div className="block mt-4 text-center md:hidden">
          <h4 className="mb-2 text-2xl font-bold text-blue-600">
            {projectContent.heading}
          </h4>
          <p className="mb-2 text-lg text-gray-70">{translation.description}</p>
        </div>

        <div
          className={`overflow-y-auto scrollbar-hidden hidden md:flex flex-col justify-between absolute inset-0 bg-white bg-opacity-90 p-4 transition-opacity duration-300 ease-in-out ${
            hover ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="mb-2 text-2xl font-bold text-center text-blue-600">
            {projectContent.heading}
          </p>
          <p className="mb-1 text-xl">{translation.description}</p>
          <div className="flex space-x-4 text-[#333333] text-4xl font-bold">
            {projectContent.skills.map((Icon, index) => (
              <Icon key={index} />
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
