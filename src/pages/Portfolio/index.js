import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import foto1 from '../../img/photo.png';
import foto2 from '../../img/video.png';
import foto3 from '../../img/coding.png';



const Portfolio = () => {
  return (
    <>
      <Header />
      <h2 className ="title-porfolio">Portfolio</h2>
      <main id="menu-portfolio">
        <div className="card-grid">
          <Link className="card" to="/photo">
            <div
              className="card__background"
              style={{
                backgroundImage: `url(${foto1})`,
              }}
            ></div>
            <div class="card__content">
              <h3 className="card__heading">Photo</h3>
            </div>
          </Link>
          <Link className="card" to="/video">
            <div
              className="card__background"
              style={{
                backgroundImage: `url(${foto2})`,
              }}
            ></div>
            <div class="card__content">
              <h3 className="card__heading">Video</h3>
            </div>
          </Link>
          <Link className="card" to="/webdeveloper">
            <div
              className="card__background"
              style={{
                backgroundImage: `url(${foto3})`,
              }}
            ></div>
            <div class="card__content">
              <h3 className="card__heading">Web Developer</h3>
            </div>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;
