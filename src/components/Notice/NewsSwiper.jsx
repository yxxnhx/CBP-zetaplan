import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Autoplay} from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import thumbnail from '../../img/notice/notice_thumbnail.png';
import { useNavigate, useParams } from 'react-router-dom';

const NewsSwiper = ({items}) => {
  
  const navigate = useNavigate();
  const { category } = useParams();

  const [selectNum, setSelectNum] = useState(0);

  const getClassName = (selectedNum) => {
    setSelectNum(selectedNum);
  }

  const navigationBtn = {
    nextEl: '.next',
    prevEl: '.prev',
  };

  return (
    <div className="newsSwiperContainer">
      <Swiper className='newsSwiper'
        modules={[Navigation, Autoplay]}
        navigation={navigationBtn}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
      >
        {
          items.map((item)=> {
            return (
              <SwiperSlide key={item.id} >
                <div className='newsContainer' onClick={()=> navigate(`/news/${category}/${item.id}`)}>
                  <div className='newsContentBox'>
                    <p className='newsTitle darkText'>{item.title}</p>
                    <div className='newsSummary darkText' dangerouslySetInnerHTML={{__html: item.content}}></div>
                    <p className='newsCreated darkText'>{item.createdAt}</p>
                  </div>
                  {
                    item.img.length === 0 ? <div className="slideImgThumb"><img className='thumbnail' src={thumbnail} alt="뉴스 칼럼 대표 이미지" /></div> : <div className="slideImgThumb"><img className='thumbnail' src={item.img} alt="" /></div>
                  } 
                </div> 
              </SwiperSlide>
            )})
        }
        
        <div className="newsSwiperBtnBox">
          <div className={selectNum === 0 ? 'prevBtnBox active' : 'prevBtnBox'} onClick={()=> getClassName(0)}>
            <button type='button' className='prev'><span>Prev</span></button>
          </div>
          <div className={selectNum === 1 ? 'nextBtnBox active' : 'nextBtnBox'} onClick={()=> getClassName(1)}>
            <button type='button' className='next'><span>Next</span></button>
          </div>
        </div> 
      </Swiper>
    </div>
  );
};


export default NewsSwiper;