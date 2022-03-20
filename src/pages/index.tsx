import styled from '@emotion/styled'
import CategoryList from 'components/CategoryList'
import Header from 'components/Header'
import PostList from 'components/PostList'
import { PostsSortingContextProvider } from 'contexts/PostsSortingContext'
import { useQueryPosts } from 'hooks'
import queryString, { ParsedQuery } from 'query-string'
import React, { useContext, useMemo, useState } from 'react'
import GlobalStyles from 'styles/GlobalStyle'
import { PostType } from 'types/posts'

const Container = styled.div`
  min-height: 100vh;
`
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
    <Container>
      <GlobalStyles />
      <Header />
      <PostsSortingContextProvider search={search}>
        <Main>
          <CategoryList />
          <PostList />
        </Main>
      </PostsSortingContextProvider>
    </Container>
  )
}

export default Home
