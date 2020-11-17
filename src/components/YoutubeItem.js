import React from 'react';

const YouTubeItem = ({ video }) => {
  const { videoId, title, description } = video;
  return (
    <article>
      <iframe
        width="424"
        height="238"
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div> 
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default YouTubeItem;
