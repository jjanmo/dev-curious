import styled from '@emotion/styled'
import { COLORS } from 'constants/colors'

export const Container = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 40rem;

  list-style: none;
  font-size: 2rem;
  font-weight: bold;
  color: ${COLORS.WHITE};
  letter-spacing: 0.1rem;
  text-transform: uppercase;
`
