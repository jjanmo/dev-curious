import * as S from './MusicPlayer.style'
import Jump from 'components/Icons/Jump'
import Play from 'components/Icons/Play'
import { COLORS } from 'constants/colors'
import { StaticImage } from 'gatsby-plugin-image'

function MusicPlayer() {
  return (
    <S.Container>
      <S.Left>
        <StaticImage src="../../assets/default_avatar.png" alt="avatar" width={100}></StaticImage>
      </S.Left>
      <S.Right>
        <S.Title>End of Time</S.Title>
        <S.Singer>Alan Walker</S.Singer>
        <S.Duration>01:28/03:55</S.Duration>
        <S.Progress>
          <S.Filled></S.Filled>
        </S.Progress>
        <S.Controls>
          <S.PrevButton>
            <Jump direction="prev" size={30} fill={COLORS.GREEN_020} />
          </S.PrevButton>
          <S.Playbutton>
            <Play size={16} fill={COLORS.GREEN_020} />
          </S.Playbutton>
          <S.NextButton>
            <Jump direction="next" size={30} fill={COLORS.GREEN_020} />
          </S.NextButton>
        </S.Controls>
      </S.Right>
    </S.Container>
  )
}

export default MusicPlayer
