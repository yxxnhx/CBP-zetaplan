import React from 'react';
import { Link } from 'react-router-dom'

const Sitemap = () => {
  return (
    <div className='hdSitemap'>
      <div className='hdSmLeft'>
        <h2>
          logo
        </h2>
        <p>
          반갑습니다
          <br />
          ZETA PLAN 입니다
        </p>
        <p>
          다양한 방법으로
          <br />
          기업에 대한
          <br />
          적극적인 성장을 지원합니다
        </p>
      </div>
      <div className='hdSmRight'>
        <ul className='hdSmArea'>
          <li className='hdSmList'>
            <Link to={''}><span>Zeta</span></Link>
            <ul className='hdSmList2'>
              <li><Link to={''}>회사소개</Link></li>
              <li><Link to={''}>연혁</Link></li>
              <li><Link to={''}>CI</Link></li>
              <li><Link to={''}>컨설팅 부문</Link></li>
              <li><Link to={''}>PEOPLE</Link></li>
              <li><Link to={''}>오시는 길</Link></li>
              <li><Link to={''}>제휴 네트워크</Link></li>
            </ul>
          </li>
          <li className='hdSmList'>
            <Link to={''}><span>M&A / IPO</span></Link>
            <ul className='hdSmList2'>
              <li><Link to={''}>개요</Link></li>
              <li><Link to={''}>Process</Link></li>
              <li><Link to={''}>성과</Link></li>
            </ul>
          </li>
          <li className='hdSmList'>
            <a href="#"><span>투자 IR</span></a>
            <ul className='hdSmList2'>
              <li><Link to={''}>개요</Link></li>
              <li><Link to={''}>사업계획서</Link></li>
              <li><Link to={''}>Process</Link></li>
              <li><Link to={''}>성과</Link></li>
            </ul>
          </li>
          <li className='hdSmList'>
            <Link to={''}><span>해외진출</span></Link>
            <ul className='hdSmList2'>
              <li><Link to={''}>개요</Link></li>
              <li><Link to={''}>전략수립</Link></li>
              <li><Link to={''}>해외진출사례</Link></li>
            </ul>
          </li>
          <li className='hdSmList'>
            <Link to={''}><span>경영・평가</span></Link>
            <ul className='hdSmList2'>
              <li><Link to={''}>개요</Link></li>
              <li><Link to={''}>기술거래</Link></li>
              <li>
                <Link to={''}>가치평가</Link>
                <ul className='hdSmList3'>
                  <li><Link to={''}>기업가치평가</Link></li>
                  <li><Link to={''}>기술가치평가</Link></li>
                </ul>
              </li>
              <li><Link to={''}>기업인증</Link></li>
            </ul>
          </li>
          <li className='hdSmList'>
            <Link to={''}><span>소식・자료</span></Link>
            <ul className='hdSmList2'>
              <li>
                <a href="#">소식</a>
                <ul className='hdSmList3'>
                  <li><Link to={''}>NEWS</Link></li>
                  <li><Link to={''}>COLUMN</Link></li>
                </ul>
              </li>
              <li className='hdSmMargin'>
                <Link to={''}>자료</Link>
                <ul className='hdSmList3'>
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
        <button>
          x 버튼
        </button>
      </div>
    </div>
  );
};

export default Sitemap;