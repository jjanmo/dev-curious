/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Fly from '../../assets/musics/fly.mp3'
import Gostan from '../../assets/musics/gostan.mp3'
import HallOfFame from '../../assets/musics/hall-of-fame.mp3'
import JustGetAway from '../../assets/musics/just-get-away.mp3'
import Promesses from '../../assets/musics/promesses.mp3'
import RunningInTheSky from '../../assets/musics/running-in-the-sky.mp3'
import Sunset from '../../assets/musics/sunset.mp3'
import Superman from '../../assets/musics/superman.mp3'
import WeAreOne from '../../assets/musics/we-are-one.mp3'

interface SongType {
  title: string
  singer: string
  url: string
}

export const PlayList: SongType[] = [
  { title: '날아', singer: '이승열', url: Fly },
  { title: 'Gostan', singer: 'Klanga', url: Gostan },
  { title: 'Hall Of Fame', singer: 'The Script', url: HallOfFame },
  { title: '괜찮아 떠나', singer: 'Sweet Sorrow', url: JustGetAway },
  { title: 'Promesses', singer: 'DIMMI', url: Promesses },
  { title: '하늘을 달리다', singer: '이적', url: RunningInTheSky },
  { title: 'Sunset', singer: 'Ehrling', url: Sunset },
  { title: 'Superman', singer: 'Joe Brooks', url: Superman },
  { title: 'We Are One', singer: 'Kelly Sweet', url: WeAreOne },
]
