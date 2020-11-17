import React from 'react';

const FlickrItem = ({ source }) => {

  return (

    <figure className="photo-card">
      <img src={source} alt="Gallery" />
    </figure>

  );
};

export default FlickrItem;
