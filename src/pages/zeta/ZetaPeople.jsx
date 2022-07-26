import React from 'react';
import { useState, useEffect } from 'react';
import peopleData from './../../db/peopleList.json'
import SubBanner from '../../components/common/SubBanner';
import subBg from '../../img/zeta/zeta_sub_bg@2x.png'
import './../../styles/zeta/zetaPeople.scss'


const ZetaPeople = ({ setHdSubStyle }) => {
  const title = '제타 플랜의 전문가들이 돕겠습니다.'

  const oneDepth='ZETA';
  const oneDepthLink='/zeta';
  const twoDepth='PEOPLE';
  const twoDepthLink='/zeta-people';
  const linkActive='twoDepth';

  const [peopleDb, setPeopleDb] = useState([]);
  useEffect(() => {
    setPeopleDb(peopleData);
  }, [])

  useEffect(() => {
    setHdSubStyle('hdMain hdSub')
  }, [setHdSubStyle])

  return (
    <div>
      <SubBanner title={title} img={subBg} oneDepth={oneDepth} oneDepthLink={oneDepthLink} twoDepth={twoDepth} twoDepthLink={twoDepthLink} linkActive={linkActive} />
      <div className="inner">
        <div className="zetaPeoSubtitle">PEOPLE</div>
        <ul className='zetaPeoList'>
          {
            peopleData.map((zetaPerson, i) => {
              return (
                <li className='zetaPeoBox' key={zetaPerson.id} >
                  <div className="zetaPeoImgBOX">
                    <img src={require('./../../img/zeta/people/' + peopleData[i].img)} alt="zetaPerson"/>
                    <div className="zetaPeoTBox">
                    </div>
                  </div>
                  <div className="zetaDimmed">
                    <div className="zetaPeoTop">
                      <h2 className="zetaPeoName">{zetaPerson.name}</h2>
                      <p className="zetaPeoHPos">{zetaPerson.hoverPos}</p>
                      <p className="zetaPeoPos">{zetaPerson.position}</p>
                    </div>
                    <div className='zetaPeoDetail' dangerouslySetInnerHTML={{ __html: peopleData[i].detailInfo }}></div>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>

  );
};

export default ZetaPeople;
