import React from 'react';

export const BackgroundDetails = () => {
  return (
    <div className="relative w-full h-full">
      <svg
        className="absolute top-0 left-0 animate-float"
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="50" fill="rgba(0, 172, 193, 0.2)" />
      </svg>

      <svg
        className="absolute bottom-0 right-0 animate-float delay-2s"
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="50" fill="rgba(0, 172, 193, 0.2)" />
      </svg>

      <svg
        className="absolute bottom-[30vh] right-2 animate-float delay-2s"
        xmlns="http://www.w3.org/2000/svg"
        width="75"
        height="75"
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="50" fill="rgba(0, 172, 193, 0.2)" />
      </svg>
    </div>
  );
};
