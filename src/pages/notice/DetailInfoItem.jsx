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

  const title = 'ZETA PLAN만의 <br />다양하고 전문적인 정보를 제공해드립니다';

  if (!detailData) {
    return <div></div>;
  }

  return (
    <div>
      <SubBanner title={title} img={subBg} />
      <div className='detailInfoInner'>
        <div className='detailInfoTitleBox'>
          <p>자료</p>
        </div>
        <div className='detailContentInner'>
          <div className='detailTitleSec'>
            <p className='detailTitle'>{detailData.title}</p>
            <p className="detailDate">{detailData.createdAt}</p>
          </div>
          <img src="../../img/notice/data_info/investImg_1.png" alt="" />
          <div className="content" dangerouslySetInnerHTML={{ __html: detailData.content }}>
          </div>
        </div>
        <Link to='/datainfo' className='infoListBtn'>목록</Link>
      </div>
    </div>
  );
};

export default DetailInfoItem;