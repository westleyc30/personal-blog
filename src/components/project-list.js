import { Link } from 'gatsby';
//graphql, useStaticQuery
import React from 'react';
// import PropTypes from 'prop-types';
import useMostRecentProjects from '../hooks/use-most-recent-projects';

const ProjectList = () => {
  const posts = useMostRecentProjects();
  return (
    <>
      <div className="projects-list">
        <div className="list">
          <h2 className="list__header">Projects</h2>

          {posts.map(post => (
            <li className="list__item">
              <Link className="list__anchor" to={`/projects/${post.slug}`}>
                {post.title}
              </Link>
            </li>
          ))}
          <Link className="list__footer" to="/projects">
            more...
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectList;
