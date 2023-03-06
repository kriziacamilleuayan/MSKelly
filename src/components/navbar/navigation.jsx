import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./navigation.css";

class Navigation extends React.Component {
  render() {
    return (
      <Navbar sticky="top" bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <Link className="navlink" to={`/`}>
              Logo
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Link className="navlink" to={`/about`}>
              About
            </Link>
            <Link className="navlink" to={`/faq`}>
              FAQ
            </Link>
            <Link className="navlink" to={`/careers`}>
              Careers
            </Link>
            <Link className="navlink" to={`/services`}>
              Our Services
            </Link>
            <Link className="navlink" to={`/contact`}>
              Contact
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Navigation;
