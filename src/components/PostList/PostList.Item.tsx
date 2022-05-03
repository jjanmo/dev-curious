import * as S from './PostList.Item.style'
import { Link } from 'gatsby'
import React from 'react'
import { PostType } from 'types/posts'

const PostListItem = ({
  // id,
  title,
  slug,
  categories,
  date,
  summary,
  thumbnail: {
    childImageSharp: { gatsbyImageData },
  },
}: PostType) => {
  return (
    <Link to={`/post${slug}`}>
      <S.Container>
        {/* <S.Thumbnail image={gatsbyImageData} alt="thumbnail image" /> */}
        <S.Title>{title}</S.Title>
        <S.Date>{date}</S.Date>
        {/* <S.CategoryWrapper>
          {categories?.map((category, index) => (
            <div key={index}>{category.toUpperCase()}</div>
          ))}
        </S.CategoryWrapper> */}
        <S.Overview>{`${summary?.slice(0, 200)}...`}</S.Overview>
      </S.Container>
    </Link>
  )
}

export default PostListItem
