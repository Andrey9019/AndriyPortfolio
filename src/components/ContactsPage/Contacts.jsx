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
        className="flex flex-col justify-center mx-auto contact-container"
      >
        <div className="justify-start w-full mb-20 text-left sm:w-2/3 lg:w-1/2 lg:mb-48">
          <h2 className="mb-2 text-4xl font-bold text-blue-600 uppercase sm:text-5xl">
            {t("contact.title")}
          </h2>
          <p className="text-xl text-gray-600 sm:text-2xl dark:text-gray-100">
            {t("contact.text")}
          </p>
        </div>
        <div className="flex flex-wrap justify-center text-7xl lg:text-9xl">
          <a
            href="mailto:zirchenko.andrii@gmail.com"
            className="px-4 py-2 text-blue-600 transition duration-300 hover:text-black dark:hover:text-gray-100"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/andrey-zirchenko/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-blue-600 transition duration-300 hover:text-black dark:hover:text-gray-100"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://t.me/andrey_zirchenko"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-blue-600 transition duration-300 hover:text-black dark:hover:text-gray-100"
          >
            <FaTelegram />
          </a>
          <a
            href="https://github.com/Andrey9019"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-blue-600 transition duration-300 hover:text-black dark:hover:text-gray-100"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/zirchenko.a/profilecard/?igsh=MXV0bjYxNmV4a2Q0Nw=="
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-blue-600 transition duration-300 hover:text-black dark:hover:text-gray-100"
          >
            <FaInstagram />
          </a>
        </div>
        <BackgroundDetails />
      </section>
    </>
  );
};
