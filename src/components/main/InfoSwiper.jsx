import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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

  const navigate = useNavigate();
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

  const getUrlByCate = () => {
    switch (data) {
    case 'M&A・투자정보':
      return '/datainfo/m&a-invest';
    case '정부지원사업 참여 모집':
      return '/datainfo/government-support';
    case '정책자금 / 기업지원정보':
      return '/datainfo/fund-support';
    case '기술거래 리스트':
      return '/datainfo/technology-trade';
    case '컨설팅 실적':
      return '/datainfo/consulting-list';
    case 'Q&A':
    default:
      return '/qna';
    }

  }

  return (
    <div className="infoSwipBox">
      <p className='infoSwiperTitle'>{data}</p>
      <Swiper
        pagination={{
          dynamicBullets: true,
          dynamicMainBullets: 3,
          clickable: true,
          horizontalClass: 'infoSwiperHorizontal'
        }}
        modules={[Pagination]}
        className="informationSlide"
      >
        {
          state.map((item, i)=> {
            return (
              <SwiperSlide key={i} onClick={() => {
                const url= getUrlByCate();
                navigate(`${url}/${item.id}`)

              }}>
                <InfoSwiperItem item={item} key={item.id} />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  );
};

export default React.memo(InfoSwiper);