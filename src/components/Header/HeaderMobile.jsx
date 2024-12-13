import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaGripLines, FaGripLinesVertical } from "react-icons/fa";
import ThemeSwitcher from "/ui/ThemeSwitcher";

import { useTranslation } from "react-i18next";
import LanguageSwitcher from "/ui/LanguageSwitcher";

export const HeaderMobile = () => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <header className="fixed w-full bg-white dark:bg-black text-black dark:text-white shadow-md py-4 px-8 z-10 transition-colors duration-300 md:hidden flex justify-between items-center">
        <ThemeSwitcher />
        <button
          onClick={toggleMenu}
          className="text-2xl focus:outline-none text-gray-900 dark:text-white"
        >
          <FaGripLines />
        </button>
      </header>
      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-white dark:bg-black text-black dark:text-white shadow-lg z-20 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeMenu}
          className="absolute top-4 right-8 text-2xl text-gray-900 dark:text-white focus:outline-none"
        >
          <div>
            <FaGripLinesVertical />
          </div>
        </button>
        <ul className="flex flex-col items-start p-6 gap-6 mt-12">
          <li>
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-lg font-bold text-blue-600"
                  : "text-lg font-medium text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-300"
              }
            >
              {t("header.about_nav")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-lg font-bold text-blue-600"
                  : "text-lg font-medium text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-300"
              }
            >
              {t("header.projects_nav")}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacts"
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-lg font-bold text-blue-600"
                  : "text-lg font-medium text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-300"
              }
            >
              {t("header.contacts_nav")}
            </NavLink>
          </li>
          <LanguageSwitcher />
        </ul>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={closeMenu}
        ></div>
      )}
    </>
  );
};
