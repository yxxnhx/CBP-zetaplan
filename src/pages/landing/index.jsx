import React from 'react';
import './../../styles/landing/index.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  useEffect(() => {
    AOS.init();
  })

  return (
    <div className='Ld'>
      <div className="LdVideo">
        <video muted autoPlay loop src={require('./../../img/video/zetaplan_landing.mp4')} type="video/mp4">
        </video>
      </div>
      <div className="LdIntro">
        <div className="LdTitle"data-aos="fade-up"data-aos-duration="3000">
          <p>제타플랜은 2,500개 사의 컨설팅을 진행한 <br />경영컨설팅 전문 기업입니다
          </p> 
          <img src={require('./../../img/landing/landing_smaill_bg@2x.png')} alt="word" />
        </div>
      </div>
      <div className="LdDesWord">
        <div className='LdDesBus' data-aos="fade-right" data-aos-offset="500" data-aos-easing="ease-in-sine">
          <img src={require('./../../img/landing/landing_Business@2x.png')} alt="word" />
        </div>
        <div className='LdDesPro'  data-aos="fade-left" >
          <img src={require('./../../img/landing/landing_Professional@2x.png')} alt="word" />
        </div>
        <div className='LdDesSpe' data-aos="fade-right" data-aos-offset="500" data-aos-easing="ease-in-sine">
          <img src={require('./../../img/landing/landing_Specialty@2x.png')} alt="word" />
        </div>
      </div>
      <div className="LdStep">
        <div data-aos="fade-up" data-aos-duration="3000" className='LdStepTitle'>기업 성장 단계 별 맞춤형 지원을 실시합니다</div>
        <div data-aos="fade-up" data-aos-duration="1000">
          <ul className='LdStepList'>
            <li>Step1</li>
            <li>엔젤투자, 창업초기펀드, 밴처캐피탈, 정책금융, 멘토링</li>
          </ul>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000">
          <ul className='LdStepList'>
            <li>Step2</li>
            <li>벤처캐피탈, 정책금융, 전문투자자, 해외투자</li>
          </ul>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000">
          <ul className='LdStepList'>
            <li>Step3</li>
            <li>VC/IB/자산운용사, IPO, 유상증자, M&A</li>
          </ul>
        </div>
      </div>
      <div className="btnArea">
        <button><Link to='/main'>자세히 보기</Link></button>
        <button><Link to='/consulting'>컨설팅 신청</Link></button>
      </div>
    </div>
  );
};

export default Landing;