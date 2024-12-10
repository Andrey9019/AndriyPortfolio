import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiAxios,
  SiReactrouter,
  SiStyledcomponents,
  SiTypescript,
  SiVite,
  SiTailwindcss,
  SiRedux,
} from "react-icons/si";

export const allProjects = [
  // 1
  {
    image: {
      mobileSrc: "/img/projects/laptop_tastyTreats@1x.jpg",
      desktopSrc: "/img/projects/laptop_taskPro@2x.webp",
    },
    heading: "Task Pro",
    skills: [FaReact, SiTypescript, SiTailwindcss, SiVite, SiRedux],
    description: `This web app allows users to manage tasks efficiently, similar to popular task management tools like Trello. This was a team project.`,
    links: ["https://taskpro.uk/"],
  },
  // 2
  {
    image: {
      mobileSrc: "/img/projects/laptop_trendingMowie@1x.jpg",
      desktopSrc: "/img/projects/laptop_trendingMowie@2x.webp",
    },
    heading: "Trending movies",
    skills: [FaReact, FaJsSquare, FaHtml5, FaCss3Alt, SiReactrouter, SiAxios],
    description: "This website is your guide to the world of cinema.",
    links: ["https://andrey9019.github.io/goit-react-hw-05-movies/"],
  },
  // 3
  {
    image: {
      mobileSrc: "/img/projects/laptop_yacht@1x.jpg",
      desktopSrc: "/img/projects/laptop_yacht@1x.jpg",
    },
    heading: "Yacht Adventures",
    skills: [FaReact, SiVite, FaJsSquare, SiTailwindcss],
    description:
      "The site was created to make the process of choosing and renting a yacht as simple and convenient as possible for the user.",
    links: ["https://andrey9019.github.io/yacht-adventures/"],
  },

  // 4
  {
    image: {
      mobileSrc: "/img/projects/laptop_tastyTreats@1x.jpg",
      desktopSrc: "/img/projects/laptop_tastyTreats@2x.webp",
    },
    heading: "Tasty Treats",
    skills: [FaHtml5, FaCss3Alt, FaJsSquare, SiVite, SiAxios],
    description: `"TastyTreats is a handy tool for those who want to find ideas for dishes and see how to cook them, all with ease and convenience.`,
    links: [
      "https://valeriia-trytiak.github.io/project_01_Taste_Masters_Team/",
    ],
  },
  // 5
  {
    image: {
      mobileSrc: "/img/projects/laptop_searchimages@1x.jpg",
      desktopSrc: "/img/projects/laptop_searchimages@2x.webp",
    },
    heading: "Search Images",
    skills: [
      FaReact,
      FaJsSquare,
      FaHtml5,
      FaCss3Alt,
      SiStyledcomponents,
      SiAxios,
    ],
    description:
      "This site is an interface for searching for images using keywords.",
    links: ["https://andrey9019.github.io/goit-js-hw-11/"],
  },
  // 6
  {
    image: {
      mobileSrc: "/img/projects/laptop_barbershop@1x.jpg",
      desktopSrc: "/img/projects/laptop_barbershop@2x.webp",
    },
    heading: "Barbershop",
    skills: [FaHtml5, FaCss3Alt, FaJsSquare],
    description:
      "On the website, clients book appointments online, find information quickly, and schedule their visit.",
    links: ["https://andrey9019.github.io/Website-for-Barbershop/"],
  },
];
