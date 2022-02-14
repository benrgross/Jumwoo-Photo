import React, { useState } from "react";
import { Carousel, Image } from "react-bootstrap";

function ImageCarousel({ images, selectedIndex }) {
  const [index, setIndex] = useState(selectedIndex);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      className="carousel-componet"
      activeIndex={index}
      onSelect={handleSelect}
    >
      {images.map((image, i) => {
        return (
          <Carousel.Item key={image.id}>
            <Image className="d-flex w-100" src={image.url} alt={image.alt} />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

export default ImageCarousel;
