import * as S from './Header.style'
import { Email, Github, Logo } from 'components/Icons'
import { Link } from 'gatsby'
import { useEffect, useState } from 'react'
import Clipboard from 'react-clipboard.js'

const Header = () => {
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
    <S.Container>
      <S.Logo>
        <Link to="/">
          <Logo width={2000} height={2000} />
        </Link>
        <S.LogoText>curious.note</S.LogoText>
      </S.Logo>
      <S.ButtonsContainer>
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
          <S.MailText active={isHover.mail}>jjanmo07@hanmail.net</S.MailText>
        </S.ClipboardWrapper>
      </S.ButtonsContainer>
    </S.Container>
  )
}

export default Header
