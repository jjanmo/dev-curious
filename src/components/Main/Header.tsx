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
const Intro = styled.div`
  padding: 1rem 0 3rem;
  color: white;
  line-height: 1.5;

  & > div:first-of-type {
    font-size: 1.5rem;
  }
  & > div:last-of-type {
    font-size: 2rem;
    font-weight: bold;
  }
`

const Header = () => {
  return (
    <Container>
      <StaticImage src="../../assets/header.png" alt="logo" height={200} />
      <Intro>
        <div>Hello ~</div>
        <div>This is JJanmo's Dev Curious Note</div>
      </Intro>
    </Container>
  )
}

export default Header
