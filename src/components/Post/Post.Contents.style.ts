import styled from '@emotion/styled'
import { COLORS } from 'constants/colors'

// Post Renderer Style (markdown style)
export const Contents = styled.div`
  width: 100%;
  word-break: break-all;

  // Markdown Style
  font-size: 1.7rem;
  line-height: 1.7;

  // Apply Padding Attribute to All Elements
  p {
    padding: 3px 0;
  }

  // Adjust Heading Element Style
  h1,
  h2,
  h3 {
    font-weight: 700;
    margin-bottom: 2rem;
  }

  * + h1,
  * + h2,
  * + h3 {
    margin-top: 3rem;
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 0;
  }

  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 2rem;
  }

  // Adjust Quotation Element Style
  blockquote {
    margin: 1rem 0;
    padding: 5px 15px;
    border-left: 4px solid ${COLORS.PURPLE_020};
    background-color: #f8f9fa;
  }

  // Adjust List Element Style
  ol,
  ul {
    margin-left: 2rem;
  }

  // Adjust Horizontal Rule style
  hr {
    border: 1px solid ${COLORS.GRAY_030};
    margin: 5rem 0;
  }

  // Adjust Link Element Style
  a {
    color: ${COLORS.PURPLE_020};
  }

  // Adjust Code Style
  pre[class*='language-'] {
    margin: 1rem 0;
    padding: 15px;
    font-size: 1.6rem;

    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 3px;
    }
  }

  code[class*='language-'],
  pre[class*='language-'] {
    tab-size: 2;
    background-color: ${COLORS.GREEN_030};
    color: ${COLORS.GRAY_040};
  }
`
