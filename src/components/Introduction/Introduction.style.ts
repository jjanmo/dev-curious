import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { COLORS } from 'constants/colors'

export const Introduction = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 76.8rem;
  height: 22rem;
  margin: 5rem auto 0;
`
export const Container = styled.div`
  display: flex;
  justify-content: center;
`
export const ImageWrapper = styled.div`
  padding: 4rem;
`
export const MyInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const MyName = styled.div`
  margin-bottom: 0.5rem;
  font-size: 3rem;
  font-weight: bold;
`
export const MyMotto = styled.div`
  color: ${COLORS.GRAY_030};
  font-size: 1.8rem;
  line-height: 2.6rem;
`
export const ButtonContainer = styled.div`
  padding: 1rem 4rem;
  border-top: 1px solid ${COLORS.GRAY_010};
  width: 100%;
  display: flex;
  align-items: center;
`
export const MailText = styled.span<{ active: boolean }>`
  width: 0;
  padding: 0;
  font-size: 1.5rem;
  border-radius: 5px;
  opacity: 0.9;
  color: ${COLORS.WHITE};
  background-color: ${COLORS.GRAY_050};
  transition: all 0.3s ease-in-out;

  ${({ active }) =>
    active &&
    css`
      width: 16rem;
      padding: 0.8rem 1rem;
    `}
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
