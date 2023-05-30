import * as React from 'react'
import { PageProps, graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'

export default function NotFoundPage({ location }: PageProps<Queries.Site>) {
  return (
    <Layout location={location}>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export const Head = () => <Seo title="404: Not Found" />

export const pageQuery = graphql`
  query Site {
    site {
      siteMetadata {
        title
      }
    }
  }
`
