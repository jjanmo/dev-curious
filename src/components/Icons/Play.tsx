import { COLORS } from 'constants/colors'

interface PlayProps {
  size?: number
  fill?: string
}

export default function Play({ size = 16, fill = COLORS.GRAY_030 }: PlayProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M4 0l12 8l-12 8z" fill={fill} />
    </svg>
  )
}
