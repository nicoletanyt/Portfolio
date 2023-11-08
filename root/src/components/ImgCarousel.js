import React, { useState } from "react";

export default function ImgCarousel({ imageArr }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-wrapper">
      <div className="img-wrapper">
        <img src={imageArr[currentIndex]} alt="Carousel" />
      </div>
      <div className="indicator">
        {imageArr.map((_, index) => (
          <div
            key={index}
            className={index === currentIndex ? "dot active" : "dot"}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}
