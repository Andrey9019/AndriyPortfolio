import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiAxios,
  SiStyledcomponents,
  SiTypescript,
  SiVite,
  SiTailwindcss,
  SiRedux,
  SiPrisma,
  SiRadixui,
} from "react-icons/si";

export const allProjects = [
  // 1
  {
    image: {
      mobileSrc: "/images/laptop_cardboard@1x.jpg",
      desktopSrc: "/images/laptop_cardboard@2x.webp",
    },
    heading: "Card&Board",
    skills: [
      TbBrandNextjs,
      SiTypescript,
      SiTailwindcss,
      SiPrisma,
      SiRadixui,
      SiAxios,
    ],
    links: ["https://card-board.vercel.app/"],
    translations: {
      en: {
        description:
          "Online board games store with a catalog, filters, shopping cart, checkout, and responsive design. ",
      },
      uk: {
        description:
          "Інтернет-магазин настільних ігор з каталогом, фільтрами, кошиком, оформленням замовлення та адаптивним дизайном.",
      },
    },
  },
  // 2
  {
    image: {
      mobileSrc: "/images/laptop_tastyTreats@1x.jpg",
      desktopSrc: "/images/laptop_taskPro@2x.webp",
    },
    heading: "Task Pro",
    skills: [FaReact, SiTypescript, SiTailwindcss, SiVite, SiRedux],
    links: ["https://www.taskpro.online/"],

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
  // 3
  {
    image: {
      mobileSrc: "/images/laptop_trendingMowie@1x.jpg",
      desktopSrc: "/images/laptop_trendingMowie@2x.webp",
    },
    heading: "Trending movies",
    skills: [TbBrandNextjs, SiVite, SiTypescript, SiTailwindcss],
    description: "This website is your guide to the world of cinema.",
    links: ["https://goit-react-hw-05-movies-five.vercel.app/"],
    translations: {
      en: {
        description: "This website is your guide to the world of cinema.",
      },
      uk: {
        description: "Цей сайт - ваш путівник у світ кіно.",
      },
    },
  },
  // 4
  {
    image: {
      mobileSrc: "/images/laptop_nanny@1x.jpg",
      desktopSrc: "/images/laptop_nanny@2x.webp",
    },
    heading: "Nanny Services",
    skills: [FaReact, SiVite, FaJsSquare, IoLogoFirebase, SiTailwindcss],
    links: ["https://andrey9019.github.io/nannies-app/"],
    translations: {
      en: {
        description:
          "It is a user-friendly nanny search platform with a set of filters. It's perfect for parents looking for a nanny that fits their needs.",
      },
      uk: {
        description:
          "Це зручна платформа для пошуку нянь з набором фільтрів. Ідеально підходить для батьків, які шукають няню, відповідну їхнім потребам.",
      },
    },
  },

  // 5
  {
    image: {
      mobileSrc: "/images/laptop_yacht@1x.jpg",
      desktopSrc: "/images/laptop_yacht@2x.webp",
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

  // 6
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
  // 7
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
  // 8
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
