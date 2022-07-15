import React from 'react';
import { useState, useEffect } from 'react';
import peopleData from './../../db/peopleList.json'
import SubBanner from '../../components/common/SubBanner';
import subBg from '../../img/zeta/zeta_sub_bg@2x.png'
import './../../styles/zeta/zetaPeople.scss'


const ZetaPeople = () => {
  const title = '제타 플랜의 전문가들이 돕겠습니다.'

  const [peopleDb, setPeopleDb] = useState([]);
  useEffect(()=>{
    setPeopleDb(peopleData);
  },[])

  return (
    <div>
      <SubBanner title={title} img={subBg} />
      <div className="inner">
        <div className="zetaPeoSubtitle">PEOPLE</div>
        <ul>
          <li>
            <img src="" alt="" />
            <title></title>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ZetaPeople;