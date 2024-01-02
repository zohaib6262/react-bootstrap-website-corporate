import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "./NavBar.module.css";
const NavBar = () => {
  return (
    <Container>
      <Navbar expand="lg" className={styles.navBar}>
        <Navbar.Brand href="#home" className={styles.navbarBrand}>
          <span className={styles.brand}> Corporate</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={styles.navbarCollapse}
        >
          <Nav className="me-auto"></Nav>
          <Nav className="mx-2 ">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="services">Services</Nav.Link>
            <Nav.Link href="works">Works</Nav.Link>
            <Nav.Link href="teams">Teams</Nav.Link>
            <Nav.Link href="#testimonials">Testimonials</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavBar;
