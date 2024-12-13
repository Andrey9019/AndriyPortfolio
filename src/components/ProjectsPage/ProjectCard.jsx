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
      className="py-2 rounded transition-colors no-underline w-full h-full duration-200"
    >
      <div
        className="relative flex flex-col mx-auto bg-white dark:bg-gray-200 shadow-md rounded-lg overflow-hidden p-4 transition-all ease-in-out duration-300"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="w-full rounded-lg transition-transform duration-300 ease-in-out text-center">
          <ImageWithFade
            src={projectContent.image.mobileSrc}
            srcSet={`${projectContent.image.mobileSrc} 500w, ${projectContent.image.desktopSrc} 1000w`}
            sizes="(max-width: 768px) 500px, 1000px"
            alt={`Screenshot of the ${projectContent.heading} project`}
            className="rounded-lg"
          />
        </div>

        <h4 className="hidden md:block text-center mt-4 text-blue-600 text-2xl font-bold ">
          {projectContent.heading}
        </h4>

        <div className="block md:hidden text-center mt-4">
          <h4 className="text-blue-600 text-2xl font-bold mb-2">
            {projectContent.heading}
          </h4>
          <p className="text-gray-70 text-lg mb-2">{translation.description}</p>
        </div>

        <div
          className={`overflow-y-auto scrollbar-hidden hidden md:flex flex-col justify-between absolute inset-0 bg-white bg-opacity-90 p-4 transition-opacity duration-300 ease-in-out ${
            hover ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-center text-blue-600 text-2xl font-bold mb-2">
            {projectContent.heading}
          </p>
          <p className="text-xl mb-1">{translation.description}</p>
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
