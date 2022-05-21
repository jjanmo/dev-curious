import * as S from './MusicSwiper.style'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Swiper, SwiperSlide } from 'swiper/react'

function MusicSwiper() {
  return (
    <S.Wrapper>
      <S.Container>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          onSwiper={swiper => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {[1, 2, 3, 4, 5, 6].map(item => (
            <SwiperSlide>
              <S.Item key={item}>{item}</S.Item>
            </SwiperSlide>
          ))}
        </Swiper>
      </S.Container>
    </S.Wrapper>
  )
}

export default MusicSwiper
