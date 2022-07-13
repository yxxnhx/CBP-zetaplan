import React from 'react';

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
            <a href="#"><span>Zeta</span></a>
            <ul className='hdSmList2'>
              <li><a href="#">회사소개</a></li>
              <li><a href="#">연혁</a></li>
              <li><a href="#">CI</a></li>
              <li><a href="#">컨설팅 부문</a></li>
              <li><a href="#">PEOPLE</a></li>
              <li><a href="#">오시는 길</a></li>
              <li><a href="#">제휴 네트워크</a></li>
            </ul>
          </li>
          <li className='hdSmList'>
            <a href="#"><span>M&A / IPO</span></a>
            <ul className='hdSmList2'>
              <li><a href="#">개요</a></li>
              <li><a href="#">Process</a></li>
              <li><a href="#">성과</a></li>
            </ul>
          </li>
          <li className='hdSmList'>
            <a href="#"><span>투자 IR</span></a>
            <ul className='hdSmList2'>
              <li><a href="#">개요</a></li>
              <li><a href="#">사업계획서</a></li>
              <li><a href="#">Process</a></li>
              <li><a href="#">성과</a></li>
            </ul>
          </li>
          <li className='hdSmList'>
            <a href="#"><span>해외진출</span></a>
            <ul className='hdSmList2'>
              <li><a href="#">개요</a></li>
              <li><a href="#">전략수립</a></li>
              <li><a href="#">해외진출사례</a></li>
            </ul>
          </li>
          <li className='hdSmList'>
            <a href="#"><span>경영・평가</span></a>
            <ul className='hdSmList2'>
              <li><a href="#">개요</a></li>
              <li><a href="#">기술거래</a></li>
              <li>
                <a href="#">가치평가</a>
                <ul className='hdSmList3'>
                  <li><a href="#">기업가치평가</a></li>
                  <li><a href="#">기술가치평가</a></li>
                </ul>
              </li>
              <li><a href="#">기업인증</a></li>
            </ul>
          </li>
          <li className='hdSmList'>
            <a href="#"><span>소식・자료</span></a>
            <ul className='hdSmList2'>
              <li>
                <a href="#">소식</a>
                <ul className='hdSmList3'>
                  <li><a href="#">NEWS</a></li>
                  <li><a href="#">COLUMN</a></li>
                </ul>
              </li>
              <li className='hdSmMargin'>
                <a href="#">자료</a>
                <ul className='hdSmList3'>
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
        <button>
          x 버튼
        </button>
      </div>
    </div>
  );
};

export default Sitemap;