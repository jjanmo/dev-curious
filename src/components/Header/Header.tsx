import * as S from './Header.style'
import { Logo } from 'components/Icons'
import { Link } from 'gatsby'

const Header = () => {
  return (
    <S.Container>
      <S.Logo>
        <Link to="/">
          <Logo width={2000} height={2000} />
        </Link>
        <S.LogoText>curious.note</S.LogoText>
      </S.Logo>
      <S.ButtonsContainer>
        <div>다크모드 버튼</div>
        {/* <S.SearchLink to="/search">
          <Magnifier size={25} />
        </S.SearchLink> */}
      </S.ButtonsContainer>
    </S.Container>
  )
}

export default Header
