import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './review.css'
import { BsQuote } from "react-icons/bs";
import { Autoplay, Pagination } from 'swiper/modules';

const Review = () => {
  return (
    <>
    <div className="reviewPg">
    {/* <Svg /> */}
    <img src="service_bg.png" alt=""  className='svgBlockchain'/>
    <Swiper
      spaceBetween={10}
      centeredSlides={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[Autoplay]}
      className="reSwiper"
    >
    <SwiperSlide className='reviewSlide'> 
        <div className="rvContainer">
            <div className='rvText'>

            <span className='rvicon'>
                <BsQuote />
            </span>
                <div className='inside'>
                    <p>
                    I found my dream remote job thanks to Magaworking! It was such an easy process and the platform provided everything I needed to succeed.
                    </p>
                    <span className='spanLine'></span>
                    <h4>jeremy ward</h4>
                </div>
            </div>

            <div className='rvImg'>
                <span className='rvProfile7'></span>
            </div>
        </div>
      </SwiperSlide>

     
      <SwiperSlide className='reviewSlide'> 
        <div className="rvContainer">
            <div className='rvText'>

            <span className='rvicon'>
                <BsQuote />
            </span>
            
                <div className='inside'>
                    <p>
                    Magaworking helped me land a role with better work-life balance and pay. It's the best decision I've ever made for my career!
                    </p>
                    <span className='spanLine'></span>
                    <h4>vicky</h4>
                </div>
            </div>

            <div className='rvImg'>
                <span className="rvProfile1"></span>
            </div>
        </div>
      </SwiperSlide>

      <SwiperSlide className='reviewSlide'> 
      <div className="rvContainer">
          <div className='rvText'>
            <span className='rvicon'>
          <BsQuote/>
            </span>
              <div className='inside'>
                  <p>
                  Great Experience so far with smooth customer service. Lots of instruments to trade on as well.

                  </p>
                  <span className='spanLine'></span>
                  <h4>Alex gorge</h4>
              </div>
          </div>

          <div className='rvImg'>
              <span className='rvProfile3'></span>
          </div>
      </div>
    </SwiperSlide>

    <SwiperSlide className='reviewSlide'> 
      <div className="rvContainer">
          <div className='rvText'>
            <span className='rvicon'>
          <BsQuote/>
            </span>
              <div className='inside'>
                  <p>
                  The resources and job listings on Magaworking are unmatched. I was able to find a flexible job that fits my lifestyle perfectly!
                  </p>
                  <span className='spanLine'></span>
                  <h4>David</h4>
              </div>
          </div>

          <div className='rvImg'>
              <span className='rvProfile2'></span>
          </div>
      </div>
    </SwiperSlide>

    <SwiperSlide className='reviewSlide'> 
      <div className="rvContainer">
          <div className='rvText'>
            <span className='rvicon'>
          <BsQuote/>
            </span>
              <div className='inside'>
                  <p>
                  Magaworking made it so easy to connect with top employers in my field. I secured a fantastic remote position within weeks!
                  </p>
                  <span className='spanLine'></span>
                  <h4>Daniel</h4>
              </div>
          </div>

          <div className='rvImg'>
              <span className='rvProfile5'></span>
          </div>
      </div>
    </SwiperSlide>

    <SwiperSlide className='reviewSlide'> 
      <div className="rvContainer">
          <div className='rvText'>
            <span className='rvicon'>
          <BsQuote/>
            </span>
              <div className='inside'>
                  <p>
                  I appreciate how Magaworking provides a wide range of job options, especially for remote work. Highly recommend this platform!

                  </p>
                  <span className='spanLine'></span>
                  <h4>Mike</h4>
              </div>
          </div>

          <div className='rvImg'>
              <span className='rvProfile6'></span>
          </div>
      </div>
    </SwiperSlide>
{/* 

    <SwiperSlide className='reviewSlide'> 
      <div className="rvContainer">
          <div className='rvText'>
            <span className='rvicon'>
          <BsQuote/>
            </span>
              <div className='inside'>
                  <p>
                  This is the second time I've used Magaworking, and once again, it helped me secure a position that fits perfectly with my schedule

                  </p>
                  <span className='spanLine'></span>
                  <h4> Chris K.
                  Seattle, WA</h4>
              </div>
          </div>

          <div className='rvImg'>
              <span className='rvProfile8'></span>
          </div>
      </div>
    </SwiperSlide>




    <SwiperSlide className='reviewSlide'> 
      <div className="rvContainer">
          <div className='rvText'>
            <span className='rvicon'>
          <BsQuote/>
            </span>
              <div className='inside'>
                  <p>
                  Magaworking's easy-to-use interface and extensive job database made my job search effortless. I found an amazing job!

                  </p>
                  <span className='spanLine'></span>
                  <h4> Brandon F.
                  Denver, CO</h4>
              </div>
          </div>

          <div className='rvImg'>
              <span className='rvProfile9'></span>
          </div>
      </div>
    </SwiperSlide>




    <SwiperSlide className='reviewSlide'> 
      <div className="rvContainer">
          <div className='rvText'>
            <span className='rvicon'>
          <BsQuote/>
            </span>
              <div className='inside'>
                  <p>
                  As a freelancer, Magaworking has been a great tool for finding consistent and rewarding projects. I'm a huge fan!

                  </p>
                  <span className='spanLine'></span>
                  <h4> Daniel H.
                  Los Angeles, CA</h4>
              </div>
          </div>

          <div className='rvImg'>
              <span className='rvProfile10'></span>
          </div>
      </div>
    </SwiperSlide>




    <SwiperSlide className='reviewSlide'> 
      <div className="rvContainer">
          <div className='rvText'>
            <span className='rvicon'>
          <BsQuote/>
            </span>
              <div className='inside'>
                  <p>
                  Magaworking has completely transformed my job search experience. I now have a role that I love and a great work-life balance.

                  </p>
                  <span className='spanLine'></span>
                  <h4>Rebecca W.
                  New York, NY</h4>
              </div>
          </div>

          <div className='rvImg'>
              <span className='rvProfile11'></span>
          </div>
      </div>
    </SwiperSlide> */}




    </Swiper>
    </div>
    </>
  )
}

export default Review