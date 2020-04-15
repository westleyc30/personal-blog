/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
      allContentfulProject {
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

  const posts = result.data.allContentfulBlogPost.edges;
  const projects = result.data.allContentfulProject.edges;

  posts.forEach(post => {
    actions.createPage({
      path: `/blog/${post.node.slug}`,
      component: require.resolve('./src/templates/post.js'),
      context: {
        slug: post.node.slug,
      },
    });
  });
  projects.forEach(project => {
    actions.createPage({
      path: `/projects/${project.node.slug}`,
      component: require.resolve('./src/templates/project.js'),
      context: {
        slug: project.node.slug,
      },
    });
  });
};
