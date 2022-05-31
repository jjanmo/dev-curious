import styled from '@emotion/styled'
import { COLORS } from 'constants/colors'
import { onLarge } from 'styles/mediaQuery'

export const Container = styled.li`
  width: 100%;
  max-width: 60rem;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  list-style: none;
  cursor: pointer;

  ${onLarge} {
    padding: 0 2rem;
  }
`
export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;

  ${onLarge} {
    font-size: 3.2rem;
  }
`
export const Date = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${COLORS.GRAY_030};

  ${onLarge} {
    font-size: 1.8rem;
  }
`
export const Overview = styled.p`
  font-size: 1.5rem;

  ${onLarge} {
    font-size: 1.8rem;
  }
`
export const CategoryWrapper = styled.div`
  display: flex;
  margin: 10px 0;

  & > div {
    padding: 5px 10px;
    border-radius: 5px;
    margin-right: 5px;
  }
`
