import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Autoplay} from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import thumbnail from '../../img/notice/notice_thumbnail.png';

const NewsSwiper = ({items}) => {
 
  const [selectNum, setSelectNum] = useState(0);

  const getClassName = (selectedNum) => {
    setSelectNum(selectedNum);
  }


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
        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: false,
        //   pauseOnMouseEnter: true,
        // }}
        spaceBetween={0}
        slidesPerView={1}
      >
        {
          items.map((item)=> {
            return (
              <SwiperSlide key={item.id}>
                <div className='newsContainer'>
                  <div className='newsContentBox'>
                    <p className='newsTitle'>{item.title}</p>
                    <p className='newsSummary' dangerouslySetInnerHTML={{__html: item.content}}></p>
                    <p className='newsCreated'>{item.createdAt}</p>
                  </div>
                  {
                    item.img.length === 0 ? <img className='thumbnail' src={thumbnail} alt="뉴스 칼럼 대표 이미지" style={{width: '900px', height: 'auto', maxHeight: '570px'}} /> : <img className='thumbnail' src={item.img} alt="" style={{width: '900px', height: 'auto', maxHeight: '570px'}} />
                  }
                  {/* <img className='newsThumbnail' src={item.img} alt={item.alt} style={{width: '900px', height: 'auto', maxHeight: '570px'}}/> */}
                </div> 
              </SwiperSlide>
            )})
        }
        
        <div className="swiperBtnBox">
          <div className={selectNum === 0 ? 'prevBtnBox active' : 'prevBtnBox'} onClick={(e)=> getClassName(0)}>
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