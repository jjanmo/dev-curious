import * as S from './Introduction.style'
import { StaticImage } from 'gatsby-plugin-image'

function Introduction() {
  return (
    <S.Introduction>
      <S.Container>
        <S.ImageWrapper>
          <StaticImage
            width={128}
            height={128}
            src="../../assets/default_avatar.png"
            alt="avatar"
          />
        </S.ImageWrapper>
        <S.MyInfo>
          <S.MyName>JJanmo</S.MyName>
          <S.MyMotto>눈길을 걸어갈 때 어지럽게 걷지 말기를.</S.MyMotto>
        </S.MyInfo>
      </S.Container>
      <S.Links>깃허브 | 메일</S.Links>
    </S.Introduction>
  )
}

export default Introduction
