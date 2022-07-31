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
import { useNavigate, useParams } from 'react-router-dom';
import PageBase from '../../components/common/Darkmode/PageBase';

const DataInfo = ({ setHdSubStyle }) => {

  const {category} = useParams();
  const navigate = useNavigate();

  const [filteredList, setFilteredList] = useState([]);
  const [showNum, setShowNum] = useState(6);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [dataList, setDataList] = useState([]);

  const [input, setInput] = useState('');
  const [originData, setOriginData] = useState([]);

  useEffect(() => {
    setShowNum(6);
    setOriginData(getSelectedData());
    setDataList(getSelectedData());
  }, [selectedIndex]);

  useEffect(()=> {
    setShowNum(6);
    setOriginData(getCategoryData());
    setDataList(getCategoryData());
  }, [category]);

  useEffect(() => {
    setFilteredList(dataList.slice(0, showNum));
  }, [dataList]);

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

  const searchByData = (e) => {
    setInput(e.target.value);
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  }

  const onSearch = () => {
    const searchedData = originData.filter((item) => {
      return item.title.includes(input);
    })
    setDataList(searchedData);
  }

  const getActiveClassName = (cate) => {
    if (cate === category) {
      return 'active';
    }
    return undefined;
  }
  
  const getCategoryData = () => {
    switch (category) {
    case 'm&a-invest':
    default:
      return mnaInvestmentData;
    case 'government-support':
      return govSupportData;
    case 'fund-support':
      return fundSupportData;
    case 'technology-trade':
      return techData
    case 'consulting-list':
      return consultData;
    }
  }

  const setBreadThreeDepth = () => {
    switch (category) {
    case 'm&a-invest':
    default:
      return 'M&A・투자정보'
    case 'government-support':
      return '정부지원사업 참여모집'
    case 'fund-support':
      return '정책자금/기업지원정보'
    case 'technology-trade':
      return '기술거래리스트'
    case 'consulting-list':
      return '컨설팅실적'
    }
  }

  const title = 'ZETA PLAN만의 \n다양하고 전문적인 정보를 제공해드립니다'
  const oneDepth='소식 · 자료';
  const oneDepthLink='/news/news';
  const twoDepth='자료';
  const twoDepthLink='/datainfo/m&a-invest';
  const linkActive='threeDepth';


  return (
    <div>
      <SubBanner title={title} img={subBg} oneDepth={oneDepth} oneDepthLink={oneDepthLink} twoDepth={twoDepth} twoDepthLink={twoDepthLink} threeDepth={setBreadThreeDepth()} threeDepthLink={category === undefined ? '/datainfo/m&a-invest' : `/datainfo/${category}`} linkActive={linkActive} />
      <PageBase>
        <div className='dataInfoInner'>
          <div className='infoTitleBox'>
            <h2 className='infoTitle darkText'>자료</h2>
            <ul className='infoTabList'>
              <li className={getActiveClassName('m&a-invest')} onClick={() => {
                navigate('/datainfo/m&a-invest')
                setSelectedIndex(0)
              }}>M&A・투자정보</li>
              <li className={getActiveClassName('government-support')} onClick={() => {
                navigate('/datainfo/government-support')
                setSelectedIndex(1)
              }}>정부지원사업 참여 모집</li>
              <li className={getActiveClassName('fund-support')} onClick={() => {
                navigate('/datainfo/fund-support')
                setSelectedIndex(2)
              }}>정책자금 / 기업지원정보</li>
              <li className={getActiveClassName('technology-trade')} onClick={() => {
                navigate('/datainfo/technology-trade')
                setSelectedIndex(3)
              }}>기술거래리스트</li>
              <li className={getActiveClassName('consulting-list')} onClick={() => {
                navigate('/datainfo/consulting-list')
                setSelectedIndex(4)
              }}>컨설팅 실적</li>
            </ul>
          </div>
          <div className='infoSearchCon'>
            <span className='darkText'>총{dataList ? dataList.length  : originData.length}  개</span>
            <div className='infoSearchBox'>
              <input className="infoInput" type="text" placeholder='검색어를 입력하세요' onKeyDown={onKeyDown} onChange={searchByData}/>
              <span className='infomagnifier' onClick={onSearch}></span>
            </div>

          </div>
          <div className='dataInfoLiBox'>
            {
              filteredList.map((data) => {
                return <InfoItem key={data.id} item={data} selectedIndex={selectedIndex} />
              })
            }
          </div>
          {dataList.length !== filteredList.length && <button className='infoMoreBtn darkText' onClick={showMoreData}>더보기</button>}
        </div>
      </PageBase>
    </div>    
  );
};

export default React.memo(DataInfo);