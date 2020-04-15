import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import usePosts from '../hooks/use-posts';

const BlogPage = () => {
  const posts = usePosts();

  return (
    <Layout>
      <SEO title="Blog" description="Blog page" />
      <h1>Hi from the blog page</h1>
      <p>Welcome to the blog page</p>

      {posts.map(post => (
        <li>
          <Link to={`/blog/${post.slug}`}>
            <h3>{post.title}</h3>
          </Link>
          <strong>{post.createdAt}</strong>
        </li>
      ))}

      <Link to="/">Go back to the homepage</Link>
    </Layout>
  );
};

export default BlogPage;
