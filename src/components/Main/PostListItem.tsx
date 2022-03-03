import styled from '@emotion/styled'
import React from 'react'

type Props = {
  title: string
  categories: string[]
  image: string
  date: string
  overview: string
}

const Container = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 13px rgba(0, 0, 0, 0.5);
  }
`
const Thumbnail = styled.img`
  width: 100%;
  height: 200px;
`
const Title = styled.h1`
  margin: 10px 0;
`
const Date = styled.div`
  color: #bdc3c7;
`

const CategoryWrapper = styled.div`
  display: flex;
  margin: 10px 0;

  & > div {
    padding: 5px 10px;
    border-radius: 5px;
    margin-right: 5px;
    background-color: #01a3a4;
    color: white;
  }
`

const Overview = styled.p`
  font-size: 1.1rem;
`

const PostListItem = ({ title, categories, image, date, overview }: Props) => {
  return (
    <Container>
      <Thumbnail src={image} />
      <Title>{title}</Title>
      <Date>{date}</Date>
      <CategoryWrapper>
        {categories.map((category, index) => (
          <div key={index}>{category.toUpperCase()}</div>
        ))}
      </CategoryWrapper>
      <Overview>{`${overview.slice(0, 150)}...`}</Overview>
    </Container>
  )
}

export default PostListItem
