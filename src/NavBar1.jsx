import React, { useState } from 'react';

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
    <Navbar color="light" light expand="md"> {/* Añadido color y expand */}
      <NavbarBrand href="/">Mi Tienda</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar> {/* Cambiado me-auto por mr-auto */}
          <NavItem>
            <Link to="/">Inicio</Link>
          </NavItem>
          <NavItem>
            <Link to="/comida">Comida</Link>
          </NavItem>
          <NavItem>
            <Link to="/ropa">Ropa</Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default NavBar1; 