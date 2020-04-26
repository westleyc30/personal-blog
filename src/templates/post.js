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
    <div className="title-box">
      <h2>{post.title}</h2>
      <h3>by Westley Cho</h3>
    </div>

    <div
      dangerouslySetInnerHTML={{
        __html: post.content.childMarkdownRemark.html,
      }}
      className="md-content"
    />
  </Layout>
);

export default PostTemplate;
