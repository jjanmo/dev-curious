import styled from '@emotion/styled'
import { COLORS } from 'constants/colors'

export const Container = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 8rem;
  display: flex;
  align-items: center;
  box-shadow: 10px 10px 12px 0 rgba(0, 0, 0, 0.07);
  background-color: ${COLORS.GRAY_010};
`
export const Logo = styled.div`
  flex: 1;
  max-width: 25rem;
  padding-left: 5rem;
  font-weight: bold;
  font-size: 3rem;
`
export const Navigation = styled.ul`
  flex: 2;
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
`
export const Item = styled.li`
  width: 15rem;
  padding: 1rem 1.5rem;
  margin: 0 2rem;
  border-radius: 3rem;
  transition: all 0.4s ease-in-out;
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
  &:hover {
    box-shadow: inset 5px 5px 15px #d5d2d0, inset -5px -5px 15px #ffffff;
    color: ${COLORS.GRAY_020};
  }
`

export const Weather = styled.div``
