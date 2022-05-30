import { COLORS } from 'constants/colors'

interface Props {
  size?: number
  direction: 'prev' | 'next'
  fill?: string
}

const Jump = ({ direction, size = 36, fill = COLORS.GREEN_020 }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d={
        direction === 'next'
          ? 'M12.8 10.6c-1-.7-2.3 0-2.3 1.2v12.4c0 1.2 1.3 2 2.3 1.2l9.3-6.2c1-.5 1-1.9 0-2.4l-9.3-6.2Z'
          : 'M23.2 10.6c1-.7 2.3 0 2.3 1.2v12.4c0 1.2-1.3 2-2.3 1.2l-9.3-6.2c-1-.5-1-1.9 0-2.4l9.3-6.2Z'
      }
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d={
        direction === 'next'
          ? 'M24 9c.8 0 1.5.7 1.5 1.5v15a1.5 1.5 0 0 1-3 0v-15c0-.8.7-1.5 1.5-1.5Z'
          : 'M12 9c-.8 0-1.5.7-1.5 1.5v15a1.5 1.5 0 0 0 3 0v-15c0-.8-.7-1.5-1.5-1.5Z'
      }
      fill={fill}
    />
  </svg>
)
export default Jump
