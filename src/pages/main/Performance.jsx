import React from 'react';
import CountUp from 'react-countup';
import './../../styles/main/Performance.scss';
import globalBg from './../../img/main/performance/global_smaill_bg.png';
import ipoBg from './../../img/main/performance/ipo_smaill_bg.png';
import irBg from './../../img/main/performance/ir_smaill_bg.png';
import maBg from './../../img/main/performance/m&a_smaill_bg.png';
import globalIcon from './../../img/main/business/global_icon.png';
import ipoIcon from './../../img/main/business/ipo_icon.png';
import irIcon from './../../img/main/business/ir_icon.png';
import maIcon from './../../img/main/business/m&a_icon.png';
import mobileBg from './../../img/main/performance/perfomance_mobile.png';

const Performance = () => {
  return (
    <div className="pfWrap">
      <div className="pfCon">
        <p className="pfMaintitle">PERFORMANCE</p>
        <div className="pfListCon">
          <div className="pfMQImgBox">
            <img src={mobileBg} alt="배경 이미지" />
          </div>
          <div className="pfList maList">
            <div className="pfImgBox">
              <img src={globalBg} alt="배경 이미지" />
            </div>
            <div className="pfConBox">
              <div className="pfIconBox">
                <img src={globalIcon} alt="글로벌 아이콘" />
              </div>
              <div className="pfMQConBox">
                <p className="pfTitle">M&A</p>
                <CountUp className="pfCount" end={6965} duration={2} enableScrollSpy={true} />
              </div>
              <div className="pfDes">
                기업 성장과 발전 가치를 극대화할 수 <br />
                있도록 컨설팅하고 있습니다.
              </div>
            </div>
          </div>
          <div className="pfList ipoList">
            <div className="pfImgBox">
              <img src={ipoBg} alt="배경 이미지" />
            </div>
            <div className="pfConBox">
              <div className="pfIconBox">
                <img src={ipoIcon} alt="ipo 아이콘" />
              </div>
              <div className="pfMQConBox">
                <p className="pfTitle">IPO</p>
                <CountUp className="pfCount" end={978} duration={2} enableScrollSpy={true} />
              </div>
              <p className="pfDes">
                다양한 방법으로 투자기업에 대한
                <br /> 적극적인 성장을 지원합니다
              </p>
            </div>
          </div>
          <div className="pfList irList">
            <div className="pfImgBox">
              <img src={irBg} alt="배경 이미지" />
            </div>
            <div className="pfConBox">
              <div className="pfIconBox">
                <img src={irIcon} alt="ir아이콘" />
              </div>
              <div className="pfMQConBox">
                <p className="pfTitle">투자유치</p>
                <CountUp className="pfCount" end={6965} duration={2} enableScrollSpy={true} />
              </div>
              <p className="pfDes">
                해외 21개국의 글로벌 네트워크를
                <br /> 구축하고 서비스를 지원하고 있습니다
              </p>
            </div>
          </div>
          <div className="pfList globalList">
            <div className="pfImgBox">
              <img src={maBg} alt="배경 이미지" />
            </div>
            <div className="pfConBox">
              <div className="pfIconBox">
                <img src={maIcon} alt="m&a 아이콘" />
              </div>
              <div className="pfMQConBox">
                <p className="pfTitle">해외진출</p>
                <CountUp className="pfCount" end={1051} duration={2} enableScrollSpy={true} />
              </div>
              <p className="pfDes">
                ZETA PLAN의 노하우로 <br />
                기업 성장과 발전 가치를 극대화할 수<br /> 있도록 컨설팅하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
