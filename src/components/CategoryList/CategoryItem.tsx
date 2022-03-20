import * as S from './styles.item'
import { Link } from 'gatsby'
import React from 'react'

type CategoryItemProps = {
  name: string
  count: number
  onClick: (e: Event) => void
  isActive: boolean
}

const CategoryItem = ({ name, count, onClick, isActive }: CategoryItemProps) => {
  return (
    <S.Container onClick={onClick} isActive={isActive}>
      <Link to={`/?category=${name}`} data-category={name}>
        {`#${name.toUpperCase()}(${count})`}
      </Link>
    </S.Container>
  )
}

export default CategoryItem
