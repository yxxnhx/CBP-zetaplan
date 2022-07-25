import React from 'react';
import { Link } from 'react-router-dom'

const Sitemap = ({ open, close }) => {


  return (
    <div className={open ? 'hdSmOpenModal hdSmModal' : 'hdSmModal'}>
      {
        open ?
          (<div className='hdSitemap'>
            <div className='hdSmLeft'>
              <h2 className='hdSmLeftTop'>
                logo
              </h2>
              <p className='hdSmLeftMid'>
                반갑습니다
                <br />
                ZETA PLAN 입니다
              </p>
              <p className='hdSmLeftBt'>
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
                  <Link to={'/zeta'} onClick={close} ><span>ZETA</span></Link>
                  <ul className='hdSmList2'>
                    <li><Link to={'/zeta'} onClick={close}>회사소개</Link></li>
                    <li><Link to={'/zeta-history'} onClick={close}>연혁</Link></li>
                    <li><Link to={'/zeta-ci'} onClick={close}>CI</Link></li>
                    <li><Link to={'/zeta-people'} onClick={close}>컨설팅 부문</Link></li>
                    <li><Link to={'/zeta-people'} onClick={close}>PEOPLE</Link></li>
                    <li><Link to={'/zeta-map'} onClick={close}>오시는 길</Link ></li>
                    <li><Link to={'/zeta-network'} onClick={close}>제휴 네트워크</Link></li>
                  </ul>
                </li>
                <li className='hdSmList'>
                  <Link to={'/maipo-info/m&a'} onClick={close}><span>M&A / IPO</span></Link>
                  <ul className='hdSmList2'>
                    <li><Link to={'/maipo-info/m&a'} onClick={close}>개요</Link></li>
                    <li><Link to={'/maipo-process/m&a'} onClick={close}>Process</Link></li>
                    <li><Link to={'/maipo-performance/m&a'} onClick={close}>성과</Link></li>
                  </ul>
                </li>
                <li className='hdSmList'>
                  <Link to={'/ir'} onClick={close}><span>투자 IR</span></Link>
                  <ul className='hdSmList2'>
                    <li><Link to={'ir'} onClick={close} >개요</Link></li>
                    <li><Link to={'/ir-plan'} onClick={close}>사업계획서</Link></li>
                    <li><Link to={'/ir-process'} onClick={close}>Process</Link></li>
                    <li><Link to={'/ir-perfo'} onClick={close}>성과</Link></li>
                  </ul>
                </li>
                <li className='hdSmList'>
                  <Link to={'/gb'} onClick={close}><span>해외진출</span></Link>
                  <ul className='hdSmList2'>
                    <li><Link to={'/gb'} onClick={close}>개요</Link></li>
                    <li><Link to={'/gb-strategy'} onClick={close}>전략수립</Link></li>
                    <li><Link to={'/gb-case'} onClick={close}>해외진출사례</Link></li>
                  </ul>
                </li>
                <li className='hdSmList'>
                  <Link to={'/mng'} onClick={close}><span>경영・평가</span></Link>
                  <ul className='hdSmList2'>
                    <li><Link to={'/mng-consulting'} onClick={close}>경영컨설팅</Link></li>
                    <li><Link to={'/mng-trade'} onClick={close}>기술거래</Link></li>
                    <li>
                      <Link to={'/mng-value'} onClick={close}>가치평가</Link>
                      <ul className='hdSmList3'>
                        <li><Link to={'/mng-value/mngvaluecompany'} onClick={close}>기업가치평가</Link></li>
                        <li><Link to={'/mng-value/mngvalueskill'} onClick={close}>기술가치평가</Link></li>
                      </ul>
                    </li>
                    <li className='hdMargin2'><Link to={'/mng-credit'} onClick={close}>신용평가</Link></li>
                    <li><Link to={'/mng-certify'} onClick={close}>기업인증</Link></li>
                  </ul>
                </li>
                <li className='hdSmList'>
                  <Link to={'/news/news'} onClick={close}><span>소식・자료</span></Link>
                  <ul className='hdSmList2'>
                    <li>
                      <Link to={'/news/news'} onClick={close}>소식</Link>
                      <ul className='hdSmList3'>
                        <li><Link to={'/news/news'} onClick={close}>NEWS</Link></li>
                        <li><Link to={'/news/column'} onClick={close}>COLUMN</Link></li>
                      </ul>
                    </li>
                    <li className='hdSmMargin'>
                      <Link to={'/dataInfo/m&a-invest'} onClick={close}>자료</Link>
                      <ul className='hdSmList3'>
                        <li><Link to={'/datainfo/m&a-invest'} onClick={close}>M&A・ 투자정보</Link></li>
                        <li><Link to={'/datainfo/government-support'} onClick={close}>정부지원사업</Link></li>
                        <li><Link to={'/datainfo/fund-support'} onClick={close}>정책자금 / 기업지원</Link></li>
                        <li><Link to={'/datainfo/technology-trade'} onClick={close}>기술거래리스트</Link></li>
                        <li><Link to={'/datainfo/consulting-list'} onClick={close}>컨설팅 실적</Link></li>
                      </ul>
                    </li>
                    <li><Link to={'/qna'} onClick={close}>Q&A</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
            <button onClick={close} >
              x 버튼
            </button>
          </div>)
          : null
      }

    </div >

  );
};

export default Sitemap;