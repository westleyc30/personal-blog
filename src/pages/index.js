import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
// import Image from "../components/image"
import SEO from '../components/seo';
import PostList from '../components/post-list';
import ProjectList from '../components/project-list';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <PostList />
    <ProjectList />
  </Layout>
);

export default IndexPage;
