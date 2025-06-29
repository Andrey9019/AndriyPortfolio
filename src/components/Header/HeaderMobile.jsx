import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaGripLines, FaGripLinesVertical } from "react-icons/fa";
import ThemeSwitcher from "/ui/ThemeSwitcher";
import SvgFilter from "/ui/SvgFilter";

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
      <SvgFilter />
      <header
        style={{ backdropFilter: "url(#svgfilter)" }}
        className="fixed z-10 flex items-center justify-between w-full px-8 py-4 text-black transition-colors duration-300 bg-white/70 shadow-md dark:bg-[#252526] dark:text-white md:hidden"
      >
        <ThemeSwitcher />
        <button
          onClick={toggleMenu}
          className="text-2xl text-gray-900 focus:outline-none dark:text-white"
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
          className="absolute text-2xl text-gray-900 top-4 right-8 dark:text-white focus:outline-none"
        >
          <div>
            <FaGripLinesVertical />
          </div>
        </button>
        <ul className="flex flex-col items-start gap-6 p-6 mt-12">
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
          className="fixed inset-0 z-10 bg-black bg-opacity-50"
          onClick={closeMenu}
        ></div>
      )}
    </>
  );
};
