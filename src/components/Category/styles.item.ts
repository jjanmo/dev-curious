import styled from '@emotion/styled'
import { COLORS } from 'constants/colors'

export const Container = styled.li<{ isActive: boolean }>`
  all: unset;
  font-size: 1rem;
  font-weight: ${({ isActive }) => (isActive ? 'bold' : 400)};
  width: 100%;
  height: 2.5rem;
  padding-left: 10px;
  margin: 0.1rem 0;
  border-radius: 0.5rem;
  color: ${COLORS.BLUE_01};
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: rgba(10, 145, 170, 0.2);
  }

  & > a {
    height: 100%;
    display: flex;
    align-items: center;
  }

  & > a::before {
    position: absolute;
    bottom: 0;
    left: 10px;

    content: '';
    width: ${({ isActive }) => (isActive ? '60%' : 0)};
    height: 2px;
    background-color: ${COLORS.BLUE_01};
    transition: 0.3s;
  }
`
