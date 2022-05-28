import { Contents } from './Post.Contents.style'
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
          childImageSharp: { gatsbyImageData: thumbnail },
        },
      },
    },
  } = props
  console.log(title, categories)

  return (
    <S.Wrapper>
      <S.HeaderSection>
        <S.Title>{title}</S.Title>
        <S.Date>{date}</S.Date>
        <S.CategoryContainer>
          {categories.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </S.CategoryContainer>
      </S.HeaderSection>
      {thumbnail && <S.Cover image={thumbnail} alt="thumbnail image" />}
      <S.MainSection>
        <Contents dangerouslySetInnerHTML={{ __html: html }} />
      </S.MainSection>
    </S.Wrapper>
  )
}

export default Post
