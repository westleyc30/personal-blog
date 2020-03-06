/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('failed to create posts', result.errors);
  }

  const posts = result.data.allContentfulPost.edges;

  posts.forEach(post => {
    actions.createPage({
      path: post.node.slug,
      component: require.resolve('./src/templates/post.js'),
      context: {
        slug: post.node.slug,
      },
    });
  });
};
