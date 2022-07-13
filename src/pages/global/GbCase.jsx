import React from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer/index';
import gbMap from '../../img/global/global_map.png';
import '../../styles/global/gbCase.scss';

const GbCase = () => {
  return (
    <div>
      <Header />
      <div className="gbInner">
        <div className="gbTabTitleBox">
          <p className="gbTabTitle">해외진출사례</p>
        </div>
        <p className="gbContentSubTitle">해외진출지원 주요 실적</p>
        <img className="gbMapImg" src={gbMap} alt="" />
      </div>
      <div className="gbCasetableBox">
        <ul className="gbCasetable">
          <li className="gbCasetableLi">
            <p className="gbCasetableCom">中國 ‘ICI’</p>
            <p className="gbCasetableCon">
              • ICI : Beijing B&R International Co-incubation Beijing B&R International Co-incubation(ICI)는 인큐베이션
              • 서비스 제공 업체를 서로 연결하고 파트너십을 촉진하는 임무를 가진 비영리 및 비정부 네트워크임.
            </p>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default GbCase;
