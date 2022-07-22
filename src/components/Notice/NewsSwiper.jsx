import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Autoplay} from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import thumbnail from '../../img/notice/notice_thumbnail.png';
import { useNavigate } from 'react-router-dom';

const NewsSwiper = ({items, selectedIndex}) => {
  
  const navigate = useNavigate();
 
  const [selectNum, setSelectNum] = useState(0);

  const getClassName = (selectedNum) => {
    setSelectNum(selectedNum);
  }

  const getSelectedIndex = () => {
    switch (selectedIndex) {
    case 0:
      return 'news';
    case 1:
    default:
      return 'column';
    }
  };


  const navigationBtn = {
    nextEl: '.next',
    prevEl: '.prev',
  };

  return (
    <div>
      <Swiper className='newsSwiper'
        modules={[Navigation, Autoplay]}
        navigation={navigationBtn}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        breakpoints={{
          1500:{
            slidesPerView: 1
          },
          1300:{
            slidesPerView: 1
          },
          1200: {
            slidesPerView: 1
          },
          950: {
            slidesPerView: 1
          },

          
          900: {
            slidesPerView: 1
          },
          600: {
            slidesPerView: 1
          },
          400: {
            slidesPerView: 1
          },
          100: {
            slidesPerView: 1
          },
        }}
      >
        {
          items.map((item)=> {
            return (
              <SwiperSlide key={item.id}>
                <div className='newsContainer' onClick={()=> navigate(`/news/${getSelectedIndex()}/${item.id}`)}>
                  <div className='newsContentBox'>
                    <p className='newsTitle'>{item.title}</p>
                    <div className='newsSummary' dangerouslySetInnerHTML={{__html: item.content}}></div>
                    <p className='newsCreated'>{item.createdAt}</p>
                  </div>
                  {
                    item.img.length === 0 ? <div className="slideImgThumb"><img className='thumbnail' src={thumbnail} alt="뉴스 칼럼 대표 이미지" /></div> : <div className="slideImgThumb"><img className='thumbnail' src={item.img} alt="" /></div>
                  }

                </div> 
              </SwiperSlide>
            )})
        }
        
        <div className="swiperBtnBox">
          <div className={selectNum === 0 ? 'prevBtnBox active' : 'prevBtnBox'} onClick={()=> getClassName(0)}>
            <button type='button' className='prev'>Prev</button>
          </div>
          <div className={selectNum === 1 ? 'nextBtnBox active' : 'nextBtnBox'} onClick={()=> getClassName(1)}>
            <button type='button' className='next'>Next</button>
          </div>
        </div> 
      </Swiper>
    </div>
  );
};


export default NewsSwiper;