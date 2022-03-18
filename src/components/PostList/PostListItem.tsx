import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { PostType } from 'types/posts'

const Container = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 20px;
  margin: 1rem 0;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 13px rgba(0, 0, 0, 0.5);
  }
`
const Thumbnail = styled(GatsbyImage)`
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

const PostListItem = ({
  node: {
    id,
    frontmatter: {
      title,
      categories,
      date,
      summary,
      thumbnail: {
        childImageSharp: { gatsbyImageData },
      },
    },
  },
}: PostType) => {
  return (
    <Link to={`/post/${id}`}>
      <Container>
        <Thumbnail image={gatsbyImageData} alt="thumbnail image" />
        <Title>{title}</Title>
        <Date>{date}</Date>
        <CategoryWrapper>
          {categories?.map((category, index) => (
            <div key={index}>{category.toUpperCase()}</div>
          ))}
        </CategoryWrapper>
        <Overview>{`${summary?.slice(0, 150)}...`}</Overview>
      </Container>
    </Link>
  )
}

export default PostListItem
