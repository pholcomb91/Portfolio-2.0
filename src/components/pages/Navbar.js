import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react';
// Here we import the Navbar.css file to grant access to some additional classNames
import '../../styles/Navbar.css';

const styles= {
  a: {
    color: '#415971',
    margin: 'auto',
  }

}

function Navbar() {
  return (
    <nav className="navbar container-fluid bg-transparent d-flex flex-row-reverse">
      <a style={styles.a} className="navbar-brand" href="#about">About</a>
      <a style={styles.a} className="navbar-brand" href="#work-experience">Portfolio</a>
      <a style={styles.a} className="navbar-brand" href="#resume.pdf">Resume</a>
      <a style={styles.a} className="navbar-brand" href="#contact">Contact</a>
    </nav>
  );
}

export default Navbar;
