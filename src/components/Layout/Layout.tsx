import * as S from './Layout.style'
import Header from 'components/Header'
import MusicSwiper from 'components/MusicSwiper'
import Navigation from 'components/Navigation'
import React from 'react'
import GlobalStyles from 'styles/GlobalStyle'

interface Props {
  children: React.ReactNode
}

function Layout({ children }: Props) {
  return (
    <S.Container>
      <GlobalStyles />
      <Header />
      <MusicSwiper />
      <Navigation />
      {children}
    </S.Container>
  )
}

export default Layout
