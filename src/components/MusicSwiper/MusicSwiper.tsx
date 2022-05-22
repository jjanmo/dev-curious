import MusicSwiperItem from './MusicSwiper.Item'
import * as S from './MusicSwiper.style'
import { PlayList } from './musicData'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
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
          threshold={10}
        >
          {PlayList.map((data, index) => (
            <SwiperSlide key={index}>
              <MusicSwiperItem {...data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </S.Container>
    </S.Wrapper>
  )
}

export default MusicSwiper
