import React from 'react';
import './../../styles/main/ZetaIntrduction.scss';
import { Link } from 'react-router-dom';

const ZetaIntroduction = () => {
  return (
    <div className="ziWrap">
      <div className="ziTitleCon">
        <span className="ziTitleBlue">global</span>
        <span className="ziTitleBlack">zeta plan investment</span>
      </div>
      <div className="ziContentBox">
        <p className="ziCompanyDes">
          제타플렌은 "지구상의 모든 기업들의 시작과 안정을 위한 컨설팅 솔루션 제공"이라는 비전을 가지고 경영 컨설팅
          서비스를 제공하고 있습니다.
        </p>
        <div className="ziLinkBox">
          <div className="ziCompanyLink">
            <Link to={'/zeta'}>회사 소개</Link>
          </div>
          <div className="ziEstablishmentLink">
            <Link to={''}>사업장 소개</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZetaIntroduction;
