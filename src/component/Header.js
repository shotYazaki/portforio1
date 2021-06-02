import React from 'react';
import { Navbar, Nav, NavDropdown }from 'react-bootstrap';

function Header()  {
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Soccer</Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/">HOME</Nav.Link>
              <Nav.Link href="/Test">Test</Nav.Link>
            </Nav>
         </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;