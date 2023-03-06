import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navigation.css";

class Navigation extends React.Component {
  render() {
    return (
      <Navbar sticky="top" bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Nav.Link href="#action1" className="navlink">
              About
            </Nav.Link>
            <Nav.Link href="#action2" className="navlink">
              FAQ
            </Nav.Link>
            <Nav.Link href="#action2" className="navlink">
              Careers
            </Nav.Link>
            <Nav.Link href="#action2" className="navlink">
              Our Services
            </Nav.Link>
            <Nav.Link href="#action2" className="navlink">
              Contact
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Navigation;
