import React, { useState, useEffect } from 'react';
import '../../styles/notice/dataInfo.scss';
import SubBanner from '../../components/common/SubBanner/index';
import subBg from '../../img/notice/notice_sub_bg@2x.png';
import mnaInvestmentData from '../../db/m&a-investList.json';
import InfoList from '../../components/Notice/InfoList';

const DataInfo = () => {
  const title = 'ZETA PLAN만의 <br />다양하고 전문적인 정보를 제공해드립니다'

  const [dataList, setDataList] = useState([]);
  const [showNum, setShowNum] = useState(3);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(()=> {
    setDataList(mnaInvestmentData);
  }, [])


  const showMoreData = () => {
    setShowNum((showNum) => { return (showNum += 3) })
  }

  return (
    <div>
      <SubBanner title={title} img={subBg} />
      <div className='dataInfoInner'>
        <div className='infoTitleBox'>
          <h2 className='infoTitle'>자료</h2>
          <div className='infoTabList'>
            <li onClick={() => setSelectedIndex(0)}>M&A・투자정보</li>
            <li onClick={() => setSelectedIndex(1)}>정부지원사업 참여 모집</li>
            <li onClick={() => setSelectedIndex(2)}>정책자금 / 기업지원정보</li>
            <li onClick={() => setSelectedIndex(3)}>기술거래리스트</li>
            <li onClick={() => setSelectedIndex(4)}>컨설팅 실적</li>
          </div>
        </div>
        <div className='infoSearchCon'>
          <span>총{dataList.length}개</span>
          <div className='infoSearchBox'>
            <input className="infoInput" type="search" placeholder='검색어를 입력하세요' />
            <span className='infomagnifier'></span>
          </div>

        </div>
        <div className='dataInfoLiBox'>
          <InfoList />
          <InfoList />
          <InfoList />
          <InfoList />
          <InfoList />
          <InfoList />
        </div>
        <button className='infoMoreBtn' onClick={showMoreData}>더보기</button>
      </div>
    </div>
  );
};

export default DataInfo;