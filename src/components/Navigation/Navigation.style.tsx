import styled from '@emotion/styled'
import { COLORS } from 'constants/colors'

export const Container = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  max-width: 76.8rem;
  margin: 5rem auto;
`
export const Item = styled.li<{ current?: boolean }>`
  width: 15rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  & a {
    display: block;
    width: 100%;
    height: 100%;
    font-weight: 600;
    font-size: 2.2rem;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    text-align: center;
    color: ${COLORS.GRAY_040};

    &.active {
      color: ${COLORS.GREEN_020};
      border-bottom: solid 2px ${COLORS.GREEN_020};
    }
  }
`
