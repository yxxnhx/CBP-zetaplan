import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer/index';
import gbMap from '../../img/global/global_map.png';
import '../../styles/global/gbCase.scss';

const GbCase = () => {
  return (
    <div>
      <div className="gbInner">
        <div className="gbTabTitleBox">
          <p className="gbTabTitle">해외진출사례</p>
        </div>
        <p className="gbContentSubTitle">해외진출지원 주요 실적</p>
        <img className="gbMapImg" src={gbMap} alt="" />
      </div>
    </div>
  );
};

export default GbCase;
