import React from "react";
import { NavLink } from "react-router-dom";
import SvgFilter from "/ui/SvgFilter";
import ThemeSwitcher from "/ui/ThemeSwitcher";
import LanguageSwitcher from "/ui/LanguageSwitcher";

import { useTranslation } from "react-i18next";

export const HeaderDesktop = () => {
  const { t } = useTranslation();

  return (
    <>
      <header
        className="fixed z-10 hidden  w-full px-8 py-4 text-black transition-colors duration-300 bg-white/70 shadow-md dark:bg-[#252526]/80 dark:text-white md:flex"
        style={{ backdropFilter: "url(#svgfilter)" }}
      >
        <div className="flex items-center justify-between w-full gap-8 header">
          <ThemeSwitcher />
          <ul className="flex gap-8">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-lg font-bold text-blue-600 "
                    : "text-lg font-medium text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-300"
                }
              >
                {t("header.about_nav")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
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
                className={({ isActive }) =>
                  isActive
                    ? "text-lg font-bold text-blue-600"
                    : "text-lg font-medium text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-300"
                }
              >
                {t("header.contacts_nav")}
              </NavLink>
            </li>
          </ul>
          <LanguageSwitcher />
        </div>
      </header>
      <SvgFilter />
    </>
  );
};
