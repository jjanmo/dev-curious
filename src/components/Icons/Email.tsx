import { COLORS } from 'constants/colors'

interface Props {
  width: number
  height: number
  isHover: boolean
}

function Email({ width, height, isHover }: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="50 50 150 150"
      fill={isHover ? COLORS.BLACK : COLORS.GRAY_02}
    >
      <path d="M187.5 91.5v-5.3c0-5.5-4.5-9.9-10-9.9h-105c-5.5 0-10 4.4-10 9.9v5.3l62.5 50 62.5-50zM62.6 99.1v68.8l34.6-41.1z" />
      <path d="m125 149.4-23.6-18.9-36.3 43.2h119.8l-36.3-43.2zM187.4 167.9V99.1l-34.6 27.7z" />
    </svg>
  )
}
export default Email
