import { COLORS } from 'constants/colors'

interface Props {
  width: number
  height: number
  isHover: boolean
}

function Email({ width, height, isHover }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 400 200"
      fill={isHover ? COLORS.BLACK : COLORS.GRAY_02}
    >
      <g>
        <g>
          <path
            d="m45 51.648 45-27.845v-6.422a2.887 2.887 0 0 0-2.887-2.887H2.887A2.887 2.887 0 0 0 0 17.381v6.422l45 27.845z"
            transform="translate(1.964 1.964) scale(2.8008)"
          />
          <path
            d="M45.789 54.688c-.011.007-.023.008-.033.015a1.46 1.46 0 0 1-.253.111c-.04.014-.077.035-.118.046a1.494 1.494 0 0 1-.353.048c-.011 0-.021.004-.031.004h-.002c-.011 0-.021-.004-.031-.004a1.555 1.555 0 0 1-.353-.048c-.04-.011-.078-.032-.118-.046a1.494 1.494 0 0 1-.253-.111c-.011-.006-.023-.008-.033-.015L0 27.331V72.62a2.888 2.888 0 0 0 2.887 2.887h84.226A2.888 2.888 0 0 0 90 72.62V27.331L45.789 54.688z"
            transform="translate(1.964 1.964) scale(2.8008)"
          />
        </g>
      </g>
    </svg>
  )
}
export default Email
