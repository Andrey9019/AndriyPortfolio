import React from "react";
import Button from "/ui/Button";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 about-container lg:py-24">
      <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="flex justify-center lg:justify-end">
          <div className="w-48 h-48  sm:w-56 sm:h-56 lg:w-72 lg:h-72">
            <img
              src="/images/portfolioPhoto/face@2x.webp"
              alt="my face"
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col text-center lg:text-left">
          <h2 className="mb-4 text-3xl font-bold text-blue-600 sm:text-4xl">
            {t("about.name")}
          </h2>
          <p className="mb-6 text-base text-gray-600 sm:text-lg lg:text-xl dark:text-gray-100">
            {t("about.title")}
          </p>
          <div className="flex justify-center lg:justify-start">
            <ul className="flex space-x-4">
              <li>
                <Button
                  text={t("about.talk_button")}
                  href="/contacts"
                  as={Link}
                />
              </li>
              {/* <li>Placeholder for other links</li> */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
