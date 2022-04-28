import * as S from './Header.style'
import { Link } from 'gatsby'

const Header = () => {
  return (
    <S.Container>
      <Link to="/">
        <S.Logo>Curious Note</S.Logo>
      </Link>
      <S.Navigation>
        <S.Item>
          <Link to="/">Dev</Link>
        </S.Item>
        <S.Item>
          <Link to="/life">Life</Link>
        </S.Item>
        <S.Item>
          <Link to="/about">About</Link>
        </S.Item>
      </S.Navigation>
    </S.Container>
  )
}

export default Header
