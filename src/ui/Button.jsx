import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, href, as: Component = "a", ...props }) => {
  return (
    <Component
      href={href}
      to={href}
      className="block self-center text-center px-4 py-2 rounded-lg transition-all duration-300 w-40 mx-auto text-sm sm:text-base bg-blue-600 text-white dark:hover:text-black hover:bg-black dark:hover:bg-white hover:scale-105 focus:outline-none"
      {...props}
    >
      {text}
    </Component>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default Button;
