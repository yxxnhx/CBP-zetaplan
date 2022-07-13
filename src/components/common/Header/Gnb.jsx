import React from 'react';
import { Link } from 'react-router-dom'

const Gnb = () => {
  return (
    <ul className='hdGnbArea'>
      <li className='hdDep1'>
        <Link to={'/zeta'} className='hdSub'>Zeta</Link>
        <ul className='hdDep2'>
          <li><a href="#">회사소개</a></li>
          <li><a href="#">연혁</a></li>
          <li><a href="#">CI</a></li>
          <li><a href="#">컨설팅 부문</a></li>
          <li><a href="#">PEOPLE</a></li>
          <li><a href="#">오시는 길</a></li>
          <li><a href="#">제휴 네트워크</a></li>
        </ul>
      </li>
      <li className='hdDep1'>
        <Link to={'/maipo'} className='hdSub'>M&A / IPO</Link>
        <ul className='hdDep2'>
          <li><a href="#">개요</a></li>
          <li><a href="#">Process</a></li>
          <li><a href="#">성과</a></li>
        </ul>
      </li>
      <li className='hdDep1'>
        <Link to={'/ir'} className='hdSub'>투자 IR</Link>
        <ul className='hdDep2'>
          <li><a href="#">개요</a></li>
          <li><a href="#">사업계획서</a></li>
          <li><a href="#">Process</a></li>
          <li><a href="#">성과</a></li>
        </ul>
      </li>
      <li className='hdDep1'>
        <Link to={'/Gbindex'} className='hdSub'>해외진출</Link>
        <ul className='hdDep2'>
          <li><a href="#">개요</a></li>
          <li><a href="#">전략수립</a></li>
          <li><a href="#">해외진출사례</a></li>
        </ul>
      </li>
      <li className='hdDep1'>
        <Link to={'/mana'} className='hdSub'>경영・평가</Link>
        <ul className='hdDep2'>
          <li><a href="#">개요</a></li>
          <li><a href="#">기술거래</a></li>
          <li>
            <a href="#">가치평가</a>
            <ul className='hdDep3'>
              <li><a href="#">기업가치평가</a></li>
              <li><a href="#">기술가치평가</a></li>
            </ul>
          </li>
          <li><a href="#">기업인증</a></li>
        </ul>
      </li>
      <li className='hdDep1'>
        <Link to={'/news'} className='hdSub'>소식・자료</Link>
        <ul className='hdDep2'>
          <li>
            <a href="#">소식</a>
            <ul className='hdDep3'>
              <li><a href="#">NEWS</a></li>
              <li><a href="#">COLUMN</a></li>
            </ul>
          </li>
          <li className='hdMargin'>
            <a href="#"> 자료</a>
            <ul className='hdDep3'>
              <li><a href="#">M&A・ 투자정보</a></li>
              <li><a href="#">정부지원사업</a></li>
              <li><a href="#">정책자금 / 기업지원</a></li>
              <li><a href="#">컨설팅 실적</a></li>
            </ul>
          </li>
          <li><a href="#">Q&A</a></li>
        </ul>
      </li>
    </ul>
  );
};

export default Gnb;