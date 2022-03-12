import { graphql, Link } from 'gatsby'
import React from 'react'

interface Props {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: string
        siteUrl: string
      }
    }
  }
}

const About = ({
  data: {
    site: {
      siteMetadata: { title, description, author, siteUrl },
    },
  },
}: Props) => {
  return (
    <>
      <div>This is About page</div>
      <section>
        <div>{title}</div>
        <div>{description}</div>
        <div>{author}</div>
      </section>

      <Link to={`${process.env.NODE_ENV === 'development' ? '/' : siteUrl}`}>To Home</Link>
    </>
  )
}

export default About

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
  }
`
