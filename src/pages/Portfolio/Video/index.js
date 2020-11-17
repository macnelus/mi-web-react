import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { getYoutubeApi } from '../../../lib/api.js';
import YouTubeItem from '../../../components/YoutubeItem.js';

const Video = () => {
  const [youtubeData, setYouTubeData] = useState([]);

  const fetchYouTubeData = async () => {
    const data = await getYoutubeApi();

    setYouTubeData(data);
  };

  useEffect(() => {
    fetchYouTubeData();
  }, []);

  return (
    <>
      <Header />
      <main id="video">
        <h2 className="video-title">Videos</h2>
        <section className="container">
          {youtubeData.map((video, i) => (
            <YouTubeItem key={i} video={video} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Video;
