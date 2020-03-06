import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export const query = graphql`
  query postQuery($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      slug
      text {
        text
      }
    }
  }
`;

const PostTemplate = ({ data: { contentfulPost: post } }) => (
  <Layout>
    <h1>{post.title}</h1>
  </Layout>
);

export default PostTemplate;
