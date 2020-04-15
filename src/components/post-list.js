import { Link } from 'gatsby';
//graphql, useStaticQuery
import React from 'react';
// import PropTypes from 'prop-types';
import useMostRecent from '../hooks/use-most-recent';

const PostList = () => {
  const posts = useMostRecent();
  return (
    <>
      {posts.map(post => (
        <li>
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </>
  );
};

export default PostList;
