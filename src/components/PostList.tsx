import PostListItem from './PostListItem'
import styled from '@emotion/styled'
import { postList } from 'constants/dummy'
import React from 'react'

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
