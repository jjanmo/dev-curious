import styled from '@emotion/styled'
import { COLORS } from 'constants/colors'

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10rem;
  box-shadow: 10px 10px 12px 0 rgba(0, 0, 0, 0.07);

  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Logo = styled.div`
  display: flex;
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3), -2px -2px 4px rgba(255, 255, 255, 1);
  color: ${COLORS.GRAY_020};
`
