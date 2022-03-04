import PostListItem from './PostListItem'
import styled from '@emotion/styled'
import React from 'react'

const postList = [
  {
    id: 0,
    title: 'Post Item 1',
    categories: ['web', 'react', 'javascript'],
    date: '2022.02.28',
    overview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, ut amet vero atque vel maiores tempora facere commodi, officiis fugit magni labore qui cupiditate ipsa earum? Officia tempore esse ipsa.',
  },
  {
    id: 1,
    title: 'Post Item 2',
    categories: ['web', 'design pattern'],
    date: '2022.03.01',

    overview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, ut amet vero atque vel maiores tempora facere commodi, officiis fugit magni labore qui cupiditate ipsa earum? Officia tempore esse ipsa.',
  },
  {
    id: 2,
    title: 'Post Item 3',
    categories: ['git', 'devops'],
    date: '2022.03.03',
    overview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, ut amet vero atque vel maiores tempora facere commodi, officiis fugit magni labore qui cupiditate ipsa earum? Officia tempore esse ipsa.',
  },
  {
    id: 4,
    title: 'Post Item 4',
    categories: ['nextjs', 'react'],
    date: '2022.03.04',
    overview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, ut amet vero atque vel maiores tempora facere commodi, officiis fugit magni labore qui cupiditate ipsa earum? Officia tempore esse ipsa.',
  },
]

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  margin-top: 2rem;
`

const PostList = () => {
  return (
    <Container>
      {postList.map(item => (
        <PostListItem key={item.id} {...item} />
      ))}
    </Container>
  )
}

export default PostList
