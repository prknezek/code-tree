import React, { useState } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import { isDesktop } from 'react-device-detect';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './cardswiper.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const numSlides = 5;
const colors = ['#ef476f', '#ffd166', '#06d6a0', '#118ab2', '#c8b6ff'];
const lessonTitles = ['Big-O Notation', 'Recursion', 'Dynamic Programming', 'Greedy Algorithms', 'Graph Theory'];

export default function CardSwiper() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div id='lesson-swiper-container'>
      <Swiper 
        loop={true}
        speed={1200}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3200,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        onSlideChange={handleSlideChange}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={
          {
            480: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 30,
            }
          }
        }
      >
        {/* Create numSlides SwiperSlide elements */}
        {[...Array(numSlides).keys()].map((index) => (
          <SwiperSlide 
            key={index} 
            className={
              `${isDesktop ? 'swiper-no-swiping' : ''}
               ${index === activeIndex ? 'scale-up-center' : 'scale-down-center'}
               lesson-slide`
            }
            style={{ backgroundColor: colors[index], userSelect: 'none'}}
          >
            <div className='card bg-transparent h-100'>
              <img src={require('../../assets/imgs/logo.png')} className='card-img-top' alt='descriptive text'></img>
              <div className='card-body'>
                <h5 className='card-title'>{lessonTitles[index]}</h5>
                <p className='card-text'>This is a lesson on {lessonTitles[index]}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
