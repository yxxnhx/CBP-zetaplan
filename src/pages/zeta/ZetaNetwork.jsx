import React from 'react';
import { useState, useEffect } from 'react';
import './../../styles/zeta/zetaNetwork.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SubBanner from '../../components/common/SubBanner/index';
import subBg from '../../img/zeta/zeta_sub_bg@2x.png';

const ZetaNetwork = ({ setHdSubStyle }) => {
  const ztNtListSrc = ['korea.png', 'china.png', 'asia_europe.png']

  const ztNtList = [...ztNtListSrc];

  const [ztNtImg, setZtNtImg] = useState(ztNtList[0]);

  useEffect(() => {
    AOS.init();
  }, []);

  /* header 배경색 변경 */
  useEffect(() => {
    setHdSubStyle('hdMain hdSub')
  }, [setHdSubStyle])

  const title = '아시아를 넘어 세계로 나아가는<br /> ZETA PLAN 네트워크';

  return (
    <div className='ztNetWorkBox'>
      <SubBanner title={title} img={subBg} />
      <div className='ztNtInner'>
        <h2 className='ztTitle'>
            제휴 네트워크
        </h2>
        <div className='ztRedTabBox'>
          <div className='ztRedTabInner'>
            <div className='ztRedTab ztFixed' data-aos="fade-right"
              data-aos-offset="300" data-aos-easing="ease-in-sine">
              <div className='ztRedTabBlock'>
                <p onClick={() => setZtNtImg(ztNtList[0])} className={ztNtImg===ztNtList[0]? 'ztRedTabFirst active':'ztRedTabFirst'}>Korea</p>
                <p onClick={() => setZtNtImg(ztNtList[1])} className={ztNtImg===ztNtList[1]? 'ztRedTabTwo active':'ztRedTabTwo'}>China</p>
                <p onClick={() => setZtNtImg(ztNtList[2])} className={ztNtImg===ztNtList[2]? 'ztRedTabThr active':'ztRedTabThr'}>Asia · Europe</p>
              </div>
              <div className= 'ztRedTabTitle ztFixed' data-aos="fade-up"  data-aos-duration="2000">
                <p className='ztRedTabTitleTop'>Network</p>
                <p className='ztRedTabTitleTxt'>제타 플랜과 함께 하는 기업들</p>
              </div>
            </div>
            <div className='ztRedTabContent' data-aos="fade-up" data-aos-duration="2000">
              <div className="ztRedTabList ztNetWorkImgBig">
                <img src={require('./../../img/zeta/network/' + ztNtImg)} alt='zetanetwork' width="100%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZetaNetwork;