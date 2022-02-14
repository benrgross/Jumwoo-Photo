import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";

function Header() {
  return (
    <Container
      fluid
      className="header__logo-cont d-flex justify-content-center "
    >
      <Image
        fluid
        src="/img/JUMWOO-logo.png"
        alt="JUMWOO PHOTOGRAPHY spelt out in all caps"
        className="header__logo-img"
      />
    </Container>
  );
}

export default Header;
