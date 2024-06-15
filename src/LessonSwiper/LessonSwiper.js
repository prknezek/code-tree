import React, { useState } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './lessonswiper.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const numSlides = 6;

export default function LessonSwiper() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <>
      <Swiper 
        slidesPerView={3}
        loop={true}
        speed={2000}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3200,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        onSlideChange={handleSlideChange}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* Create numSlides SwiperSlide elements */}
        {[...Array(numSlides).keys()].map((index) => (
          <SwiperSlide 
            key={index} 
            className={index === activeIndex ? 'scale-up-center' : 'scale-down-center'}>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
