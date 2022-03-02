import styled from '@emotion/styled'
import GlobalStyles from 'components/Common/GlobalStyle'
import Header from 'components/Main/Header'
import React from 'react'

const Container = styled.div``

const Home = () => {
  return (
    <Container>
      <GlobalStyles />
      <Header />
    </Container>
  )
}

export default Home
