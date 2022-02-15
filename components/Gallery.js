import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import GalleryImage from "./GalleryImage";
import axios from "axios";
import { server } from "../config/index";

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
