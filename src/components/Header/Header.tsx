import * as S from './Header.style'
import { Link } from 'gatsby'
import { useFetchWeather } from 'hooks'
import { WeatherType } from 'types/weather'

const Header = () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data } = useFetchWeather<WeatherType>()

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
        <S.Weather>
          {data?.current && <img src={`http:${data.current.condition.icon}`} alt="weather" />}
        </S.Weather>
      </S.Navigation>
    </S.Container>
  )
}

export default Header
