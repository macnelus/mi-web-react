import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import * as Markdown from 'react-markdown';
import { fetchPostByPathName } from '../../lib/ContentfulUtil';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';

function BlogPost({ location }) {
  const [post, setPost] = useState({});

  useEffect(() => {
    if (!location.content) {
      const [, path] = location.pathname.split('/blog/');
      fetchPostByPathName(path).then(({ items }) => {
        console.log(items);
        const [{ fields }] = items;
        setPost(fields);
      });
    } else {
      setPost(location);
    }
  }, [location]);

  return (
    <>
      <Header />
      <main id="blog">
        <div className="post-item">
          <Link to="/blog">Back to Blog</Link>
          <p className="post-date">
            {moment(post.date).calendar(null, {
              sameDay: '[Today]',
              lastDay: '[Yesterday]',
              lastWeek: '[Last] dddd',
              sameElse: 'MMM Do YYYY',
            })}
          </p>
          <h3>{post.title}</h3>
          <Markdown source={post.icon} />
          <Markdown source={post.content} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default BlogPost;
