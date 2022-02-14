import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import GalleryImage from "./GalleryImage";

function Gallery({ images }) {
  return (
    <Container fluid>
      <Row>
        <GalleryImage images={images} />
      </Row>
    </Container>
  );
}

export default Gallery;
