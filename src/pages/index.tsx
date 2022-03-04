import styled from '@emotion/styled'
import CategoryList from 'components/CategoryList'
import Footer from 'components/Footer'
import Header from 'components/Header'
import PostList from 'components/PostList'
import React from 'react'
import GlobalStyles from 'styles/GlobalStyle'

const Container = styled.div``
const Main = styled.div`
  width: 100%;
  max-width: 60rem;
  padding-top: 5rem;
  margin: auto;
`

const Home = () => {
  return (
    <Container>
      <GlobalStyles />
      <Header />
      <Main>
        <CategoryList />
        <PostList />
      </Main>
      {/* <Footer /> */}
    </Container>
  )
}

export default Home
