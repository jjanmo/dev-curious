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
  padding: 1rem 1.5rem;
  transition: all 0.4s ease-in-out;
  color: ${({ current }) => (current ? COLORS.GREEN_020 : COLORS.BLACK)};
  border-bottom: ${({ current }) => (current ? `solid 2px ${COLORS.GREEN_020}` : `none`)};

  & a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 2.2rem;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
`
