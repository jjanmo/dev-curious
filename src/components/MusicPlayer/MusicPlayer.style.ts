import styled from '@emotion/styled'
import { COLORS } from 'constants/colors'
import { StaticImage } from 'gatsby-plugin-image'
import { onLarge } from 'styles/mediaQuery'

export const Container = styled.div`
  width: 100%;
  max-width: 37.5rem;
  height: 15rem;
  padding: 0 2rem;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: dodgerblue;
  border-radius: 1rem;

  ${onLarge} {
    max-width: 50rem;
  }
`
export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;
`
export const Right = styled.div`
  flex: 2;
  /* background-color: beige; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 3rem;
  margin-right: 1rem;
`
export const Cover = styled(StaticImage)`
  width: 50%;
  height: 50%;
`
export const Title = styled.div`
  font-size: 2rem;
`
export const Singer = styled.div`
  font-size: 1.6rem;
`
export const Duration = styled.div`
  font-size: 1.2rem;
  align-self: flex-end;
`
export const Progress = styled.div`
  width: 100%;
  height: 2px;
  margin: 1rem 0;
  border-radius: 1rem;
  background-color: ${COLORS.GRAY_020};
`
export const Filled = styled.div`
  width: 30%;
  border-radius: 1rem;
  background-color: ${COLORS.GRAY_030};
`
export const Controls = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const PrevButton = styled.div``
export const NextButton = styled.div``
export const Playbutton = styled.div``
