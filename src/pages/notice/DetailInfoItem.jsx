import React from 'react';
import SubBanner from '../../components/common/SubBanner';
import subBg from '../../img/notice/notice_sub_bg@2x.png';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import mnaInvestmentData from '../../db/m&a-investList.json';
import govSupportData from '../../db/govSupportList.json';
import fundSupportData from '../../db/fund-supportList.json';
import techData from '../../db/technologyList.json';
import consultData from '../../db/consultingList.json';
import '../../styles/notice/detailInfoItem.scss';

const DetailInfoItem = ({ setHdSubStyle }) => {
  const { category, id } = useParams();
  const [data, setData] = useState([]);

  const [detailData, setDetailData] = useState(null);

  const [theme, setTheme] = useState('');
  const [themeCss, setThemCss] = useState('');

  const getDataByCategory = () => {
    switch (category) {
    case 'm&a-invest':
      return mnaInvestmentData;
    case 'government-support':
      return govSupportData;
    case 'fund-support':
      return fundSupportData;
    case 'technology-trade':
      return techData;
    case 'consulting-list':
    default:
      return consultData;
    }
  }

  useEffect(() => {
    setData(getDataByCategory());
  }, [category])

  useEffect(() => {
    const filteredData = data.find((element) => element.id === parseInt(id));
    setDetailData(filteredData);
  }, [data])

  useEffect(() => {
    setHdSubStyle('hdMain hdSub')
  }, [setHdSubStyle])

  function handleTheme () {
    const value = theme;
    setTheme(!value);
    const cssValue = value ? 'dark' : 'light';
    setThemCss(cssValue);
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

  if (!detailData) {
    return <div></div>;
  }

  return (
    <div>
      <SubBanner title={title} img={subBg} oneDepth={oneDepth} oneDepthLink={oneDepthLink} twoDepth={twoDepth} twoDepthLink={twoDepthLink} threeDepth={setBreadThreeDepth()} threeDepthLink={category === undefined ? '/datainfo/m&a-invest' : `/datainfo/${category}`} linkActive={linkActive}/>
      <div className={themeCss}>
        <div className='darkBackground'>
          <div className='detailInfoInner'>
            <div className="themeBtnArea">
              <button className='themeBtn' onClick={()=>{handleTheme()}}>
                mode change
              </button>
            </div>
            <div className='detailInfoTitleBox darkText'>
              <p>자료</p>
            </div>
            <div className='detailContentInner'>
              <div className='detailTitleSec'>
                <p className='darkText detailTitle'>{detailData.title}</p>
                <p className="darkText detailDate">{detailData.createdAt}</p>
              </div>
              <img src="../../img/notice/data_info/investImg_1.png" alt="" />
              <div className="darkText content" dangerouslySetInnerHTML={{ __html: detailData.content }}>
              </div>
            </div>
            <Link to={`/datainfo/${category}`} className='darkText infoListBtn'>목록</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailInfoItem;