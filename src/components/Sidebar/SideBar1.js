import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem } from 'react-bootstrap';

const Sidebar = () => (
  <Nav className="col-md-2  d-none d-md-block bg-light sidebar">
    <div className="sidebar-sticky vh-80">
      <NavItem>
        <Link to="/">Home</Link>
      </NavItem>
      <NavItem>
        <Link to="/about">About</Link>
      </NavItem>
      <NavItem>
        <Link to="/contact">Contact</Link>
      </NavItem>
    </div>
  </Nav>
);

export default Sidebar;
