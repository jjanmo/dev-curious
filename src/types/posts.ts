import { IGatsbyImageData } from 'gatsby-plugin-image'

export interface RawPostType {
  node: {
    id: string
    fields: {
      slug: string
    }
    frontmatter: {
      title: string
      summary: string
      date: string
      categories: string[]
      thumbnail: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
    }
  }
}

export interface PostType {
  id: string
  title: string
  slug: string
  summary: string
  date: string
  categories: string[]
  thumbnail: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

export interface QueryPostsType {
  allMarkdownRemark: {
    edges: RawPostType[]
  }
}

export interface QueryPostsReturnType {
  posts: PostType[]
  categories: [string, number][]
}
