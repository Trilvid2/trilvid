import React from 'react'
import './style.css'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
// import 'swiper/css/navigation';
import { Autoplay, FreeMode, Navigation } from 'swiper/modules';

const Partners = () => {
  return (
    <>
        
    <div className="partnerPg">

    <div className="space">
        <div className="why-choose-us-text-container">
            
            <h1>our most trusted<span className="underlined"> partners</span> </h1>
            <br />
            
        </div>
        </div>
            <br /><br />
        <br />

        <br />


    {/* <img src="service_bg.png" alt=""  className='svgBlockchain'/> */}
    <Swiper
      slidesPerView={5}
      spaceBetween={30}
      freeMode={true}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[Autoplay, FreeMode]}
      className="patSwiper"
    >     
      <SwiperSlide className='patSlide'>
           <img src="/1.png" alt="file not found" />
      </SwiperSlide>

      <SwiperSlide className='patSlide'>
           <img src="/2.png" alt="file not found" />
      </SwiperSlide>

      <SwiperSlide className='patSlide'>
           <img src="/7.png" alt="file not found" />
      </SwiperSlide>
      
      <SwiperSlide className='patSlide'>
           <img src="/2.png" alt="file not found" />
      </SwiperSlide>
      
      <SwiperSlide className='patSlide'>
           <img src="/3.png" alt="file not found" />
      </SwiperSlide>

      <SwiperSlide className='patSlide'>
           <img src="/4.png" alt="file not found" />
      </SwiperSlide>
      
      <SwiperSlide className='patSlide'>
           <img src="/5.png" alt="file not found" />
      </SwiperSlide>
      
      <SwiperSlide className='patSlide'>
           <img src="/6.png" alt="file not found" />
      </SwiperSlide>



    </Swiper>
    </div>
    <div className="spaceme"></div>
    </>
  )
}

export default Partners