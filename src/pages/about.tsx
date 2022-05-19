import * as CS from './common.style'
import styled from '@emotion/styled'
import Layout from 'components/Layout'
import { COLORS } from 'constants/colors'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const About = () => {
  return (
    <Layout>
      <CS.Main>
        <Container>
          <ImageWrapper>
            <StaticImage src={'../assets/default_avatar.png'} alt="avatar" />
          </ImageWrapper>
          <MyInfo>
            <MyName>JJanmo</MyName>
            <MyMotto>
              눈길을 걸어갈 때 어지럽게 걷지 말기를.
              <br />
              오늘 내가 걸어간 길이 훗날 다른 사람의 이정표가 되리니.
            </MyMotto>
          </MyInfo>
        </Container>
      </CS.Main>
    </Layout>
  )
}

export default About

export const Container = styled.div`
  display: flex;
  justify-content: center;
`
export const ImageWrapper = styled.div`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  margin-right: 5rem;
`
export const MyInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const MyName = styled.div`
  margin-bottom: 0.5rem;
  font-size: 3rem;
  font-weight: bold;
`
export const MyMotto = styled.div`
  color: ${COLORS.GRAY_030};
  font-size: 1.8rem;
  line-height: 2.6rem;
`
