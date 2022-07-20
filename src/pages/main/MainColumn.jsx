import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import columnData from './../../db/column.json'
import { useState, useEffect } from 'react';
import './../../styles/main/NewsColumn.scss';
import thumbnail from '../../img/notice/notice_thumbnail.png';
import { useNavigate } from 'react-router-dom';



const MainColumn = () => {
  const navigate = useNavigate();

  const [columnDb, setColumnDb] = useState([]);
  useEffect(()=>{
    setColumnDb(columnData);
  }, [])

  const navigationBtn = {
    nextEl: '.prev',
    prevEl: '.next',
  };

  return (
    <div className='mainNCWrapper'>
      <Swiper className='mySlider mainNCSlide'
        modules={[Navigation, Pagination]}
        navigation={navigationBtn}
        loop={true}
        spaceBetween={100}
        slidesPerView={4}
      >
        <div className="allSliderArea">
          {
            columnDb.map((data, i) => {
              return (
                <SwiperSlide key={data.id}>
                  <div className="mainNClListBox" onClick={()=> navigate(`/news/column/${data.id}`)}>
                    <div className="mainNCTxt">
                      <div className="mainNCCategory">{data.category}</div>
                      <div className="mainNCTitle">{data.title}</div>
                      <div className="mainNCDate">{data.createdAt}</div>
                    </div>
                    <div className="mainNCDimmed"></div>
                    <div className="mainNCBg">
                      {
                        data.img.length === 0 ? <img className='thumbnail' src={thumbnail} alt="뉴스 칼럼 대표 이미지" /> : <img className='thumbnail' src={data.img} alt="" />
                      }
                    </div>
                  </div>
                </SwiperSlide>
              )
            })
          }
        </div>
        <div className="newsColumnBtn">
          <button type='button' className='prev'>Prev</button>
          <button type='button' className='next'>Next</button>
        </div>
      </Swiper>
      
    </div>
  );
};

export default MainColumn;