import styled from '@emotion/styled'
import CategoryList from 'components/CategoryList'
import Header from 'components/Header'
import PostList from 'components/PostList'
import { useQueryPosts } from 'hooks'
import React from 'react'
import GlobalStyles from 'styles/GlobalStyle'

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

const Home = () => {
  const { posts, categories } = useQueryPosts()

  return (
    <Container>
      <GlobalStyles />
      <Header />
      <Main>
        <CategoryList categories={categories} />
        <PostList posts={posts} />
      </Main>
    </Container>
  )
}

export default Home
