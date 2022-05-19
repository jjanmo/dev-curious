import * as CS from './common.style'
import Layout from 'components/Layout'
import PostList from 'components/PostList'
import { PostsSortingContextProvider } from 'contexts/PostsSortingContext'
import React from 'react'

interface Props {
  location: {
    search: string
  }
}

const Home = ({ location: { search } }: Props) => {
  return (
    <PostsSortingContextProvider search={search}>
      <Layout>
        <CS.Main>
          <PostList />
        </CS.Main>
      </Layout>
    </PostsSortingContextProvider>
  )
}

export default Home
