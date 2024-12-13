import React from "react";
import Button from "/ui/Button";

import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="about-container py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center lg:justify-end">
          <div className="  w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 ">
            <img
              src="/images/portfolioPhoto/face@2x.webp"
              alt="my face"
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col text-center lg:text-left">
          <h2 className="text-3xl font-bold text-blue-600 mb-4 sm:text-4xl">
            {t("about.name")}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-100 mb-6">
            {t("about.title")}
          </p>
          <div className="flex justify-center lg:justify-start">
            <ul className="flex space-x-4">
              <li>
                <Button text={t("about.talk_button")} href="/contacts" />
              </li>
              {/* <li>Placeholder for other links</li> */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
