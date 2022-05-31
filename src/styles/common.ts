import { onLarge } from './mediaQuery'
import styled from '@emotion/styled'

export const Main = styled.main`
  max-width: 37.5rem;
  width: 100%;
  margin: auto;

  ${onLarge} {
    max-width: 76.8rem;
  }
`
