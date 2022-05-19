import yogaData from './json/yoga.json'
import styled from '@emotion/styled'
import Lottie, { AnimationItem } from 'lottie-web'
import { useEffect, useRef, useState } from 'react'

interface Props {
  type: string
}

const DATA: { [key: string]: any } = {
  yoga: yogaData,
}

function LottieIcon({ type }: Props) {
  const elem = useRef<HTMLDivElement>(null)
  const [isHover, setIsHover] = useState(false)
  let lottieItem = useState<AnimationItem | null>(null)[0]

  useEffect(() => {
    if (elem.current) {
      lottieItem = Lottie.loadAnimation({
        container: elem.current,
        renderer: 'svg',
        // loop: true,
        autoplay: isHover,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        animationData: DATA[type],
      })
    }

    return () => lottieItem?.destroy()
  }, [isHover])

  const handleToggle = () => {
    setIsHover(!isHover)
  }

  return <Container ref={elem} onClick={handleToggle}></Container>
}

export default LottieIcon

const Container = styled.div`
  cursor: pointer;
`
