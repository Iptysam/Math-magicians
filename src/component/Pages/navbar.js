import React from 'react';
import { NavLink, Nav, NavMenu } from './navbarElements';

const Navbar = () => (
  <>
    <Nav>
      <NavMenu>
        <NavLink to="src/component/Pages/Home.js" activeStyle>
          Home
        </NavLink>
        <NavLink to="/component/Calculator" activeStyle>
          Calculator
        </NavLink>
        <NavLink to="src/component/Pages/qoute.js" activeStyle>
          Qoute
        </NavLink>
      </NavMenu>
    </Nav>
  </>
);

export default Navbar;
