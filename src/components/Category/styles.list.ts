import styled from '@emotion/styled'
import { COLORS } from 'constants/colors'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  margin: 2rem 0;
`
export const SubContainer = styled.ul`
  display: flex;
  flex-direction: column;
`

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;

  color: ${COLORS.GREY_01};
  margin: 1rem 0;
`
