import React from 'react';
import { useEffect } from 'react';
import './../../styles/zeta/zetaCi.scss';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import SubBanner from '../../components/common/SubBanner/index';
import subBg from '../../img/zeta/zeta_sub_bg@2x.png';

const ZetaCi = () => {
  useEffect(()=>{
    AOS.init();
  },[]);

  const title = 'ZETA PLAN의 비전을 담은 CI';

  return (
    <div className='ztCiBox'>
      <SubBanner title={title} img={subBg} />
      <div className="ztCiContain">
        <div className="ztInner">
          <h2 className='ztTitle'>
            CI
          </h2>
          <div className="ztCiContent">
            <div className='ztCiInfoImg' data-aos="fade-up"  data-aos-duration="2000">
              Logo Img
            </div>
            <p className='ztCiInfoTxt' data-aos="fade-up"  data-aos-duration="2000" data-aos-delay="1000">
              <span>Zeta는 하늘의 중심이 되는 큰곰자리(Big Bear, 北斗七星)의 여섯 번째 별을 의미합니다.</span>
              <span>북두칠성의 여섯 번째별은 가장 큰 권위와 힘을 가지고 인간에게 복을 가져다줍니다.</span>
              <span>ZetaPlan 또한 지구상의 모든 기업들의 시작과 성장과 안정을 위한 컨설팅 솔루션을 제공합니다.</span>
              <span>안정감이 느껴지는 동시에 간결한 로고를 사용하여 편리한 이용을 위하는 제타플랜의 기업정신을 담았습니다.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="ztInner">
        <div className="ztCiSt">
          <h2 className='ztTitle ztColTitle'>
            CI System
          </h2> 
          <div className="ztCiStBox">
            <div className="ztCiStImg">
              <div className="ztCiStImgfull">
                <p className="ztCiStImgfTitle">
                  Full version
                </p>
                <p className="ztCiStImgfLogo" data-aos="fade-right"
                  data-aos-offset="300" data-aos-easing="ease-in-sine">
                  Full version Img
                </p>
              </div>
              <div className="ztCiStImgSim">
                <p className="ztCiStImgsTitle">
                  Simple version
                </p>
                <p className="ztCiStImgLogo" data-aos="fade-left"
                  data-aos-offset="300" data-aos-easing="ease-in-sine">
                 Simple version Img
                </p>
              </div> 
            </div>
            <div className='ztCiStTxt' data-aos="fade-up"  data-aos-duration="2000">
              <p>
                <span>ZETA PLAN 로고타입의 조합은 각 형태에 따라 비례를 조정한 것이므로 사용의 오류를 방지하기 위해</span><span>모든 원고의 사용은 매뉴얼 데이터에 의한 확대, 축소, 복사가 되어야 합니다.</span><span>단, 상황에 따라 여러매체에 적용하여 사용시 제작의 어려움이 있을 경우 그리드 시스템의 제시된 규정에 따라</span><span>올바르게 제작될 수 있도록 세심하게 관리 되어야 하며 형태 굵기 비례 등을 임의로 변형하거나 수정하여 사용할 수 없습니다.</span>
              </p>
            </div>
          </div>
        </div>
        <div className="ztColSt">
          <h2 className='ztTitle ztColTitle'>
            Color System
          </h2>
          <div className="ztColStBox">
            <div className="ztColStIn">
              <h3 className='ztColStTitle'>ZETA Color</h3>
              <p className='ztColStTxt'>Zeta의 Color는 성장과 안정을 추구합니다.</p>
              <div className="ztColStInBox">
                <p className='ztColStGr'></p>
                <div className='ztColStInRed'>
                  <p className='ztColStInRImg'>SQ</p>
                  <p className='ztColStInRTxt' data-aos="fade-left"
                    data-aos-offset="300" data-aos-easing="ease-in-sine">
                    <span className='ztTxtBold'>Red Color & Zeta </span>
                    <span>역동적인 사업의 성장을 의미하는 제타플랜의 레드컬러입니다.</span>
                  </p>
                </div>
                <div className='ztColStInBlue'>
                  <p className='ztColStInBImg'>blueSQ</p>
                  <p className='ztColStInBTxt' data-aos="fade-right"
                    data-aos-offset="300" data-aos-easing="ease-in-sine">
                    <span className='ztTxtBold'>Blue Color & Plan</span>
                    <span>체계적인 사업의 안정을 의미하는 제타플랜의 블루컬러입니다.</span>
                  </p>
                </div>
                <h4 className='ztNewTitle' data-aos="fade-up"  data-aos-duration="2000">NEW ZETA COLOR</h4>
                <p className='ztNewImg'></p>
                <p className='ztNewTxt'>
                  <span>Red Color + Blue Color 를 융합한 "New Zeta Color"입니다.</span>
                  <span> 모든 기업들을 체계적으로 안정시키고 역동적으로 성장시킬 것을 약속드리고자 제타플랜의 약속과 기업들의 꿈을 의미하는 새로운 퍼플컬러를 사용하였습니다.</span>
                </p>
                <p className='ztColLastTxt' data-aos="fade-up"  data-aos-duration="2000">제타플랜이 여러분의 고민을 함께 나누고 성장과 안정을 돕겠습니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZetaCi;