import styled from '@emotion/styled'
import { COLORS } from 'constants/colors'
import { GatsbyImage } from 'gatsby-plugin-image'

export const Container = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 20px;
  margin: 1rem 0;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 13px rgba(0, 0, 0, 0.5);
  }
`
export const Thumbnail = styled(GatsbyImage)`
  width: 100%;
  height: 200px;
`

export const Title = styled.h1`
  margin: 10px 0;
`
export const Date = styled.div`
  color: #bdc3c7;
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

export const Overview = styled.p`
  font-size: 1.1rem;
`
