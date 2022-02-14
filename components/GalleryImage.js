import React, { useState } from "react";
import { Image, Col, Container } from "react-bootstrap";
import ImageCarousel from "./ImageCarousel";

function GalleryImage({ images }) {
  const [carousel, setCarousel] = useState(false);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    console.log(selectedIndex);
    setIndex(selectedIndex);
    setCarousel(true);
  };
  return (
    <>
      {!carousel ? (
        <>
          {images.map((image, i) => {
            return (
              <Col md={6} sm={12} key={image.id}>
                <div className="gallery__img-cont d-flex justify-content-center">
                  <Image
                    fluid
                    src={image.url}
                    alt={image.alt}
                    className="gallery__img-thumb"
                    onClick={() => handleSelect(i)}
                  />
                </div>
              </Col>
            );
          })}
        </>
      ) : (
        <Container className="carousel_cont d-flex justify-content-center">
          <ImageCarousel selectedIndex={index} images={images} />
        </Container>
      )}
    </>
  );
}

export default GalleryImage;
