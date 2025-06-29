export const Wave = () => {
  return (
    <div className="wave mt-[56px] md:mt-[60px]">
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="0"
            className="transition-colors duration-300 dark:fill-gray-800 fill-gray-300"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
            className="transition-colors duration-300 dark:fill-gray-700 fill-gray-200"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="5"
            className="transition-colors duration-300 dark:fill-gray-600 fill-gray-100"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="7"
            className="dark:fill-[#252526] fill-white transition-colors duration-300"
          />
        </g>
      </svg>
    </div>
  );
};
