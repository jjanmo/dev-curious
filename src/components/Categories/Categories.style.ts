import styled from 'styled-components'

export const Container = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  overflow-x: auto;
`
export const Category = styled.li`
  padding: 0.5rem 1rem;
  margin: 0;
  border: 1px solid #60a2dd;
  border-radius: 1rem;
  text-transform: uppercase;
  background-color: aliceblue;

  & + & {
    margin-left: 1rem;
  }
`
