import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export const query = graphql`
  query postQuery($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      slug
      text {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

const PostTemplate = ({ data: { contentfulPost: post } }) => (
  <Layout>
    <h1>{post.title}</h1>
    <div
      dangerouslySetInnerHTML={{
        __html: post.text.childMarkdownRemark.html,
      }}
    />
  </Layout>
);

export default PostTemplate;
