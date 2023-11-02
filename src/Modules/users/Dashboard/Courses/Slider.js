import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import Chart from "./Chart";

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Chart />
        </SwiperSlide>
        <SwiperSlide>
          <Chart />
        </SwiperSlide>
        <SwiperSlide>
          <Chart />
        </SwiperSlide>
        <SwiperSlide>
          <Chart />
        </SwiperSlide>
        <SwiperSlide>
          <Chart />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
