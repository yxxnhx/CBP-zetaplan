import React from 'react';
import './../../styles/main/GlobalNetwork.scss';

const GlobalNetwork = () => {
  return (
    <div className='mainGb'> 
      <div className="mainGbInner">
        <div className="mainGbTitle">
          <h2 className='mainGbTitleT'>Global Network</h2>
          <h3 className='mainGbTitleD'>(주)제타플랜은 비전과 미션을 세계적이고 성공적으로 수행하기 위하여 <br />한국 및 중국, 미국, 일본, 두바이, 일본, 베트남 등 해외 21개국의 글로벌 네트워크를 구축하고 서비스를 지원하고 있습니다</h3>
          <ul>
            <li className='mainGbJ'><span className='mainCity'>Jakarta, </span>INDONESIA</li>
            <li className='mainGbH'><span className='mainCity'>Hanoi, </span>VIETNAM</li>
            <li className='mainGbA'><span className='mainCity'>Abu Dhabi, </span>United Arab Emirates</li>
            <li className='mainGbB'><span className='mainCity'>Beijing, </span>CHINA</li>
            <li className='mainGbS'><span className='mainCity'>Seoul, </span>KOREA</li>
            <li className='mainGbGJ'><span className='mainCity'>GwangJu, </span>KOREA</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GlobalNetwork;