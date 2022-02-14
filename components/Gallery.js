import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import GalleryImage from "./GalleryImage";

function Gallery({ images }) {
  return (
    <Container>
      <Row>
        {images.map((image) => {
          return (
            <GalleryImage key={image.id} url={image.url} alt={image.alt} />
          );
        })}
      </Row>
    </Container>
  );
}

export default Gallery;
