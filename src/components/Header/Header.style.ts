import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { COLORS } from 'constants/colors'
import { Link } from 'gatsby'

export const Container = styled.header`
  width: 100%;
  max-width: 76.8rem;
  height: 8rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(-10px); // 로고 미세 이동
`
export const LogoText = styled.span`
  padding-bottom: 5px;
  font-family: 'Fira Mono', monospace;
  font-weight: 600;
  font-size: 2.5rem;
  color: ${COLORS.GREEN_020};
`
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SearchLink = styled(Link)`
  width: 4rem;
  height: 4rem;
  margin: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;

  &:hover {
    background-color: ${COLORS.GRAY_010};
  }
`
export const ClipboardWrapper = styled.div`
  position: relative;
  cursor: pointer;
  .clipboard-button {
    all: unset;
  }
`
export const Copied = styled.span<{ active: boolean }>`
  position: absolute;
  bottom: -3rem;
  left: 0rem;
  display: ${({ active }) => (active ? 'inline-block' : 'none')};
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  color: ${COLORS.WHITE};
  background-color: ${COLORS.GRAY_050};
  opacity: 0.8;
  font-size: 1.4rem;
`
export const MailText = styled.span<{ active: boolean }>`
  position: absolute;
  top: 0;
  left: -16rem;
  width: 0;
  padding: 0;
  font-size: 1.5rem;
  border-radius: 5px;
  opacity: 0;
  color: ${COLORS.WHITE};
  background-color: ${COLORS.GRAY_050};
  transition: all 0.3s ease-in-out;

  ${({ active }) =>
    active &&
    css`
      width: 16rem;
      opacity: 0.9;
      padding: 0.8rem 1rem;
    `}
`
