import React from 'react';
import './../../styles/main/GlobalNetwork.scss';

const GlobalNetwork = () => {
  return (
    <div className='mainGb'> 
      <div className="mainGbInner">
        <div className="mainGbArea">
          <div className="mainGbText">
            <h2 className='mainGbTitleT'>Global Network</h2>
            <div className='mainGbTitleD'>
              <p>(주)제타플랜은 비전과 미션을 세계적이고 성공적으로 수행하기 위하여</p>
              <p>한국 및 중국, 미국, 일본, 두바이, 일본, 베트남 등 해외 21개국의 글로벌 네트워크를 구축하고 서비스를 지원하고 있습니다</p>
            </div>
          </div>
          <ul className='mainGNList'>
            <li className="mainGNListLeft">
              <span className='mainGbJ mainGN'><span className='mainCity'>Jakarta, </span>INDONESIA</span>
              <span className='mainGbH mainGN'><span className='mainCity'>Hanoi, </span>VIETNAM</span>
              <span className='mainGbA mainGN'><span className='mainCity'>Abu Dhabi, </span>United Arab Emirates</span>
            </li>
            <li className="mainGNListRight">
              <span className='mainGbB mainGN'><span className='mainCity'>Beijing, </span>CHINA</span>
              <span className='mainGbS mainGN'><span className='mainCity'>Seoul, </span>KOREA</span>
              <span className='mainGbGJ mainGN'><span className='mainCity'>GwangJu, </span>KOREA</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GlobalNetwork;