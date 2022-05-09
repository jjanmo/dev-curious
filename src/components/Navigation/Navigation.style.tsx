import styled from '@emotion/styled'

export const Container = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
`
export const Item = styled.li`
  width: 15rem;
  padding: 1rem 1.5rem;
  border-radius: 3rem;
  transition: all 0.4s ease-in-out;
  & a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 2.2rem;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  }
`
