import PostListItem from './PostListItem'
import styled from '@emotion/styled'
import useQueryPosts from 'hooks/useQueryPosts'
import React from 'react'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 2rem 0;
`

const PostList = () => {
  const postList = useQueryPosts()
  const newPostList = [...postList, ...postList, ...postList] // tmp data

  return (
    <Container>
      {newPostList.map(post => (
        <PostListItem key={post.node.id} {...post} />
      ))}
    </Container>
  )
}

export default PostList
