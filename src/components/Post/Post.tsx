import * as S from './Post.style'
import { RawPostType } from 'types/posts'

function Post(props: RawPostType) {
  const {
    node: {
      id,
      html,
      frontmatter: {
        title,
        summary,
        date,
        categories,
        thumbnail: {
          childImageSharp: { gatsbyImageData },
        },
      },
    },
  } = props

  return (
    <S.Wrapper>
      <S.Cover image={gatsbyImageData} alt="thumbnail image" />
      <S.HeaderSection>
        <S.Title>{title}</S.Title>
        <S.Date>{date}</S.Date>
        <S.CategoryContainer>
          {categories.map((item, index) => (
            <li key={index}>{`#${item}`}</li>
          ))}
        </S.CategoryContainer>
      </S.HeaderSection>
      <S.MainSection>
        <S.Contents dangerouslySetInnerHTML={{ __html: html }} />
      </S.MainSection>
    </S.Wrapper>
  )
}

export default Post
