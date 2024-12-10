import { FaEnvelope, FaLinkedin, FaTelegram, FaGithub } from 'react-icons/fa';

export const Footer = () => {
  return (
    <section
      id="footer"
      className="footer  flex flex-col items-center justify-center shadow-lg"
    >
      <h2 className="text-3xl sm:text-5xl mb-4">Contact Me</h2>
      <p className=" text-center mb-8 sm:text-2xl">by email or social media</p>
      <div className="flex text-4xl sm:text-6xl ">
        <a
          href="mailto:1234andrey5678@gmail.com"
          className=" hover:text-gray-400 transition duration-300 px-4 py-2"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/in/andrey-zirchenko/"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-gray-400 transition duration-300 px-4 py-2"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://t.me/andrey_zirchenko"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-gray-400 transition duration-300 px-4 py-2"
        >
          <FaTelegram />
        </a>
        <a
          href="https://github.com/Andrey9019"
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:text-gray-400 transition duration-300 px-4 py-2"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
};
