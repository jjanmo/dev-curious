import styled from '@emotion/styled'
import { COLORS } from 'constants/colors'
import { StaticImage } from 'gatsby-plugin-image'

export const Container = styled.div`
  width: 40rem;
  height: 14rem;
  margin-left: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: dodgerblue;
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
  background-color: beige;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 2rem;
  margin-right: 2rem;
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
  margin-right: 2.2rem;
  font-size: 1.2rem;
  align-self: flex-end;
`
export const Progress = styled.div`
  width: 90%;
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
  display: flex;
  justify-content: center;
  align-items: center;
`
export const PrevButton = styled.div``
export const NextButton = styled.div``
export const Playbutton = styled.div``
