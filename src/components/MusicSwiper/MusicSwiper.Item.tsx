import * as S from './MusicSwiper.style'
import { useEffect, useState } from 'react'

interface Props {
  title: string
  singer: string
  url: string
}

function MusicSwiperItem({ title, singer, url }: Props) {
  const [audio] = useState(typeof Audio !== 'undefined' && new Audio(url))
  const [playing, setPlaying] = useState(false)

  const toggle = () => setPlaying(!playing)

  if (!audio) return null

  useEffect(() => {
    playing ? void audio.play() : void audio.pause()
    console.log(audio.duration / 60, audio.currentTime)
  }, [playing])

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false))
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false))
    }
  }, [])

  return (
    <S.ItemContainer onClick={toggle}>
      <S.Title>{title}</S.Title>
      <S.Singer>{singer}</S.Singer>
    </S.ItemContainer>
  )
}

export default MusicSwiperItem

//overlay controller
/**
 * 1) 상태 관리 : 플레이 멈춤 완전멈춤
 * 2) 볼륨 조절
 * 3) 위치 조정
 * 4)
 * 5) 새로고침시 이전 플레이위치 재생하기
 * 6)
 */
