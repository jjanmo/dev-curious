import { graphql, useStaticQuery } from 'gatsby'
import { Categories, PostType, RawPostType } from 'types/posts'

const useQueryPosts = () => {
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
                thumbnail {
                  childImageSharp {
                    gatsbyImageData(width: 768, height: 400)
                  }
                }
              }
            }
          }
        }
      }
    `
  )

  const categories: Categories = edges
    .reduce((acc: string[], cur: RawPostType) => {
      return [...acc, ...cur.node.frontmatter.categories]
    }, [])
    .reduce((acc: { [key: string]: number }, category: string) => {
      if (acc[category]) {
        acc[category]++
        return acc
      } else {
        acc[category] = 1
        return acc
      }
    }, {})
  categories['All'] = edges.length

  const posts: PostType[] = edges.map((item: RawPostType) => ({
    id: item.node.id,
    ...item.node.frontmatter,
  }))

  return { posts, categories }
}

export default useQueryPosts
