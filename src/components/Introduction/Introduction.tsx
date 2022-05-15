import * as S from './Introduction.style'
import { Email, Github } from 'components/Icons'
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
          <S.MyMotto>
            눈길을 걸어갈 때 어지럽게 걷지 말기를.
            <br />
            오늘 내가 걸어간 길이 훗날 다른 사람의 이정표가 되리니.
          </S.MyMotto>
        </S.MyInfo>
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
