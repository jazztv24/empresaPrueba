import React, { useState } from 'react';
import './Navbar1.css';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse
} from 'reactstrap';

function NavBar1() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="sm"> {/* Añadido color y expand */}
      <NavbarBrand href="/">Mi Tienda</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar> {/* Cambiado me-auto por mr-auto */}
          <NavItem className='NavItem'>
            <Link to="/">INICIO</Link>
          </NavItem>
          <NavItem>
            <Link to="/comida">COMIDA</Link>
          </NavItem>
          <NavItem>
            <Link to="/ropa">ROPA</Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default NavBar1; 