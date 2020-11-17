import React, { useEffect, useState } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Bio from './pages/Bio';
import Portfolio from './pages/Portfolio';
import BlogPost from './pages/Blog/BlogPost';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Video from './pages/Portfolio/Video';
import Photo from './pages/Portfolio/Photo';
import WebDeveloper from './pages/Portfolio/Webdeveloper';

const { REACT_APP_YOUTUBE_API_KEY } = process.env;

function App() {
  const [gapiReady, setGapiReady] = useState(false);

  const loadYoutubeApi = async () => {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/client.js';

    script.onload = () => {
      window.gapi.load('client', () => {
        window.gapi.client.setApiKey(REACT_APP_YOUTUBE_API_KEY);
        window.gapi.client.load('youtube', 'v3', () => {
          if (script.getAttribute('gapi_processed')) {
            setGapiReady(true);
          }
        });
      });
    };
    document.body.appendChild(script);
  };

  useEffect(() => {
    loadYoutubeApi();
  }, [gapiReady]);

  return (
    gapiReady && (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/bio" component={Bio} />
          <Route path="/blog/:blogPost" component={BlogPost} />
          <Route path="/blog" component={Blog} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/video" component={Video} />
          <Route path="/photo" component={Photo} />
          <Route path="/webdeveloper" component={WebDeveloper} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    )
  );
}

export default App;
