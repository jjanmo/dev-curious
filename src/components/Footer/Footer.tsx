import styled from '@emotion/styled'
import React from 'react'

const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 100px;
  display: grid;
  place-items: center;
  text-align: center;
  font-size: 15px;
`

const Footer = () => {
  return (
    <Container>
      Thank You for Visiting here, Have a Good Day 😘
      <br />© 2022 Developer JJanmo, Powered By Gatsby.
    </Container>
  )
}

export default Footer
