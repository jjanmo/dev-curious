import { COLORS } from './../../constants/colors'
import styled from '@emotion/styled'
import { GatsbyImage } from 'gatsby-plugin-image'

export const Wrapper = styled.div`
  max-width: 76.8rem;
  width: 100%;
  min-height: calc(100vh - 8rem);
  margin: 2rem auto;

  background-color: ${COLORS.WHITE};
  border-radius: 10px;
  overflow: hidden;
`
export const HeaderSection = styled.header`
  margin: 5rem 0;
`

export const Title = styled.h1`
  font-size: 4.8rem;
  font-weight: 700;
  margin-bottom: 3.2rem;
`
export const Date = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: ${COLORS.GRAY_020};
`

export const CategoryContainer = styled.ul`
  display: flex;
  list-style: none;

  & li {
    padding: 0.5rem 1.5rem;
    margin-right: 1rem;
    color: ${COLORS.GREEN_020};
    border-radius: 2rem;
    border: 1px solid ${COLORS.GREEN_020};
    font-size: 1.6rem;
  }
`
export const Cover = styled(GatsbyImage)`
  width: 100%;
`
export const MainSection = styled.main`
  padding: 5rem 0;
`
