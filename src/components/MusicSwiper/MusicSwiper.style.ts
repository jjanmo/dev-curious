import styled from '@emotion/styled'
import { COLORS } from 'constants/colors'

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 76.8rem;
  height: 22rem;
  margin: 5rem auto 0;
`
export const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  .swiper-wrapper {
  }
  .swiper-button-prev {
    /* position: absolute;
    left: 0; */
  }
  .swiper-button-next {
    /* position: absolute;
    right: 0; */
  }
  .swiper-pagination {
  }
`
export const ItemContainer = styled.div`
  width: 18rem;
  height: 15rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.GRAY_010};
`
export const Title = styled.div`
  font-size: 2rem;
`
export const Singer = styled.div`
  font-size: 1.5rem;
`
