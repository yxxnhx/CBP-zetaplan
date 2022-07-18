import React from 'react';
import { Link } from 'react-router-dom'

const Gnb = () => {
  return (
    <ul className='hdGnbArea'>
      <li className='hdDep1'>
        <Link to={'/zeta'} className='hdSub'>Zeta</Link>
        <ul className='hdDep2'>
          <li><Link to={''}>회사소개</Link></li>
          <li><Link to={''}>연혁</Link></li>
          <li><Link to={''}>CI</Link></li>
          <li><Link to={''}>컨설팅 부문</Link></li>
          <li><Link to={''}>PEOPLE</Link></li>
          <li><Link to={''}>오시는 길</Link></li>
          <li><Link to={''}>제휴 네트워크</Link></li>
        </ul>
      </li>
      <li className='hdDep1'>
        <Link to={'/maipo'} className='hdSub'>M&A / IPO</Link>
        <ul className='hdDep2'>
          <li><Link to={'/maipo'}>개요</Link></li>
          <li><Link to={'/maipo-process'}>Process</Link></li>
          <li><Link to={'/maipo-performance'}>성과</Link></li>
        </ul>
      </li>
      <li className='hdDep1'>
        <Link to={'/ir'} className='hdSub'>투자 IR</Link>
        <ul className='hdDep2'>
          <li><Link to={''}>개요</Link></li>
          <li><Link to={''}>사업계획서</Link></li>
          <li><Link to={''}>Process</Link></li>
          <li><Link to={''}>성과</Link></li>
        </ul>
      </li>
      <li className='hdDep1'>
        <Link to={'/Gbindex'} className='hdSub'>해외진출</Link>
        <ul className='hdDep2'>
          <li><Link to={''}>개요</Link></li>
          <li><Link to={''}>전략수립</Link></li>
          <li><Link to={''}>해외진출사례</Link></li>
        </ul>
      </li>
      <li className='hdDep1'>
        <Link to={'/mana'} className='hdSub'>경영・평가</Link>
        <ul className='hdDep2'>
          <li><Link to={''}>경영컨설팅</Link></li>
          <li><Link to={''}>기술거래</Link></li>
          <li>
            <Link to={''}>가치평가</Link>
            <ul className='hdDep3'>
              <li><Link to={''}>기업가치평가</Link></li>
              <li><Link to={''}>기술가치평가</Link></li>
            </ul>
          </li>
          <li><Link to={''}>신용평가</Link></li>
          <li><Link to={''}>기업인증</Link></li>
        </ul>
      </li>
      <li className='hdDep1'>
        <Link to={'/news'} className='hdSub'>소식・자료</Link>
        <ul className='hdDep2'>
          <li>
            <Link to={''}>소식</Link>
            <ul className='hdDep3'>
              <li><Link to={''}>NEWS</Link></li>
              <li><Link to={''}>COLUMN</Link></li>
            </ul>
          </li>
          <li>
            <Link to={''}>자료</Link>
            <ul className='hdDep3'>
              <li><Link to={''}>M&A・ 투자정보</Link></li>
              <li><Link to={''}>정부지원사업</Link></li>
              <li><Link to={''}>정책자금 / 기업지원</Link></li>
              <li><Link to={''}>컨설팅 실적</Link></li>
            </ul>
          </li>
          <li><Link to={''}>Q&A</Link></li>
        </ul>
      </li>
    </ul>
  );
};

export default Gnb;