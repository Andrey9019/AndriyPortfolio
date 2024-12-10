import React from "react";
import { useState } from "react";

export const ImageWithFade = ({ src, srcSet, sizes, alt, className }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      className={`transition-opacity duration-1000 ease-in-out ${
        loaded ? "opacity-100" : "opacity-0"
      } ${className}`}
      onLoad={() => setLoaded(true)}
    />
  );
};
