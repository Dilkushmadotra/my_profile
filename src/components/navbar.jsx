import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="shadow-sm py-3">
      <Container>
        <Navbar.Brand href="#">Dilkush_Ror</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="hero" smooth duration={500} className="nav-link">Home</Link>
            <Link to="about" smooth duration={500} className="nav-link">About</Link>
            <Link to="projects" smooth duration={500} className="nav-link">Projects</Link>
            <Link to="contact" smooth duration={500} className="nav-link">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
