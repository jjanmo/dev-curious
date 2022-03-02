import { Global, css } from '@emotion/react'

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Nanum Gothic', sans-serif;
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
