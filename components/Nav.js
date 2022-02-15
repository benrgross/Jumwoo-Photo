import { Nav, Navbar, Container } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="nav__cont" fluid>
        <Navbar.Brand
          className="navBrand"
          style={{ color: "rgb(27 107 201)" }}
          href="/"
        >
          JUMWOO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav_items">
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav>
          <Nav className="ml-auto nav_items">
            <Nav.Link href="http://www.jumwoophoto.com/">Shop</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
