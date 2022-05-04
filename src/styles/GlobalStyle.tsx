import { Global, css } from '@emotion/react'
import { COLORS } from 'constants/colors'

const globalStyles = css`
  :root {
    font-size: 10px;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${COLORS.GRAY_010};
    color: ${COLORS.GRAY_040};
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
`

const GlobalStyles = () => {
  return <Global styles={globalStyles} />
}

export default GlobalStyles
