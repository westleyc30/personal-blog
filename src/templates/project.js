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
    <div className="title-box">
      <h2>{project.title}</h2>
      <h3>by Westley Cho</h3>
    </div>
    <div
      dangerouslySetInnerHTML={{
        __html: project.log.childMarkdownRemark.html,
      }}
      className="md-content"
    />
  </Layout>
);

export default PostTemplate;
