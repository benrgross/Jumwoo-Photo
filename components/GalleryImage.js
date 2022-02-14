import React from "react";
import { Image, Col } from "react-bootstrap";

function GalleryImage({ url, alt }) {
  return (
    <Col md={6}>
      <Image fluid src={url} alt={alt} className="gallery__img-thumb" />
    </Col>
  );
}

export default GalleryImage;
