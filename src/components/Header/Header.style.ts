import styled from '@emotion/styled'
import { COLORS } from 'constants/colors'

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 90rem;
  height: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 10px 10px 12px 0 rgba(0, 0, 0, 0.07);
`
export const Logo = styled.div`
  width: 20rem;
  margin-left: 20rem;
  font-weight: 700;
  font-size: 3rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3), -2px -2px 4px ${COLORS.WHITE};
  color: ${COLORS.GRAY_020};
`
export const Navigation = styled.ul`
  width: 100%;
  margin-right: 10rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
`
export const Item = styled.li`
  width: 12rem;
  padding: 0.5rem 1.5rem;
  margin: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 1rem;
  box-shadow: 4px 4px 6px 0 rgba(0, 0, 0, 0.1), -4px -4px 6px ${COLORS.WHITE};
  transition: transform 0.2s ease-out;
  & > a {
    transition: color 0.2s ease-out;
    color: ${COLORS.GRAY_020};
  }
  &:hover {
    transform: scale(1.05);
    box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.1), -4px -4px 10px ${COLORS.WHITE};
    & > a {
      color: ${COLORS.RED_010};
    }
  }
`
