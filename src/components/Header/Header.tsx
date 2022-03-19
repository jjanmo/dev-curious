import { Container, Logo } from './styles'
import Nav from 'components/Nav'
import SearchForm from 'components/SearchForm'
import { Link } from 'gatsby'
import { useEffect, useState } from 'react'

const Header = () => {
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    const posY = window.scrollY
    if (posY === 0) setIsScrolling(false)
    else setIsScrolling(true)
  }

  return (
    <Container isScrolling={isScrolling}>
      <Link to="/">
        <Logo isScrolling={isScrolling}>
          <div>DEV</div>
          <div>Curious</div>
        </Logo>
      </Link>
      <Nav />
      <SearchForm />
      <div>
        <input type="radio" />
        <input type="radio" />
      </div>
    </Container>
  )
}

export default Header
