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
      mobileSrc: "/images/laptop_tastyTreats@1x.jpg",
      desktopSrc: "/images/laptop_taskPro@2x.webp",
    },
    heading: "Task Pro",
    skills: [FaReact, SiTypescript, SiTailwindcss, SiVite, SiRedux],
    links: ["https://taskpro.uk/"],
    translations: {
      en: {
        description:
          "This web app allows users to manage tasks efficiently, similar to popular task management tools like Trello. This was a team project.",
      },
      uk: {
        description:
          "Цей веб-додаток дозволяє користувачам ефективно керувати завданнями, подібно до популярних інструментів управління завданнями, таких як Trello. Це мій командний проект.",
      },
    },
  },
  // 2
  {
    image: {
      mobileSrc: "/images/laptop_trendingMowie@1x.jpg",
      desktopSrc: "/images/laptop_trendingMowie@2x.webp",
    },
    heading: "Trending movies",
    skills: [FaReact, FaJsSquare, FaHtml5, FaCss3Alt, SiReactrouter, SiAxios],
    description: "This website is your guide to the world of cinema.",
    links: ["https://andrey9019.github.io/goit-react-hw-05-movies/"],
    translations: {
      en: {
        description: "This website is your guide to the world of cinema.",
      },
      uk: {
        description: "Цей сайт - ваш путівник у світ кіно.",
      },
    },
  },
  // 3
  {
    image: {
      mobileSrc: "/images/laptop_yacht@1x.jpg",
      desktopSrc: "/images/laptop_yacht@1x.jpg",
    },
    heading: "Yacht Adventures",
    skills: [FaReact, SiVite, FaJsSquare, SiTailwindcss],
    links: ["https://andrey9019.github.io/yacht-adventures/"],
    translations: {
      en: {
        description:
          "The site was created to make the process of choosing and renting a yacht as simple and convenient as possible for the user.",
      },
      uk: {
        description:
          "Сайт створений для того, щоб зробити процес вибору і оренди яхти максимально простим і зручним для користувача.",
      },
    },
  },

  // 4
  {
    image: {
      mobileSrc: "/images/laptop_tastyTreats@1x.jpg",
      desktopSrc: "/images/laptop_tastyTreats@2x.webp",
    },
    heading: "Tasty Treats",
    skills: [FaHtml5, FaCss3Alt, FaJsSquare, SiVite, SiAxios],
    links: [
      "https://valeriia-trytiak.github.io/project_01_Taste_Masters_Team/",
    ],

    translations: {
      en: {
        description:
          "TastyTreats is a handy tool for those who want to find ideas for dishes and see how to cook them, all with ease and convenience.",
      },
      uk: {
        description:
          "TastyTreats - це зручний інструмент для тих, хто хоче знайти ідеї для страв і подивитися, як їх приготувати, і все це з легкістю і зручністю.",
      },
    },
  },
  // 5
  {
    image: {
      mobileSrc: "/images/laptop_searchimages@1x.jpg",
      desktopSrc: "/images/laptop_searchimages@2x.webp",
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
    links: ["https://andrey9019.github.io/goit-js-hw-11/"],
    translations: {
      en: {
        description:
          "This site is an interface for searching for images using keywords.",
      },
      uk: {
        description:
          "Цей сайт - інтерфейс для пошуку зображень за допомогою ключових слів.",
      },
    },
  },
  // 6
  {
    image: {
      mobileSrc: "/images/laptop_barbershop@1x.jpg",
      desktopSrc: "/images/laptop_barbershop@2x.webp",
    },
    heading: "Barbershop",
    skills: [FaHtml5, FaCss3Alt, FaJsSquare],
    links: ["https://andrey9019.github.io/Website-for-Barbershop/"],
    translations: {
      en: {
        description:
          "On the website, clients book appointments online, find information quickly, and schedule their visit.",
      },
      uk: {
        description:
          "На сайті клієнти записуються онлайн, швидко знаходять інформацію, і планують свій візит.",
      },
    },
  },
];
