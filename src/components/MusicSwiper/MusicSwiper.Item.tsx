import * as S from './MusicSwiper.style'
import { useEffect, useState } from 'react'

interface Props {
  title: string
  singer: string
  url: string
}

function MusicSwiperItem({ title, singer, url }: Props) {
  const [audio] = useState(new Audio(url))
  const [playing, setPlaying] = useState(false)

  const toggle = () => setPlaying(!playing)

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
