import * as S from './styles'
import { Link } from 'gatsby'

const Nav = () => {
  return (
    <S.Container>
      <li>
        <Link to="/">Dev</Link>
      </li>
      <li>
        <Link to="/life">Life</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </S.Container>
  )
}

export default Nav
