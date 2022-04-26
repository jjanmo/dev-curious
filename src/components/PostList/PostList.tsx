import Post from './PostList.Item'
import * as S from './PostList.style'
import { PostsSortingContext } from 'contexts/PostsSortingContext'
import React, { useContext } from 'react'
import { PostType } from 'types/posts'

const PostList = () => {
  const { posts } = useContext(PostsSortingContext)

  return (
    <S.Container>
      {posts.map((post: PostType) => (
        <Post key={post.id} {...post} />
      ))}
    </S.Container>
  )
}

export default PostList
