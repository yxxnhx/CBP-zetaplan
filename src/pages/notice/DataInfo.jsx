import React, { useState, useEffect } from 'react';
import '../../styles/notice/dataInfo.scss';
import SubBanner from '../../components/common/SubBanner/index';
import subBg from '../../img/notice/notice_sub_bg@2x.png';
import mnaInvestmentData from '../../db/m&a-investList.json';
import govSupportData from '../../db/govSupportList.json';
import fundSupportData from '../../db/fund-supportList.json';
import techData from '../../db/technologyList.json';
import consultData from '../../db/consultingList.json';
import InfoItem from '../../components/Notice/InfoItem';
import { useNavigate } from 'react-router-dom';

const DataInfo = ({ setHdSubStyle }) => {
  const title = 'ZETA PLAN만의 <br />다양하고 전문적인 정보를 제공해드립니다'

  const [filteredList, setFilteredList] = useState([]);
  const [showNum, setShowNum] = useState(6);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [dataList, setDataList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setShowNum(6);
    setDataList(getSelectedData());
  }, [selectedIndex])

  useEffect(() => {
    setFilteredList(dataList.slice(0, showNum));
  }, [dataList])

  useEffect(() => {
    setHdSubStyle('hdMain hdSub')
  }, [setHdSubStyle])

  const showMoreData = () => {
    const result = dataList.length - filteredList.length;
    const add = result < 3 ? result + showNum : showNum + 3;
    const newArray = [...filteredList, ...dataList.slice(showNum, add)];
    setFilteredList(newArray);
    setShowNum(add);
  }

  const getSelectedData = () => {
    switch (selectedIndex) {
    case 0:
      return mnaInvestmentData;
    case 1:
      return govSupportData;
    case 2:
      return fundSupportData;
    case 3:
      return techData;
    case 4:
    default:
      return consultData;
    }
  }

  const getActiveClassName = (index) => {
    return index === selectedIndex ? 'active' : undefined;
  }

  return (
    <div>
      <SubBanner title={title} img={subBg} />
      <div className='dataInfoInner'>
        <div className='infoTitleBox'>
          <h2 className='infoTitle'>자료</h2>
          <ul className='infoTabList'>
            <li className={getActiveClassName(0)} onClick={() => {
              navigate('/datainfo/m&a-invest')
              setSelectedIndex(0)
            }}>M&A・투자정보</li>
            <li className={getActiveClassName(1)} onClick={() => {
              navigate('/datainfo/government-support')
              setSelectedIndex(1)
            }}>정부지원사업 참여 모집</li>
            <li className={getActiveClassName(2)} onClick={() => {
              navigate('/datainfo/fund-support')
              setSelectedIndex(2)
            }}>정책자금 / 기업지원정보</li>
            <li className={getActiveClassName(3)} onClick={() => {
              navigate('/datainfo/technology-trade')
              setSelectedIndex(3)
            }}>기술거래리스트</li>
            <li className={getActiveClassName(4)} onClick={() => {
              navigate('/datainfo/consulting-list')
              setSelectedIndex(4)
            }}>컨설팅 실적</li>
          </ul>
        </div>
        <div className='infoSearchCon'>
          <span>총{dataList.length}개</span>
          <div className='infoSearchBox'>
            <input className="infoInput" type="search" placeholder='검색어를 입력하세요' />
            <span className='infomagnifier'></span>
          </div>

        </div>
        <div className='dataInfoLiBox'>
          {
            filteredList.map((data) => {
              return <InfoItem key={data.id} item={data} selectedIndex={selectedIndex} />
            })
          }
        </div>
        {dataList.length !== filteredList.length && <button className='infoMoreBtn' onClick={showMoreData}>더보기</button>}
      </div>
    </div>
  );
};

export default DataInfo;