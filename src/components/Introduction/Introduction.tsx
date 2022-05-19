import * as S from './Introduction.style'
import { Email, Github } from 'components/Icons'
import LottieIcon from 'components/LottieIcon'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { useEffect, useState } from 'react'
import Clipboard from 'react-clipboard.js'

function Introduction() {
  const [isHover, setIsHover] = useState({ github: false, mail: false })
  const [isCopied, setIsCopied] = useState(false)
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

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false)
      }, 1000)
    }
  }, [isCopied])

  // lottie  + music list 로 변경하자
  // 요가 / 재즈(색소폰) / EDM / 팝송
  // Promessess Dimmi
  // Klanga Gostan
  // Superman Joe Brooks
  // Hall Of Frame The Script
  // Blue Eiffle65
  // 하늘의 달리다 이적
  // 괜찮아 떠나 스윗소로우
  // 날아 이승렬
  // We are one kelly sweet

  return (
    <S.Introduction>
      <S.Container>
        <S.IconWrapper>
          <LottieIcon type="yoga" />
        </S.IconWrapper>
        Lottie Music PlayListSwiper
      </S.Container>

      <S.ButtonContainer>
        <Link
          id="github"
          to="https://github.com/jjanmo"
          target="_blank"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <Github size={32} isHover={isHover.github} />
        </Link>
        <S.ClipboardWrapper id="mail" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <Clipboard
            className="clipboard-button"
            data-clipboard-text="jjanmo07@hanmail.net"
            button-title="Copy to Clipboard"
            onSuccess={() => setIsCopied(true)}
          >
            <Email width={52} height={38} isHover={isHover.mail} />
          </Clipboard>
          <S.Copied active={isCopied}>Copied!</S.Copied>
        </S.ClipboardWrapper>
        <S.MailText active={isHover.mail}>jjanmo07@hanmail.net</S.MailText>
      </S.ButtonContainer>
    </S.Introduction>
  )
}

export default Introduction
