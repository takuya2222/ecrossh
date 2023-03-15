import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css/bundle";

export default function Slider() {
  SwiperCore.use([Autoplay, Navigation, Pagination]);
  return (
    <>
      <div>
        <Swiper
          slidesPerView={1}
          navigation
          pagination={{ type: "progressbar" }}
          effect="fade"
          modules={[EffectFade]}
          autoplay={{ delay: 3000 }}
        >
          <SwiperSlide>
            <img src="pic1.jpg" alt="1" className="w-full h-[550px]" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="pic2.jpg" alt="2" className="w-full h-[550px]" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="" alt="3" className="w-full h-[550px]" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="" alt="4" className="w-full h-[550px]" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
