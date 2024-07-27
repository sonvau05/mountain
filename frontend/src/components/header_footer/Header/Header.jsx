import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom"; 
import logo from "../../../assets/images/logo.jpg";
import "../../../style/Header.css";

const Header = () => {
  return (
    <header>
      <Navbar expand="lg" className="justify-content-between">
        <Container className="container">
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              width="150"
              height="120"
              className="d-inline-block align-top"
              alt="Alpine Ascents International logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/mountains">Mounterring</Nav.Link>
              <Nav.Link as={Link} to="/group">Group</Nav.Link>
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="/about">About us</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
            <NavDropdown title="User" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/login">Log in</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/register">Register</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/admin">Admin</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
