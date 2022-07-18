import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './../../styles/main/NewsColumn.scss';
import { Link } from 'react-router-dom';
//import { useState } from 'react';
import newsColumnImg from '../../img/zeta/people/people_03lim.png';
import newsColumnImg2 from '../../img/zeta/people/people_01kim.png';


const NewsColumn = () => {
  const navigationBtn = {
    nextEl: '.prev',
    prevEl: '.next',
  };

  
  return (
    <div>
      <div className="mainNewsColumn">
        <div className='NewsColumnTitle'>
          <h1>NEWS & COLUMN</h1>
          <Link to='/news' className='newsColumnMore'>더보기</Link>
        </div>
        <div className="newsColumBox">
          <div className='newsColumnTab'>
            <button>ALL</button>
            <button>NEWS</button>
            <button>COLUMN</button>
          </div>
          <Swiper className='mySlider'
            modules={[Navigation, Pagination]}
            navigation={navigationBtn}
            loop={true}
            spaceBetween={0}
            slidesPerView={3}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              {
                <div>
                  <div className="newsColumnBtn">
                    <button type='button' className='prev'>Prev</button>
                    <button type='button' className='next'>Next</button>
                  </div>
                  <div className='NewsColumnContent'>
                    <img src={newsColumnImg} alt="" className='newsColumnImg'/>
                    <img src={newsColumnImg} alt="" className='newsColumnImg'/>
                    <img src={newsColumnImg} alt="" className='newsColumnImg'/>
                    <img src={newsColumnImg} alt="" className='newsColumnImg'/>
                    <img src={newsColumnImg} alt="" className='newsColumnImg'/>
                  </div>
                </div>
              }
            </SwiperSlide> 
            <SwiperSlide>
              {
                <div>
                  <div className="newsColumnBtn">
                    <button type='button' className='prev'>Prev</button>
                    <button type='button' className='next'>Next</button>
                  </div>
                  <div className='NewsColumnContent'>
                    <img src={newsColumnImg2} alt="" className='newsColumnImg'/>
                    <img src={newsColumnImg2} alt="" className='newsColumnImg'/>
                    <img src={newsColumnImg2} alt="" className='newsColumnImg'/>
                    <img src={newsColumnImg2} alt="" className='newsColumnImg'/>
                    <img src={newsColumnImg2} alt="" className='newsColumnImg'/>
                  </div>
                </div>
              }
            </SwiperSlide> 
            <SwiperSlide>
              {
                <div>
                  <div className="newsColumnBtn">
                    <button type='button' className='prev'>Prev</button>
                    <button type='button' className='next'>Next</button>
                  </div>
                  <div className='NewsColumnContent'>
                    <img src={newsColumnImg} alt="" className='newsColumnImg'/>
                    <img src={newsColumnImg} alt="" className='newsColumnImg'/>
                    <img src={newsColumnImg} alt="" className='newsColumnImg'/>
                    <img src={newsColumnImg} alt="" className='newsColumnImg'/>
                    <img src={newsColumnImg} alt="" className='newsColumnImg'/>
                  </div>
                </div>
              }
            </SwiperSlide> 
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default NewsColumn;