import * as S from './Category.Item.style'
import { Link } from 'gatsby'
import React from 'react'

type CategoryItemProps = {
  name: string
  count: number
  isActive: boolean
}

const CategoryItem = ({ name, count, isActive }: CategoryItemProps) => {
  return (
    <S.Container isActive={isActive}>
      <Link to={`/?category=${name}`}>{`#${name.toUpperCase()}(${count})`}</Link>
    </S.Container>
  )
}

export default CategoryItem
