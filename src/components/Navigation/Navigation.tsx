import * as S from './Navigation.style'
import { Link } from 'gatsby'

function Navigation() {
  return (
    <S.Container>
      <S.Item>
        <Link to="/">글</Link>
      </S.Item>
      <S.Item>
        <Link to="/tags">시리즈</Link>
      </S.Item>
      <S.Item>
        <Link to="/about">소개</Link>
      </S.Item>
    </S.Container>
  )
}

export default Navigation
