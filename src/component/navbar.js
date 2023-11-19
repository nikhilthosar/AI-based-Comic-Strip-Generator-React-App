import React from 'react';
import { Navbar } from 'react-bootstrap';

export function Mynavbar() {
  return (
    <Navbar class='navbar-title' className="bg-body-tertiary-dark" bg="dark" variant="dark">
      <Navbar.Brand href="#home" className="mx-auto">
      <div style={{ display: 'flex', alignItems: 'center' }}>
  <h3 style={{ display: 'inline' }}>Comic Creator App</h3>
  <h6 style={{ display: 'inline', marginLeft: '10px', marginTop: '10px', color:  '#CF9FFF' }}> A Dashtoon Assignment</h6>
</div>
      </Navbar.Brand>
    </Navbar>
  );
};

export default Mynavbar;