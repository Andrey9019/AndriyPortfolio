import React from "react";
import { NavLink } from "react-router-dom";
import ThemeSwitcher from "/ui/ThemeSwitcher";

export const HeaderDesktop = () => {
  return (
    <header className="fixed w-full bg-white dark:bg-black text-black dark:text-white shadow-md py-4 px-8 z-10 transition-colors duration-300 hidden md:flex">
      <div className="header w-full flex items-center justify-between  gap-8">
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
              About me
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
              Projects
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
              Contacts
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};
