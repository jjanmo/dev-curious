import { COLORS } from 'constants/colors'

interface StopProps {
  size?: number
  fill?: string
}

export default function Stop({ size = 50, fill = COLORS.PURPLE_010 }: StopProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16">
      <rect x={1} y={1} width={14} height={14} rx={2} fill={fill} />
    </svg>
  )
}
