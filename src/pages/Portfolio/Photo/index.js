
import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { getFlickrData } from '../../../lib/api.js';
import FlickrItem from '../../../components/FlickrItem.js';

const Photo = () => {
  const [flickrData, setFlickrData] = useState([]);

  const fetchFlickrData = async () => {
    const data = await getFlickrData();
    const curatedData = data.slice(0, 12);
    setFlickrData(curatedData);
  };

  useEffect(() => {
    fetchFlickrData();
  }, []);

  return (
    <>
      <Header />
        <main id="photo">
          <h2 className="photo-title">Photos</h2>
          <section className="container">
            {flickrData.map((source, i) => (
              <FlickrItem key={i} source={source} />
            ))}
          </section>
        </main>
      <Footer />
    </>
  );
};

export default Photo;
