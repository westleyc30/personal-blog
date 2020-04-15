import { graphql, useStaticQuery } from 'gatsby';

const useMostRecent = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(
        limit: 5
        sort: { fields: createdAt, order: DESC }
      ) {
        edges {
          node {
            title
            updatedAt
            createdAt(formatString: "MMMM DD, YYYY")
            slug
          }
        }
      }
    }
  `);

  return data.allContentfulBlogPost.edges.map(post => ({
    title: post.node.title,
    slug: post.node.slug,
    createdAt: post.node.createdAt,
    updatedAt: post.node.updatedAt,
  }));
};

export default useMostRecent;
