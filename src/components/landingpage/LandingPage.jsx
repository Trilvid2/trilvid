import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Header from '../header/Header';
import { Link } from 'react-router-dom'

import './style.css';

import { Autoplay, Pagination } from 'swiper/modules';

const LandingPage = () => {
  return (
    <>
    <div className="landpagex">
      <Header />
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      autoplay={{
        delay: 15000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
      style={{
        "--swiper-pagination-color": "#EEB01F",
        "--swiper-pagination-bullet-inactive-color": "#999999",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "5px",
        "--swiper-pagination-bullet-horizontal-gap": "6px",
        "--swiper-pagination-bullet-width": "26px",
        "--swiper-pagination-bullet-height": "3px",
        "--swiper-pagination-bullet-border-radius": "0px"
      }}
    >
      <SwiperSlide className='slideContainer slide1'> 
        {/* <video 
        autoPlay 
        loop 
        muted 
        disablePictureInPicture
        // preload="metadata"
        poster="/bgf.jpg"
        // controlsList='nodownload noremoteplayback'
        className="background-video"
        >

          <source src="/D.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <div className="containerShade">

          {/* <div className='sideLine'></div> */}

          <div className='innerText'>
            <h1>
              Welcome to   
              <span className='emphasy'>Trilvid's Technology</span>
              Where innovation meets excellence
            </h1>
            <p> 
              Pioneering transformative solutions that empower businesses and shape the future. At Trilvids, we blend creativity with precision to deliver groundbreaking technologies for a better tomorrow.
            </p>

            <Link to='/#'>
            <button className='lpButton'>
              <svg
                aria-hidden="true"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
              Learn More
            </button>
            </Link>

          </div>

        </div>
      </SwiperSlide>
</Swiper>
    </div>
    </>
  )
}

export default LandingPage