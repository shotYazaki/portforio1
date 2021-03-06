import React from 'react';
import { Navbar, Nav, }from 'react-bootstrap';

function Header()  {
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Travel</Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/">HOME</Nav.Link>
              <Nav.Link href="/">TEST</Nav.Link>
            </Nav>
         </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;