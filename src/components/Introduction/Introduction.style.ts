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
  font-size: 3rem;
  font-weight: bold;
  line-height: 1.5;
`
export const MyMotto = styled.div`
  color: ${COLORS.GRAY_030};
  font-size: 2rem;
`
export const Links = styled.div`
  padding: 1rem 4rem;
  border-top: 1px solid ${COLORS.GRAY_010};
  width: 100%;
  height: 4rem;

  & svg {
    margin-right: 2rem;
  }
`
