import PostListItem from './PostListItem'
import * as S from './styles.list'
import React from 'react'
import { PostType } from 'types/posts'

interface Props {
  posts: PostType[]
}

const PostList = ({ posts }: Props) => {
  return (
    <S.Container>
      {posts.map((post: PostType) => (
        <PostListItem key={post.id} {...post} />
      ))}
    </S.Container>
  )
}

export default PostList
