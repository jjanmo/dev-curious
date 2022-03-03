import styled from '@emotion/styled'
import GlobalStyles from 'components/Common/GlobalStyle'
import CategoryList from 'components/Main/CategoryList'
import Footer from 'components/Main/Footer'
import Header from 'components/Main/Header'
import React from 'react'

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`
const Main = styled.div`
  padding-top: 1rem;
  padding-bottom: 100px;
  width: 100%;
  max-width: 90rem;
`

const Home = () => {
  return (
    <Container>
      <GlobalStyles />
      <Header />
      <Main>
        <CategoryList />
      </Main>
      <Footer />
    </Container>
  )
}

export default Home
