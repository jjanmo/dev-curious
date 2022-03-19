import styled from '@emotion/styled'
import { COLORS } from 'constants/colors'

export const Container = styled.button<{ isActive: boolean }>`
  all: unset;
  font-size: 1rem;
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 400)};
  width: 100%;
  padding: 0.5rem;
  margin: 0.2rem 0;
  border-radius: 0.5rem;
  color: ${COLORS.BLUE_01};
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: rgba(10, 145, 170, 0.2);
  }
`
