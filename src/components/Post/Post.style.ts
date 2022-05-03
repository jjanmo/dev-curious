import { COLORS } from './../../constants/colors'
import styled from '@emotion/styled'
import { GatsbyImage } from 'gatsby-plugin-image'

export const Wrapper = styled.div`
  max-width: 80rem;
  width: 100%;
  min-height: calc(100vh - 8rem);
  margin: 2rem auto;

  background-color: ${COLORS.WHITE};
  border-radius: 10px;
  overflow: hidden;
`
export const Cover = styled(GatsbyImage)`
  width: 100%;
  height: 200px;
`

export const HeaderSection = styled.header`
  padding: 3rem 6rem 0;
`
export const MainSection = styled.main`
  padding: 3rem 6rem 0;
`
export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
`
export const Date = styled.div``

export const CategoryContainer = styled.ul`
  display: flex;
  list-style: none;
  text-transform: uppercase;

  & li {
    margin-right: 1rem;
  }
`

export const Contents = styled.div``
