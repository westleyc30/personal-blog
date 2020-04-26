import { Link } from 'gatsby';
//graphql, useStaticQuery
import React from 'react';
// import PropTypes from 'prop-types';
import useMostRecent from '../hooks/use-most-recent';

const PostList = () => {
  const posts = useMostRecent();
  return (
    <>
      <div className="post-list">
        <div className="list">
          <h2 className="list__header">Blog</h2>
          {posts.map(post => (
            <li className="list__item">
              <Link className="list__anchor" to={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </li>
          ))}
          <Link className="list__footer" to="/blog">
            more...
          </Link>
        </div>
      </div>
    </>
  );
};

export default PostList;
