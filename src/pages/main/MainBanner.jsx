import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Autoplay, EffectFade} from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './../../styles/main/MainBanner.scss';


const MainBanner = () => {
  const pagination = {
    el: '.pagination-box',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    }, }

  return (
    <div>
      <Swiper className='mySlider'
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation={true}
        effect={'fade'}
        pagination={pagination}
        loop={true} 
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={0}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div className="mainBanner">
            <img src={require('./../../img/main/banner/mainbanner01@2x.png')} alt="제타플랜" />
            <div className="mainTitle">
              <h1>ZETA PLAN</h1>
              <h2>ZETA PLAN은 모든 기업들의 <br /> 시작을 함께 합니다.</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mainBanner">
            <img src={require('./../../img/main/banner/mainbanner02@2x.png')} alt="제타플랜" />
            <div className="mainTitle">
              <h1>UNIVERSAL</h1>
              <h2>전 세계를 무대로 <br /> 더 큰 꿈을 키울 수 있도록 응원합니다.</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mainBanner">
            <img src={require('./../../img/main/banner/mainbanner03@2x.png')} alt="제타플랜" />
            <div className="mainTitle">
              <h1>DEVELOPMENT</h1>
              <h2>기업의 성장을 위해 <br /> 체계적인 컨설팅을 지원합니다.</h2>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};


export default MainBanner;