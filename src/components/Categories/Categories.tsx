import * as React from 'react'
import * as S from './Categories.style'

const categories = ['all', 'javascript', 'next', 'react', 'web']

export default function Categories() {
  return (
    <S.Container>
      {categories.map((category, index) => (
        <S.Category key={index}>{category}</S.Category>
      ))}
    </S.Container>
  )
}
