import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export const query = graphql`
  query projectQuery($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      slug
      log {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

const PostTemplate = ({ data: { contentfulProject: project } }) => (
  <Layout>
    <h2>{project.title}</h2>
    <div
      dangerouslySetInnerHTML={{
        __html: project.log.childMarkdownRemark.html,
      }}
    />
  </Layout>
);

export default PostTemplate;
