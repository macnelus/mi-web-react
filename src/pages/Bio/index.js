import React from 'react';
import yo from '../../img/yoweb.png'

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Bio = () => {
  return (
    <>
      <Header />
      <main id="bio">
        <div className="photo-bio">
          <img src={yo} alt="Autorretrato" />
        </div>
        <div className="title-bio">
          <h2>Bio</h2>
          <p className="text-bio">
            Aparecí por este mundo a finales del siglo pasado con una puesta en
            escena bastante mejorable en todo caso. Hijo mayor de mis padres,
            siempre se me dio bien ser la oveja negra de la familia. Por eso me
            dediqué al mundo de la creatividad.
            <br />
            <br />
            Empecé por pintar con tinta china una de las paredes de mi cuarto, y
            luego vinieron la cámara de fotos, la edición de video y el diseño.
            Siempre se me dió bien aprender pero mal estudiar así que investigué
            y así llegué a trabajar para clientes como Karl Lagerfeld, Fundación
            Telefónica, Quum Comunicación y últimamente Intiva Desarrollo
            Directivo.
            <br />
            <br />
            Me gradué en Comunicación Audiovisual en la Universidad de Sevilla,
            y me formé en varios campos de manera transdisciplinar, entre ellos el
            Marketing Digital, donde hice un máster en la misma universidad.
            <br />
            <br />
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Bio;
