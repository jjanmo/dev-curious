import { LayoutDesktop } from 'components/Layout'
import Post from 'components/Post'
import { graphql } from 'gatsby'
import React from 'react'
import { RawPostType } from 'types/posts'

interface Props {
  data: {
    allMarkdownRemark: {
      edges: RawPostType[]
    }
  }
}

const PostTemplate = ({ data }: Props) => {
  console.log(data)

  const post = data.allMarkdownRemark.edges[0]

  return (
    <LayoutDesktop>
      <Post {...post} />
    </LayoutDesktop>
  )
}

export default PostTemplate

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`
