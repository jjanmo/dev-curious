import { graphql, useStaticQuery } from 'gatsby'
import { PostType } from 'types/posts'

const useQueryPosts = (): PostType[] => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery(
    graphql`
      query getPosts {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                summary
                date(formatString: "YYYY.MM.DD.")
                categories
              }
            }
          }
        }
      }
    `
  )

  return edges
}

export default useQueryPosts
