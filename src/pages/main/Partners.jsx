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
          breakpoints={{
            1100: {
              slidesPerView:7,
              spaceBetween:3
            },
            1024: {
              slidesPerView:5,
              spaceBetween:3
            },
            900: {
              slidesPerView:4,
              spaceBetween:3
            },
            767 :{
              slidesPerView:4,
              spaceBetween:3
            },
            370: {
              slidesPerView:4,
              spaceBetween:2
            },
          }}
        >
          <div className="netLogoList">
            {
              netData.map((data, i) => {
                return (
                  <SwiperSlide key={data.id} >
                    <button>
                      <a href={data.link} target="_blank" rel="noreferrer">
                        <img src={require('./../../img/main/logo/'+netData[i].img)} alt='network' className="netLogo"/>
                      </a>
                    </button>
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
          breakpoints={{
            1100: {
              slidesPerView:7,
              spaceBetween:3
            },
            1024: {
              slidesPerView:5,
              spaceBetween:3
            },
            900: {
              slidesPerView:4,
              spaceBetween:3
            },
            767 :{
              slidesPerView:4,
              spaceBetween:3
            },
            370: {
              slidesPerView:4,
              spaceBetween:2
            },
          }}
        >
          <div className="netLogoList">
            {
              netData.map((data, i) => {
                return (
                  <SwiperSlide key={data.id} className='netLogos'>
                    <button>
                      <a href={data.link} target="_blank" rel="noreferrer">
                        <img src={require('./../../img/main/logo/'+netData[i].img)} alt='network' className="netLogo"/>
                      </a>
                    </button>
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

export default React.memo(Partners);