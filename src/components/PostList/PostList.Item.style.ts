import styled from '@emotion/styled'
import { COLORS } from 'constants/colors'
import { GatsbyImage } from 'gatsby-plugin-image'

export const Container = styled.li`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 3rem 6rem;
  margin: 1rem 0;
  border-radius: 6rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: inset 5px 5px 15px #d5d2d0, inset -5px -5px 15px #ffffff;
  }
`
export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`
export const Date = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${COLORS.GRAY_030};
`
export const Overview = styled.p`
  font-size: 1.5rem;
`
export const CategoryWrapper = styled.div`
  display: flex;
  margin: 10px 0;

  & > div {
    padding: 5px 10px;
    border-radius: 5px;
    margin-right: 5px;
    background-color: ${COLORS.BLUE_01};
    color: white;
  }
`
