import { Global, css } from '@emotion/react'
import { COLORS } from 'constants/colors'

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap');

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
    font-family: 'IBM Plex Sans', sans-serif;
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
