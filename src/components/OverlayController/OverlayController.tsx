import * as S from './OverlayController.style'
import Pause from 'components/Icons/Pause'
import Play from 'components/Icons/Play'
import Stop from 'components/Icons/Stop'

interface Props {
  status: 'play' | 'pause' | 'stop'
}

function OverlayController({ status }: Props) {
  return (
    <S.Container>
      {status === 'play' && <Play />}
      {status === 'pause' && <Pause />}
      {status === 'stop' && <Stop />}
    </S.Container>
  )
}

export default OverlayController
