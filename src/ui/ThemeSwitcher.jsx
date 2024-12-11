import React from "react";
import { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      const isDark = savedTheme === "dark";
      setDarkMode(isDark);
      document.documentElement.classList.toggle("dark", isDark);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkMode(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  return (
    <div
      onClick={toggleTheme}
      className={`flex items-center w-14 p-0.5 pr-[3px] border rounded-2xl cursor-pointer ${
        darkMode ? "border-white " : "border-black "
      }`}
    >
      <button className={`${darkMode ? "ml-auto" : ""}`}>
        {darkMode ? (
          <FaSun className="text-2xl text-yellow-500 transition-opacity duration-300 opacity-100" />
        ) : (
          <FaMoon className="text-2xl text-blue-500 transition-opacity duration-300 opacity-100" />
        )}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
