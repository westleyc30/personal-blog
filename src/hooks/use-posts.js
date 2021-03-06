import { graphql, useStaticQuery } from 'gatsby';

// text {
//   text
// }
const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: createdAt, order: DESC }) {
        edges {
          node {
            title
            slug
            description
            createdAt(formatString: "MMMM DD, YYYY")
            updatedAt(formatString: "MMMM DD, YYYY")
            content {
              content
            }
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
    content: post.node.content.content,
  }));
};

export default usePosts;
