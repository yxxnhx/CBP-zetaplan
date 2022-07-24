import React from 'react';
import maInfoMainImg from '../../../img/m&a_ipo/m&a_summery@2x.png'

const MaInfo = () => {
  return (
    <div className='miInfoContent'>
      <img className='miInfoMainImg maInfoMainImg' src={maInfoMainImg} alt="M&A 개요 메인 이미지" />

      <div className='miInfoTxt'>
        <p>Mergers And Acquisitions</p>
        <p>
          M&A는 둘 이상의 회사가 합쳐져 하나의 회사가 되는 합병(Merger)과
          <br />
          대상회사의 주식 또는 자산을 취득해 대상회사의 경영권을 확보하는 인수(Acquisition)가 합쳐진 개념으로
          <br />
          합병, 주식인수, 주식교환, 주식이전, 영업양수도, 자산양수도는 물론이고 분할이나 임원겸임, 전략적 제휴 등도 포함합니다.
        </p>
        <p>M&A는 경영전략적인 목적, 영업적인 목적과 재무적인 차원에서 주로 고려되고 활용됩니다.</p>
      </div>
    </div>
  );
};

export default MaInfo;