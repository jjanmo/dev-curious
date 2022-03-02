import styled from '@emotion/styled'
import { StaticImage } from 'gatsby-plugin-image'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0a91aa;
`
const Intro = styled.p`
  padding: 1rem 0;
  color: white;
  line-height: 1.5;
  & > div:first-child {
    font-size: 1.5rem;
  }
  & > div:last-child {
    font-size: 2rem;
    font-weight: bold;
  }
`

const Header = () => {
  return (
    <Container>
      <StaticImage src="../../assets/header.png" alt="logo" height={200} layout="fixed" />
      <Intro>
        <div>Hello ~</div>
        <div>This is JJanmo's Dev Curious Note</div>
      </Intro>
    </Container>
  )
}

export default Header
