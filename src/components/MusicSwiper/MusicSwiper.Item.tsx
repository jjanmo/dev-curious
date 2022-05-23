import * as S from './MusicSwiper.style'
import OverlayController from 'components/OverlayController'
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
      <OverlayController status={'play'} />
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
 * 3) 음악 위치 조정
 * 4) 하나의 음악만 재생되도록
 
 * Advanced
 * 5) 새로고침시 이전 플레이위치 재생하기 + 새로고침시 현재 플레이 슬라이더 보여주기
 * 6)
 */
