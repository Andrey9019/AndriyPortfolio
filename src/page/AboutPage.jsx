import { Header } from "../components/Header/Header";
import { About } from "../components/AboutPage/About";
import { AboutSkills } from "../components/AboutPage/AboutSkills";
import { AboutProjects } from "../components/AboutPage/AboutProjects";
import React from "react";

export const AboutPage = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <AboutSkills />
        <AboutProjects />
      </main>
    </>
  );
};