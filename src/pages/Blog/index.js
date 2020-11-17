import React, { useEffect, useState } from 'react';

import BlogPreviewItem from './BlogPreviewItem.js';
import { fetchAllBlogPosts } from '../../lib/ContentfulUtil.js';
import Header from '../../components/Header.js';
import Footer from '../../components/Footer.js';

const Blog = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const { items } = await fetchAllBlogPosts();
      setPosts(items);
    }

    getPosts();
  }, []);

  return (
    <>
      <Header />
      <main id="blog">
        <h2>Blog</h2>
        <section>
          {posts.map(({ fields }) => (
            <BlogPreviewItem key={fields.title} {...fields} />
          ))}
        </section>
      </main>
      <Footer />
    </>
  );

};

export default Blog;