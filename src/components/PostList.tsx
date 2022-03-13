import PostListItem from './PostListItem'
import styled from '@emotion/styled'
import useQueryPosts from 'hooks/useQueryPosts'
import React from 'react'

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;

  margin-top: 2rem;
`

const PostList = () => {
  const posts = useQueryPosts()

  return (
    <Container>
      {posts.map(post => (
        <PostListItem key={post.node.id} title={post.node.frontmatter.title} />
      ))}
    </Container>
  )
}

export default PostList
