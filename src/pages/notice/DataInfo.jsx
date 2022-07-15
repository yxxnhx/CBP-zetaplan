import React, {useState, useEffect} from 'react';
import '../../styles/notice/dataInfo.scss';
import SubBanner from '../../components/common/SubBanner/index';
import subBg from '../../img/notice/notice_sub_bg@2x.png';
import mnaInvestmentData from '../../db/m&a-investList.json';
import InfoList from '../../components/Notice/InfoList';

const DataInfo = () => {
  const title= 'ZETA PLAN만의 <br />다양하고 전문적인 정보를 제공해드립니다'

  const [dataList, setDataList] = useState([]);
  const [showNum, setShowNum] = useState(3);

  useEffect(()=> {
    setDataList(mnaInvestmentData.reverse());
  }, [])


  const showMoreData = () => {
    setShowNum((showNum) => { return (showNum += 3)})
  }

  // const showData = dataList.filter((data, index) => {
  //   return (index < showNum)
  // })


  const onClickTab = () => {

  };

  return (
    <div>
      <SubBanner title={title} img={subBg} />
      <div className='dataInfoInner'>
        <div className='infoTitleBox'>
          <h2 className='infoTitle'>자료</h2>
          <div className='infoTabList'>
            <li onClick={onClickTab}>M&A・투자정보</li>
            <li onClick={onClickTab}>정부지원사업 참여 모집</li>
            <li onClick={onClickTab}>정책자금 / 기업지원정보</li>
            <li onClick={onClickTab}>기술거래리스트</li>
            <li onClick={onClickTab}>컨설팅 실적</li>
          </div>
        </div>
        <div className='infoSearchBox'>
          <span>총 232개</span>
          <input type="search" placeholder='검색어를 입력하세요' />
        </div>
        <div className='dataInfoLiBox'>
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