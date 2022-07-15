import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Autoplay} from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './../../styles/main/Partners.scss';
import { useState, useEffect } from 'react';
import mainNetData from './../../db/network.json'


const Partners = () => {
  const [netData, setNetData] = useState([]);
  useEffect(()=>{
    setNetData(mainNetData);
  },[])

  const pagination = {
    el: '.pagination-box',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    }, }

  return (
    <div className='partner'>
      <div>
        <div className="parTitle">PARTNERS</div>
        <Swiper className='mySlider top'
          modules={[Navigation, Pagination, Autoplay]}
          navigation={true}
          pagination={pagination}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: true,
            pauseOnMouseEnter:true,
          }}
          spaceBetween={3}
          slidesPerView={7}
        >
          <div className="netLogoList">
            {
              netData.map((data, i) => {
                return (
                  <SwiperSlide>
                    <img src={require('./../../img/main/logo/'+netData[i].img)} alt='network' height="80rem" key={data.id} className="netLogo"/>
                  </SwiperSlide>
                )
              })
            }
          </div>  
        </Swiper>
      </div>
      <div>
        <Swiper className='mySlider'
          modules={[Navigation, Pagination, Autoplay]}
          navigation={true}
          pagination={pagination}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: true,
            pauseOnMouseEnter:true,
            reverseDirection:true,
          }}
          spaceBetween={3}
          slidesPerView={7}
        >
          <div className="netLogoList">
            {
              netData.map((data, i) => {
                return (
                  <SwiperSlide>
                    <img src={require('./../../img/main/logo/'+netData[i].img)} alt='network' height="80rem" key={data.id} className="netLogo"/>
                  </SwiperSlide>
                )
              })
            }
          </div>
        </Swiper>
      </div>
    
    </div>
  );
};

export default Partners;