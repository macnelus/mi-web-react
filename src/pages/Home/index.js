import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main id="home">
      <div className="left-image">
        <img alt="" /> 
      </div>
      <div className="home">
        <div className="principal">
          <h1 className="home-titulo">Mariano<br />Cuesta</h1>
          <nav className="home-menu">
            <Link to="/bio">Bio</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contacto</Link>
          </nav>
        </div>
      </div>
      <div className="right-image">
        <img alt="" />
      </div>
    </main>
  );
};

export default Home;
