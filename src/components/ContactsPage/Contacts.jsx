import { Wave } from "../../ui/Wave";
import { BackgroundDetails } from "../../ui/BackgroundDetails";
import {
  FaEnvelope,
  FaLinkedin,
  FaTelegram,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

import { useTranslation } from "react-i18next";

export const Contacts = () => {
  const { t } = useTranslation();

  return (
    <>
      <Wave />
      <section
        id="contact"
        className="contact-container mx-auto flex flex-col justify-center"
      >
        <div className="w-full sm:w-2/3 lg:w-1/2 mb-20 lg:mb-48 text-left justify-start">
          <h2 className="text-4xl sm:text-5xl font-bold uppercase mb-2 text-blue-600">
            {t("contact.title")}
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-100">
            {t("contact.text")}
          </p>
        </div>
        <div className="flex flex-wrap justify-center text-7xl lg:text-9xl space-x-4">
          <a
            href="mailto:1234andrey5678@gmail.com"
            className="px-4 py-2 text-blue-600 hover:text-black dark:hover:text-gray-100  transition duration-300"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/andrey-zirchenko/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-blue-600 hover:text-black dark:hover:text-gray-100  transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://t.me/andrey_zirchenko"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-blue-600 hover:text-black dark:hover:text-gray-100  transition duration-300"
          >
            <FaTelegram />
          </a>
          <a
            href="https://github.com/Andrey9019"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-blue-600 hover:text-black dark:hover:text-gray-100  transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/zirchenko.a/profilecard/?igsh=MXV0bjYxNmV4a2Q0Nw=="
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-blue-600 hover:text-black dark:hover:text-gray-100  transition duration-300"
          >
            <FaInstagram />
          </a>
        </div>
        <BackgroundDetails />
      </section>
    </>
  );
};
