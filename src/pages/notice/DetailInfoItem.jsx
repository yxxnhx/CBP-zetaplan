import React from 'react';
import SubBanner from '../../components/common/SubBanner';
import subBg from '../../img/notice/notice_sub_bg@2x.png';
import { useParams, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import mnaInvestmentData from '../../db/m&a-investList.json';
import govSupportData from '../../db/govSupportList.json';
import fundSupportData from '../../db/fund-supportList.json';
import techData from '../../db/technologyList.json';
import consultData from '../../db/consultingList.json';
import '../../styles/notice/detailInfoItem.scss';

const DetailInfoItem = () => {
  const {id} = useParams();
  const location = useLocation();

  console.log(location);

  const [data, setData] = useState(null);

  const totlaData = [mnaInvestmentData, govSupportData, fundSupportData, techData, consultData];

  useEffect(()=> {
    const detailData = mnaInvestmentData.find((element) => element.id === parseInt(id));
    setData(detailData);
    console.log(detailData);

  }, [])

  const title = 'ZETA PLAN만의 <br />다양하고 전문적인 정보를 제공해드립니다';

  if(!data) {
    return <div></div>;
  }

  return (
    <div>
      <SubBanner title={title} img={subBg} />
      <div className='detailInfoInner'>
        <div className='detailInfoTitleBox'>
          <p>자료</p>
        </div>
        <div>
          <p>{data.title}</p>
          <img src="../../img/notice/data_info/investImg_1.png" alt="" />
          <div dangerouslySetInnerHTML={{__html: data.content}}>
          </div>
        </div>
        <Link to='/datainfo' className='infoListBtn'>목록</Link>      
      </div>
    </div>
  );
};

export default DetailInfoItem;