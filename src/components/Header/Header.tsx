import * as S from './Header.style'
import Nav from 'components/Nav'
import SearchForm from 'components/SearchForm'
import { Link } from 'gatsby'

const Header = () => {
  return (
    <S.Container>
      <Link to="/">
        <S.Logo>Curious Note</S.Logo>
      </Link>
      <Nav />
      {/* <SearchForm /> */}
    </S.Container>
  )
}

export default Header
