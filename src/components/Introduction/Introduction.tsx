import * as S from './Introduction.style'
import { Email, Github } from 'components/Icons'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { useState } from 'react'

function Introduction() {
  const [isHover, setIsHover] = useState({ github: false, mail: false })

  const handleMouseOver = (e: React.MouseEvent) => {
    const target = e.currentTarget.id
    setIsHover({
      ...isHover,
      [target]: true,
    })
  }
  const handleMouseOut = (e: React.MouseEvent) => {
    const target = e.currentTarget.id
    setIsHover({
      ...isHover,
      [target]: false,
    })
  }

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

      <S.Links>
        <Link
          id="github"
          to={'https://github.com/jjanmo'}
          target="_blank"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <Github size={32} isHover={isHover.github} />
        </Link>
        <Link
          id="mail"
          to="mailto:jjanmo07@hanmail.net"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <Email width={52} height={38} isHover={isHover.mail} />
        </Link>
      </S.Links>
    </S.Introduction>
  )
}

export default Introduction
