import React from 'react';
import InfoSwiper from './InfoSwiper';
import { useNavigate, Link } from 'react-router-dom';
import '../../styles/main/information.scss';

const InformationList = () => {
  const navigate = useNavigate();
  const totalData = ['M&A・투자정보', '정부지원사업 참여 모집', '정책자금 / 기업지원정보', '기술거래 리스트', '컨설팅 실적', 'Q&A'];
  return (
    <>
      <div className='infoSwiperBoxList'>
        {
          totalData.map((item, index)=> {
            return <InfoSwiper key={index} data={totalData[index]} />
          })
        }
      </div>
      <Link to="/datainfo" className='mainInfoMoreBtn'>더보기</Link>
    </>
  );
};

export default InformationList;