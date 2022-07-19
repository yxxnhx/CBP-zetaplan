import React from 'react';
import { useState, useEffect } from 'react';
import certiUrl from './../../db/certificateList.json';
import awardUrl from './../../db/awardList.json';
import './../../styles/zeta/index.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SubBanner from '../../components/common/SubBanner/index';
import subBg from '../../img/zeta/zeta_sub_bg@2x.png';

const Zeta = ({ setHdSubStyle }) => {
  const [certiData, setCertiData] = useState([]);
  const [awardData, setAwardData] = useState([]);

  const [selectedTab, setSelectedTab] = useState(certiUrl);

  useEffect(() => {
    setCertiData(certiUrl);
    setAwardData(awardUrl);
    AOS.init();
  }, [])

  /* header 배경색 변경 */
  useEffect(() => {
    setHdSubStyle('hdMain hdSub')
  }, [setHdSubStyle])


  const refs = React.useRef([]);
  const tabClick = (i) => {
    refs.current[i].scrollIntoView({ behavior: 'smooth' });
  };

  const title = 'ZETA PLAN은 모든 기업들의<br /> 시작을 함께 합니다.';

  return (
    <div className='ztInfoBox'>
      <SubBanner title={title} img={subBg} />
      <div className='ztIntro'>
        <div className='ztInner'>
          <h2 className='ztTitle'>
            회사소개
          </h2>
          <div className='ztInfoText' data-aos="fade-up" data-aos-duration="2000">
            <p className='ztTextTitle'>시작과 성장과 안정을 위한 컨설팅 솔루션 </p>
            <p className='ztTextWh'>체계적인 분석과 함께 정확한 대안을 가진 솔루션을 제공<br />
              기업자금지원지원/기업구구조조정/기업전략컨설팅<br />
              투자유치와 IPO, M&A 단계에 이를 수 있도록 지원<br />
              한국 30여개 벤처캐피털과 해외 50여개 PEF 및 벤처캐피털 등과 제휴</p>
            <p className='ztTextGr'>
              안정을 원하는 모든 기업에게 위험을 제거한 최대의 기회만을 제공할 것을 약속드립니다.<br />
              기업들의 꿈을 제타플랜이 함께 응원하겠습니다.<br />
              체계적인 서비스로 성공과 안정된 기업으로 만들어 드리겠습니다.
            </p>
          </div>
        </div>
      </div>

      <div className='ztMessage'>
        <div className='ztMessageInner'>
          <div className='ztMessageBox'>
            <img className='ztCircle' src={require('./../../img/zeta/zeta_circle.png')} alt="circle" />
            <div className='ztCeoTexts'>
              <h2>CEO'S MESSAGE</h2>
              <p className='ztCeoText' data-aos="fade-right" data-aos-duration="2000">
                (주)제타플랜인베스트는  “지구상의 모든 기업들의 시작과 성장과 안정을 위한 컨설팅 솔루션 제공”이라는 대명제를 가지고 경영컨설팅 서비스를 제공하고 있습니다. 체계적인 컨설팅 서비스를 통해 기업의 시작과 성장, 안정을 원하는 모든 기업에게 위험을
                제거한 최대의 기회만을 제공할 것을 약속드립니다.
              </p>
              <p className='ztCeoName'>
                CEO/홍현권
              </p>
            </div>
          </div>

          <p className='ztCeoImg' data-aos="fade-up" data-aos-duration="2500">
            <img src={require('./../../img/zeta/zeta_hyunkyun@2x.png')} alt="zt_ceo" />
          </p>
        </div>
      </div>

      <div className='ztRedTabBox ztAwardsBox'>
        <div className='ztRedTabInner ztAwardsBoxInner'>
          <div className='ztRedTab ztAwardsTab ztFixed' >
            <p onClick={() => { setSelectedTab(certiData); tabClick(0); }} className={selectedTab === certiData ? 'ztRedTabFirst ztCertificate active' : 'ztRedTabFirst ztCertificate'}>인증서</p>
            <p onClick={() => { setSelectedTab(awardData); tabClick(1); }} className={selectedTab === awardData ? 'ztRedTabTwo ztAward active' : 'ztRedTabTwo ztAward'}>상장</p>
          </div>
          <div className='ztRedTabTitle ztAwardsTitle ztFixed'>
            <p className='ztRedTabTitleTop ztAwardsTitleTop'>Awards</p>
            <p className='ztRedTabTitleTxt ztAwardsTitleTxt'>제타플랜의 인증 및 수상이력</p>
          </div>
          <div className='ztRedTabContent ztCertiContent' data-aos="fade-up" data-aos-duration="3500">
            {
              selectedTab.map(function (a, i) {
                return (
                  <div className="ztRedTabList ztAwardList" key={a.id} ref={(ref) => (refs.current[i] = ref)}>
                    <h3 className='ztRedTabListTitle ztYear'>{selectedTab[i].year}</h3>
                    <p className='ztRedTabContentTitle ztAwardTitle'>{selectedTab[i].title}</p>
                    <p className='ztRedTabContentTxt ztAwardContent' dangerouslySetInnerHTML={{ __html: selectedTab[i].content }}></p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zeta;