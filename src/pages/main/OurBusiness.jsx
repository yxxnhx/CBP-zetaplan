import React from 'react';
import './../../styles/main/OurBusiness.scss';
import professional from './../../img/video/business_01.mp4';
import global from './../../img/video/business_02.mp4';
import trust from './../../img/video/business_03.mp4';
import customized from './../../img/video/business_04.mp4';

const OurBusiness = () => {
  return (
    <div className="obWrapper">
      <div className="obCon">
        <p className="obTitle">OUR BUSINESS</p>
        <div className="obInner">
          <div className="obList professional">
            <div className="videoCon">
              <video src={professional} loop muted autoPlay></video>
              <div className="obVideoDes">
                <p className="obVideoDesT">Professional</p>
                <p className="obVideoDesC">각 분야의 전문가들이 돕겠습니다.</p>
              </div>
            </div>
          </div>
          <div className="obList global">
            <div className="videoCon">
              <video src={global} loop muted autoPlay></video>
              <div className="obVideoDes">
                <p className="obVideoDesT">Global</p>
                <p className="obVideoDesC">다양한 해외지사를 보유하고 있습니다.</p>
              </div>
            </div>
          </div>
          <div className="obList trust">
            <div className="videoCon">
              <video src={trust} loop muted autoPlay></video>
              <div className="obVideoDes">
                <p className="obVideoDesT">Customize</p>
                <p className="obVideoDesC">기업에 맞춘 컨설팅을 지원합니다.</p>
              </div>
            </div>
          </div>
          <div className="obList customized">
            <div className="videoCon">
              <video src={customized} loop muted autoPlay></video>
              <div className="obVideoDes">
                <p className="obVideoDesT">Trust</p>
                <p className="obVideoDesC">믿고 맡길 수 있는 서비스를 제공합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBusiness;
