import * as S from './Navigation.style'
import { Link } from 'gatsby'

function Navigation() {
  const activateLink = ({ isCurrent }: { isCurrent: boolean }) => {
    return isCurrent ? { className: 'active' } : {}
  }

  return (
    <S.Container>
      <S.Item>
        <Link to="/" getProps={activateLink}>
          글
        </Link>
      </S.Item>
      <S.Item>
        <Link to="/series" getProps={activateLink}>
          시리즈
        </Link>
      </S.Item>
      <S.Item>
        <Link to="/about" getProps={activateLink}>
          소개
        </Link>
      </S.Item>
    </S.Container>
  )
}

export default Navigation
