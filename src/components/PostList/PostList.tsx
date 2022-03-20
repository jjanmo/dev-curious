import PostListItem from './PostListItem'
import * as S from './styles.list'
import { PostsSortingContext } from 'contexts/PostsSortingContext'
import React, { useContext } from 'react'
import { PostType } from 'types/posts'

const PostList = () => {
  const { posts } = useContext(PostsSortingContext)

  return (
    <S.Container>
      {posts.map((post: PostType) => (
        <PostListItem key={post.id} {...post} />
      ))}
    </S.Container>
  )
}

export default PostList
