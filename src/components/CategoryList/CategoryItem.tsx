import * as S from './styles.item'
import { Link } from 'gatsby'
import React, { useState } from 'react'

type CategoryItemProps = {
  name: string
  count: number
}

const CategoryItem = ({ name, count }: CategoryItemProps) => {
  const [isActive, setIsActive] = useState(false)

  const onClickToggle = () => {
    setIsActive(!isActive)
  }

  return (
    <S.Container onClick={onClickToggle} isActive={isActive}>
      <Link to={`/?category=${name}`}>{`#${name.toUpperCase()}(${count})`}</Link>
    </S.Container>
  )
}

export default CategoryItem
