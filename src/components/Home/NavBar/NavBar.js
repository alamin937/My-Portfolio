import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const NavBar = () => {
    return (
        <div>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#about">About</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#skills">My Skills</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#project">Projects</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#contact">Contact Me</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;