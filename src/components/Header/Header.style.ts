import styled from '@emotion/styled'
import { COLORS } from 'constants/colors'
import { Link } from 'gatsby'

export const Container = styled.header`
  width: 100%;
  height: 8rem;
  padding: 0 18rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const LogoText = styled.span`
  padding-bottom: 5px;
  font-family: 'Fira Mono', monospace;
  font-weight: 600;
  font-size: 2.5rem;
  color: ${COLORS.GREEN_020};
`
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SearchLink = styled(Link)`
  width: 5rem;
  height: 5rem;
  margin: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  &:hover {
    background-color: ${COLORS.GRAY_010};
  }
`
