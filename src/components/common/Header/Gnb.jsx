import React from 'react';
import { Link } from 'react-router-dom'

const Gnb = ({srhOpen}) => {

  return (
    <ul className='hdGnbArea'>
      <li className='hdDep1'>
        <Link to={'/zeta'} className='hdSub' onClick={srhOpen} >ZETA</Link>
        <ul className='hdDep2'>
          <li><Link to={'/zeta'}>회사소개</Link></li>
          <li><Link to={'/zeta-history'}>연혁</Link></li>
          <li><Link to={'/zeta-ci'}>CI</Link></li>
          <li><Link to={'/zeta-consul'}>컨설팅 부문</Link></li>
          <li><Link to={'/zeta-people'}>PEOPLE</Link></li>
          <li><Link to={'/zeta-map'}>오시는 길</Link></li>
          <li><Link to={'/zeta-network'}>제휴 네트워크</Link></li>
        </ul>
      </li>
      <li className='hdDep1'>
        <Link to={'/maipo-info/m&a'} className='hdSub' onClick={srhOpen} >M&A / IPO</Link>
        <ul className='hdDep2'>
          <li><Link to={'/maipo-info/m&a'}>개요</Link></li>
          <li><Link to={'/maipo-process/m&a'}>Process</Link></li>
          <li><Link to={'/maipo-performance/m&a'}>성과</Link></li>
        </ul>
      </li>
      <li className='hdDep1'>
        <Link to={'/ir'} className='hdSub' onClick={srhOpen} >투자 IR</Link>
        <ul className='hdDep2'>
          <li><Link to={'/ir'}>개요</Link></li>
          <li><Link to={'/ir-plan'}>사업계획서</Link></li>
          <li><Link to={'/ir-process'}>Process</Link></li>
          <li><Link to={'/ir-perfo'}>성과</Link></li>
        </ul>
      </li>
      <li className='hdDep1'>
        <Link to={'/gb'} className='hdSub' onClick={srhOpen} >해외진출</Link>
        <ul className='hdDep2'>
          <li><Link to={'/gb'}>개요</Link></li>
          <li><Link to={'/gb-strategy'}>전략수립</Link></li>
          <li><Link to={'/gb-case'}>해외진출사례</Link></li>
        </ul>
      </li>
      <li className='hdDep1'>
        <Link to={'/mng'} className='hdSub' onClick={srhOpen} >경영・평가</Link>
        <ul className='hdDep2'>
          <li><Link to={'/mng'}>경영컨설팅</Link></li>
          <li><Link to={'/mng-trade'}>기술거래</Link></li>
          <li>
            <Link to={'/mng-value/mngvaluecompany'}>가치평가</Link>
            <ul className='hdDep3'>
              <li><Link to={'mng-value/mngvaluecompany'}>기업가치평가</Link></li>
              <li><Link to={'mng-value/mngvalueskill'}>기술가치평가</Link></li>
            </ul>
          </li>
          <li><Link to={'/mng-credit'}>신용평가</Link></li>
          <li><Link to={'/mng-certify'}>기업인증</Link></li>
        </ul>
      </li >
      <li className='hdDep1'>
        <Link to={'/news/news'} className='hdSub' onClick={srhOpen} >소식・자료</Link>
        <ul className='hdDep2'>
          <li>
            <Link to={'/news/news'}>소식</Link>
            <ul className='hdDep3'>
              <li><Link to={'/news/news'}>NEWS</Link></li>
              <li><Link to={'/news/column'}>COLUMN</Link></li>
            </ul>
          </li>
          <li>
            <Link to={'/dataInfo/m&a-invest'}>자료</Link>
            <ul className='hdDep3'>
              <li><Link to={'/datainfo/m&a-invest'}>M&A・ 투자정보</Link></li>
              <li><Link to={'/datainfo/government-support'}>정부지원사업</Link></li>
              <li><Link to={'/datainfo/fund-support'}>정책자금 / 기업지원</Link></li>
              <li><Link to={'/datainfo/technology-trade'}>기술거래리스트</Link></li>
              <li><Link to={'/datainfo/consulting-list'}>컨설팅 실적</Link></li>
            </ul>
          </li>
          <li><Link to={'/qna'}>Q&A</Link></li>
        </ul>
      </li>
    </ul >
  );
};

export default Gnb;