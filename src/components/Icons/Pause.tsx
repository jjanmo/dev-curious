import { COLORS } from 'constants/colors'

interface PauseProps {
  size?: number
  fill?: string
}

export default function Pause({ size = 50, fill = COLORS.PURPLE_010 }: PauseProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <rect x={3} y={0} width={2.5} height={16} fill={fill} />
      <rect x={11} y={0} width={2.5} height={16} fill={fill} />
    </svg>
  )
}
