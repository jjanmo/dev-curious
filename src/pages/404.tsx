import styled from '@emotion/styled'
import { COLORS } from 'constants/colors'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const NotFound = () => {
  return (
    <Container>
      <StaticImage width={400} height={300} src="../assets/404.png" alt="404" />
      <Text>page not found</Text>
      <HomeLink to="/">home</HomeLink>
    </Container>
  )
}

export default NotFound

const Container = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Apple SD Gothic Neo;
  text-transform: uppercase;
`
const Text = styled.div`
  margin: 3rem 0;
  font-size: 3.5rem;
  font-weight: bold;
  color: ${COLORS.GRAY_030};
`
const HomeLink = styled(Link)`
  all: unset;
  width: 8rem;
  padding: 0.5rem 1rem;
  color: ${COLORS.WHITE};
  background-color: ${COLORS.BLACK};
  text-align: center;
  font-size: 1.5rem;
  border-radius: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.GRAY_030};
  }
`
