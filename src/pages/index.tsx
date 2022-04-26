import styled from '@emotion/styled'
import CategoryList from 'components/Category'
import { LayoutDesktop } from 'components/Layout'
import PostList from 'components/PostList'
import { PostsSortingContextProvider } from 'contexts/PostsSortingContext'
import React from 'react'

const Main = styled.div`
  width: 100%;
  max-width: 65rem;
  min-height: 100vh;

  display: grid;
  grid-template-columns: 1fr 3fr;
  padding-top: 5rem;
  margin: auto;
`
interface Props {
  location: {
    search: string
  }
}

const Home = ({ location: { search } }: Props) => {
  return (
    <LayoutDesktop>
      <PostsSortingContextProvider search={search}>
        <Main>
          <CategoryList />
          <PostList />
        </Main>
      </PostsSortingContextProvider>
    </LayoutDesktop>
  )
}

export default Home
