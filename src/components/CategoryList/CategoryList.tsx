import CategoryItem from './CategoryItem'
import * as S from './styles.list'

interface Props {
  categories: [string, number][]
}

const CategoryList = ({ categories }: Props) => {
  return (
    <S.Container>
      <S.Title>Tags</S.Title>
      {categories.map(([category, count]) => (
        <CategoryItem key={category} name={category} count={count} />
      ))}
    </S.Container>
  )
}

export default CategoryList
