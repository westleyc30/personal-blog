import { graphql, useStaticQuery } from 'gatsby';

// text {
//   text
// }
const useProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject(sort: { fields: createdAt, order: DESC }) {
        edges {
          node {
            title
            slug
            description
            createdAt(formatString: "MMMM DD, YYYY")
            updatedAt(formatString: "MMMM DD, YYYY")
            log {
              log
            }
          }
        }
      }
    }
  `);

  return data.allContentfulProject.edges.map(project => ({
    title: project.node.title,
    slug: project.node.slug,
    createdAt: project.node.createdAt,
    updatedAt: project.node.updatedAt,
    log: project.node.log.log,
  }));
};

export default useProjects;
