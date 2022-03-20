import CategoryItem from './CategoryItem'
import * as S from './styles.list'
import { useState } from 'react'

interface Props {
  categories: [string, number][]
}

const CategoryList = ({ categories }: Props) => {
  const [selected, setSelected] = useState('all')

  const onClick = (e: Event) => {
    const category = (e.target as HTMLElement).dataset.category
    setSelected(category)
  }

  return (
    <S.Container>
      <S.Title>Tags</S.Title>
      {categories.map(([category, count]) => (
        <CategoryItem
          key={category}
          name={category}
          count={count}
          onClick={onClick}
          isActive={selected === category ? true : false}
        />
      ))}
    </S.Container>
  )
}

export default CategoryList
