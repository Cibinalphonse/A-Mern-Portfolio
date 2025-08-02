import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Works</Link></li>
        <li><Link to="/Skills">Skills</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/Login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Header;

