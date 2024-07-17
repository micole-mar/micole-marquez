import React from 'react';
import './NavbarStyles.module.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
