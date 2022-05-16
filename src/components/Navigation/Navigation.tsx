import * as S from './Navigation.style'
import { Link } from 'gatsby'
import type { PageProps } from 'gatsby'

function Navigation(props: PageProps) {
  const { pageResources } = props

  console.log(props.path)

  return (
    <S.Container>
      {/* <S.Item current={path === '/'}>
        <Link to="/">글</Link>
      </S.Item>
      <S.Item current={path === '/series'}>
        <Link to="/series">시리즈</Link>
      </S.Item>
      <S.Item current={path === '/about'}>
        <Link to="/about">소개</Link>
      </S.Item> */}
    </S.Container>
  )
}

export default Navigation
