import React from 'react';
import { Navbar } from 'react-bootstrap';

export function Mynavbar() {
  return (
    <Navbar class='navbar-title' className="bg-body-tertiary-dark" bg="dark" variant="dark">
      <Navbar.Brand href="#home" className="mx-auto">
        <h3>Dashtoon Comic Creator</h3>
      </Navbar.Brand>
    </Navbar>
  );
};

export default Mynavbar;