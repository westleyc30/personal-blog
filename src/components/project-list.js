import { Link } from 'gatsby';
//graphql, useStaticQuery
import React from 'react';
// import PropTypes from 'prop-types';
import useMostRecentProjects from '../hooks/use-most-recent-projects';

const ProjectList = () => {
  const posts = useMostRecentProjects();
  return (
    <>
      {posts.map(post => (
        <li>
          <Link to={`/projects/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </>
  );
};

export default ProjectList;
