import React, { useState } from "react";
import { Image, Col, Container } from "react-bootstrap";
import { FaWindowClose } from "react-icons/fa";
import ImageCarousel from "./ImageCarousel";

function GalleryImage({ images }) {
  const [carousel, setCarousel] = useState(false);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    console.log(selectedIndex);
    setIndex(selectedIndex);
    setCarousel(true);
  };

  const closeCarousel = () => {
    setCarousel(false);
  };
  return (
    <>
      {!carousel ? (
        <>
          {images.map((image, i) => {
            return (
              <Col md={4} sm={12} key={image.id}>
                <div className="gallery__img-cont d-flex justify-content-center">
                  <Image
                    className="gallery__img shadow-sm"
                    fluid
                    src={image.url}
                    alt={image.alt}
                    onClick={() => handleSelect(i)}
                  />
                </div>
              </Col>
            );
          })}
        </>
      ) : (
        <Container className="carousel_cont d-flex justify-content-center">
          <a>
            {" "}
            <FaWindowClose
              size={30}
              className="closeIcon"
              onClick={() => closeCarousel()}
            />
          </a>
          <ImageCarousel selectedIndex={index} images={images} />
        </Container>
      )}
    </>
  );
}

export default GalleryImage;
