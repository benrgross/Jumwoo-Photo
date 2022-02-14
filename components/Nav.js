import { Nav, Navbar, Container } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand style={{ color: "#0070f3" }} href="/">
          Jumwoo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="/search">Contact</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="/">link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
