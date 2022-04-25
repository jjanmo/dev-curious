import * as S from './styles'
import Header from 'components/Header'
import React from 'react'
import GlobalStyles from 'styles/GlobalStyle'

interface Props {
  children: React.ReactNode
}

function LayoutDesktop({ children }: Props) {
  return (
    <S.DesktopContainer>
      <GlobalStyles />
      <Header />
      {children}
    </S.DesktopContainer>
  )
}

export default LayoutDesktop
