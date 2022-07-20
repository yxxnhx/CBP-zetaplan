import React, { useState, useEffect } from 'react';
import '../../styles/main/information.scss';
import mnaInvestmentData from '../../db/m&a-investList.json';
import govSupportData from '../../db/govSupportList.json';
import fundSupportData from '../../db/fund-supportList.json';
import techData from '../../db/technologyList.json';
import consultData from '../../db/consultingList.json';
import qnaData from '../../db/qna.json';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import InfoSwiperItem from './InfoSwiperItem';

const InfoSwiper = ({data}) => {

  const [state, setState] = useState([]);

  useEffect(()=> {
    setState(getDataByCate())
  }, [])


  const getDataByCate = () => {
    switch (data) {
    case 'M&A・투자정보':
      return mnaInvestmentData;
    case '정부지원사업 참여 모집':
      return govSupportData;
    case '정책자금 / 기업지원정보':
      return fundSupportData;
    case '기술거래 리스트':
      return techData;
    case '컨설팅 실적':
      return consultData;
    case 'Q&A':
    default:
      return qnaData;
    }
  }

  return (
    <div className="infoSwipBox">
      <p className='infoSwiperTitle'>{data}</p>
      <Swiper
        pagination={{
          dynamicBullets: true,
          dynamicMainBullets: 5,
          clickable: true,
        }}
        modules={[Pagination]}
        className="informationSlide"
      >
        {
          state.map((item)=> {
            return (
              <SwiperSlide key={item.id}>
                <InfoSwiperItem item={item} />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  );
};

export default InfoSwiper;