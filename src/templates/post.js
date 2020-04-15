import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

export const query = graphql`
  query postQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

const PostTemplate = ({ data: { contentfulBlogPost: post } }) => (
  <Layout>
    <h2>{post.title}</h2>
    <div
      dangerouslySetInnerHTML={{
        __html: post.content.childMarkdownRemark.html,
      }}
    />
  </Layout>
);

export default PostTemplate;
