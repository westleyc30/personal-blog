import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import useProjects from '../hooks/use-projects';

const ProjectsPage = () => {
  const projects = useProjects();

  return (
    <Layout>
      <SEO title="Projects" description="The page where I store my projects" />
      <h1>Projects</h1>
      <p>Welcome to the projects page</p>
      <Link to="/">Go back to the homepage</Link>

      {projects.map(project => (
        <li>
          <Link to={`/blog/${project.slug}`}>
            <h3>{project.title}</h3>
          </Link>
          <strong>{project.createdAt}</strong>
        </li>
      ))}
    </Layout>
  );
};

export default ProjectsPage;
