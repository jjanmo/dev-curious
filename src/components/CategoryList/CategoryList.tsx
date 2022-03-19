import CategoryItem from './CategoryItem'
import * as S from './styles.list'
import { Categories } from 'types/posts'

interface Props {
  categories: Categories
}

const CategoryList = ({ categories }: Props) => {
  return (
    <S.Container>
      <S.Title>Tags</S.Title>
      {Object.entries(categories).map(([key, value]) => (
        <CategoryItem key={key} name={key} count={value} />
      ))}
    </S.Container>
  )
}

export default CategoryList
