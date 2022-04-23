import { graphql, useStaticQuery } from 'gatsby'
import { useMemo } from 'react'
import { PostType, QueryPostsReturnType, QueryPostsType, RawPostType } from 'types/posts'

const useQueryPosts = (): QueryPostsReturnType => {
  const {
    allMarkdownRemark: { edges },
  } = useStaticQuery<QueryPostsType>(
    graphql`
      query getPosts {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
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

  const categories: { [key: string]: number } = useMemo(
    () =>
      edges
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
        }, {}),
    [edges]
  )

  categories['all'] = edges.length

  const sortedCategories: [string, number][] = useMemo(
    () => Object.entries(categories).sort(),
    [categories]
  )

  const posts: PostType[] = useMemo(
    () =>
      edges.map((item: RawPostType) => ({
        id: item.node.id,
        slug: item.node.fields.slug,
        ...item.node.frontmatter,
      })),
    [edges]
  )

  console.log(posts)

  return { posts, categories: sortedCategories }
}

export default useQueryPosts
