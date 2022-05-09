import * as S from './Header.style'
import { Magnifier } from 'components/Icons'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Header = () => {
  return (
    <S.Container>
      <S.Logo>
        <Link to="/">
          <StaticImage width={50} height={50} src="../../assets/logo.png" alt="logo" />
        </Link>
        <S.LogoText>curious.note</S.LogoText>
      </S.Logo>
      <S.ButtonsContainer>
        <div>다크모드 버튼</div>
        <S.SearchLink to="/search">
          <Magnifier size={25} />
        </S.SearchLink>
      </S.ButtonsContainer>
    </S.Container>
  )
}

export default Header
