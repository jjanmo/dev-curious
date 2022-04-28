import styled from '@emotion/styled'
import CategoryList from 'components/Category'
import Layout from 'components/Layout'
import PostList from 'components/PostList'
import { PostsSortingContextProvider } from 'contexts/PostsSortingContext'
import React from 'react'

const Main = styled.div`
  width: 100%;
  max-width: 90rem;
  /* min-height: 100vh; */
  padding-top: 5rem;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 3fr;
`
interface Props {
  location: {
    search: string
  }
}

const Home = ({ location: { search } }: Props) => {
  return (
    <Layout>
      <PostsSortingContextProvider search={search}>
        <Main>
          <CategoryList />
          <PostList />
        </Main>
      </PostsSortingContextProvider>
    </Layout>
  )
}

export default Home
