import { graphql, useStaticQuery } from "gatsby"

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPost {
        edges {
          node {
            title
            slug
            createdAt
            updatedAt
            text {
              text
            }
          }
        }
      }
    }
  `)

  return data.allContentfulPost.edges.map(post => ({
    title: post.node.title,
    slug: post.node.slug,
    createdAt: post.node.createdAt,
    updatedAt: post.node.updatedAt,
    text: post.node.text.text,
  }))
}

export default usePosts
