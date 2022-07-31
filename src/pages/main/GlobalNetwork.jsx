import React from 'react';
import './../../styles/main/GlobalNetwork.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const GlobalNetwork = () => {
  useEffect(() => {
    AOS.init();
  })

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
              <span className='mainGbJ mainGN'  data-aos="fade-up" data-aos-duration="1000"><Link to="/zeta-map"><span className='mainCity'>Jakarta, </span>INDONESIA</Link> </span>
              <span className='mainGbH mainGN'  data-aos="fade-up" data-aos-duration="1000"><Link to="/zeta-map"><span className='mainCity'>Hanoi, </span>VIETNAM</Link></span>
              <span className='mainGbA mainGN'  data-aos="fade-up" data-aos-duration="1000"><Link to="/zeta-map"><span className='mainCity'>Abu Dhabi, </span>United Arab Emirates</Link></span>
            </li>
            <li className="mainGNListRight">
              <span className='mainGbB mainGN'  data-aos="fade-up" data-aos-duration="1000"><Link to="/zeta-map"><span className='mainCity'>Beijing, </span>CHINA</Link></span>
              <span className='mainGbS mainGN'   data-aos="fade-up" data-aos-duration="1000"><Link to="/zeta-map"><span className='mainCity'>Seoul, </span>KOREA</Link></span>
              <span className='mainGbGJ mainGN'  data-aos="fade-up" data-aos-duration="1000"><Link to="/zeta-map"><span className='mainCity'>GwangJu, </span>KOREA</Link></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GlobalNetwork;  