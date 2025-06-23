import React from "react";
import { placeholderImage } from "../../constants/images";

export default function Image({ src, alt, className }) {
  const handleImageError = (event) => {
    event.target.src = placeholderImage;
  };

  return (
    <img src={src} alt={alt} className={className} onError={handleImageError} />
  );
}
