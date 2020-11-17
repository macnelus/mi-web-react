import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {  
  return (
    <header>
      <h1>Mariano Cuesta</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/bio">Bio</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contacto</Link>
      </nav>
    </header>
  );
}

export default Header;
