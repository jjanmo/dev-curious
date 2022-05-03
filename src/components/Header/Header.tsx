import * as S from './Header.style'
import { Link } from 'gatsby'

const Header = () => {
  return (
    <S.Container>
      <S.Logo>Curious Note</S.Logo>
      <S.Navigation>
        <S.Item>
          <Link to="/">posts</Link>
        </S.Item>
        <S.Item>
          <Link to="/tags">tags</Link>
        </S.Item>
        <S.Item>
          <Link to="/about">about</Link>
        </S.Item>
      </S.Navigation>
    </S.Container>
  )
}

export default Header
