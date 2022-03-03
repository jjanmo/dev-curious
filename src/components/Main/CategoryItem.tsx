import styled from '@emotion/styled'
import React, { useState } from 'react'

type CategoryItemProps = {
  text: string
  count: number
}

const Container = styled.button<{ isActive: boolean }>`
  all: unset;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 1rem;
  background-color: #f8f9fa;
  color: #0a91aa;
  cursor: pointer;
  position: relative;

  &::before {
    transition: 0.2s;
    content: '';
    position: absolute;
    bottom: 4px;
    left: 18px;
    width: ${({ isActive }) => (isActive ? '40%' : 0)};
    height: 3px;
    background-color: #0a91aa;
  }
  &::after {
    transition: 0.2s;
    content: '';
    position: absolute;
    bottom: 4px;
    right: 18px;
    width: ${({ isActive }) => (isActive ? '40%' : 0)};
    height: 3px;
    background-color: #0a91aa;
  }
`

const CategoryItem = ({ text, count }: CategoryItemProps) => {
  const [isActive, setIsActive] = useState(false)

  const onClickToggle = () => {
    setIsActive(!isActive)
  }

  return (
    <Container
      onClick={onClickToggle}
      isActive={isActive}
    >{`#${text.toUpperCase()}(${count})`}</Container>
  )
}

export default CategoryItem
