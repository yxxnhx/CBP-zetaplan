import React from 'react';
import './../../styles/ir/irPerfo.scss'
import SubBanner from '../../components/common/SubBanner/index';
import subBg from '../../img/ir/ir_sub_bg@2x.png'
import {  useEffect } from 'react';
import irPerfoImg01 from './../../img/ir/ir_perfo_img1@2x.png'
import irPerfoImg02 from './../../img/ir/ir_perfo_img2.jpg'
import irPerfoImg03 from './../../img/ir/ir_perfo_img3@2x.png'
import irPerfoImg04 from './../../img/ir/ir_perfo_img4@2x.png'
import irPerfoImg05 from './../../img/ir/ir_perfo_img5@2.png'
import PageBase from '../../components/common/Darkmode/PageBase';


const IrPerfo = ({ setHdSubStyle }) => {
  const title = 'IR지원, 해외투자유치, 성장 지원 컨설팅에\n최적화된 ZETA PLAN'
  // breadCrumbs
  const oneDepth='투자 IR';
  const oneDepthLink='/ir';
  const twoDepth='성과';
  const twoDepthLink='/ir-perfo';
  const linkActive='twoDepth';
  
  /* header 배경색 변경 */
  useEffect(() => {
    setHdSubStyle('hdMain hdSub')
  }, [setHdSubStyle])

  return (
    <div>
      <SubBanner title={title} img={subBg} oneDepth={oneDepth} oneDepthLink={oneDepthLink} twoDepth={twoDepth} twoDepthLink={twoDepthLink} linkActive={linkActive}/>
      <PageBase>
        <div className='inner'>
          <div className="darkText irSubtitle">성과</div>
          <div className="irPerfoContent">
            <div className='irPerfoContentBoxLeft'>
              <div className="irPerfoImg">
                <img src={irPerfoImg03} alt="투자유치" />
              </div>
              <div className="irPerfoText">
                <ul>
                  <li className='darkText irPerfoContentTitle'>(주)00일렉콤 전자파 차폐,그라운드 접지, 방열, 전자파 흡수용도 제품 기술보유기업 투자유치 및 성과</li>
                  <li>
                    <ul className='irPerfoContentDetail'>
                      <li className='darkText irPerfoContentTxt'><span>컨설팅 내용</span>: 전자파 차폐, 흡수 관련 제품 기술보유기업의 IR을 통한 투자
                      </li>
                      <li className='darkText irPerfoContentTxt'><span>투자 컨설팅</span>  : 중국 신설법인 확대 및 기존 TV 등 대형 전자제품외 모바일 기기관련 제품으로 생산라인확대, 성장을 위한 로드맵 전략자문 및 투자자금지원을 위한 투자 IR 컨설팅</li>
                      <li className='darkText irPerfoContentTxt'><span>진행경과</span>  : 2015년 4월부터 주요 기관투자자들에 대한 IR 실시</li>
                      <li className='darkText irPerfoContentTxt'><span>투자유치</span>  : 2015년 7월 스마일게이트인베스트먼트, 대성창업투자주식회사로 부터 30억원 투자유치 (CB)</li>
                      <li className='darkText irPerfoContentTxt'><span>사후결과</span>  : 모바일 기기로의 생산라인 확대 및 해 외사업성장에 따른 중국 투자협상 진행 중</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className='irPerfoContentBoxRight'>
              <div className="irPerfoImgTop">
                <img src={irPerfoImg02} alt="투자유치" />
              </div>
              <div className="irPerfoText">
                <ul>
                  <li className='darkText irPerfoContentTitle'>(주)000에프앤피 재무컨설팅 자문 및 투자유치</li>
                  <li>
                    <ul className='irPerfoContentDetail'>
                      <li className='darkText irPerfoContentTxt'><span>컨설팅 내용</span>: 스마트웰빙∙건강기능식품기업의 IR을 통한 투자유치</li>
                      <li className='darkText irPerfoContentTxt'><span>투자 컨설팅</span> : 건강기능식품 원료 기술개발 및 의료바이오 약품시장 진출, 해외시장진출을 위한 전략자문과 기업성장을 위한 적시의 투자자금 조달</li>
                      <li className='darkText irPerfoContentTxt'> <span>진행경과</span> :  2015년 4월부터 주요 기관투자자대상 IR 실시, 중국상장기업 ‘중국피혁성’과 투자협의</li>
                      <li className='darkText irPerfoContentTxt'><span>투자유치</span> : 20억 투자유치 <br />– 10억 SBI 코넥스활성화펀드 (RCPS)<br />– 10억 IBK 금융그룹에서 투자유치(BW)<br /></li>
                      <li className='darkText irPerfoContentTxt'><span>사후결과</span> : 면세점, 홈쇼핑 마케팅 입점지원 및 중국투자 유치 관련 진행 중, 2015년 7월 코넥스 상장</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="irPerfoImgBottom">
                <img src={irPerfoImg02} alt="투자유치" />
              </div>
            </div>
          </div>
        </div>
      
        <div className="irPerfoDecoBg">
          <p>ZETA PLAN</p>
        </div>
        <div className="inner">
          <div className="irPerfoContent">
            <div className="irPerfoContentBoxLeft">
              <div className="irPerfoImg">
                <img src={irPerfoImg01} alt="투자유치" />
              </div>
              <ul className='irPerfoContentBox'>
                <li className='darkText irPerfoContentTitle'>(주)000월드와이드 의료기술 보유기업의 투자유치 및 성과</li>
                <li>
                  <ul className='irPerfoContentDetail'>
                    <li className='darkText irPerfoContentTxt'><span>컨설팅 내용</span>: 골다공증진단기기, 뇌혈관진단기기 등 세계최고등급 기술 보유기업의 글로벌 사업확장에 대한  IR 및 투자유치 지원</li>
                    <li className='darkText irPerfoContentTxt'><span>투자 컨설팅</span> : GE(General Electric) 세계1위 의료기업과 공동개발 및 납품 및 해외 지사설립과 마케팅다변화를 위한 IR 실행</li>
                    <li className='darkText irPerfoContentTxt'><span>진행경과</span> : KITIA를 통한 투자기관 선정지원, IR컨설팅</li>
                    <li className='darkText irPerfoContentTxt'><span>투자유치</span> :산업은행 기술금융 특허담보대출 15억 완료, LB/송현/알바트로스 인베스트먼트 3개사와 투자 협의 중 (50억 규모)</li>
                    <li className='darkText irPerfoContentTxt'> <span>사후결과</span> : GE사 ODM/OEM 개발 및 104개국 매출증대 예상</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className='irPerfoContentBoxRight'>
              <div className="irPerfoImgTop">
                <img src={irPerfoImg04} alt="투자유치" />
              </div>
              <ul className='irPerfoContentBox'>
                <li className='darkText irPerfoContentTitle'>차세대 UI 솔루션 보유기업 000정보통신(주) 투자유치</li>
                <li>
                  <ul className='darkText irPerfoContentDetail'>
                    <li className='darkText irPerfoContentTxt'><span>컨설팅 내용</span>: 차세대 RIA 솔루션 기술의 보급과 기업공개(IPO)전 투자 유치</li>
                    <li className='darkText irPerfoContentTxt'><span>투자 컨설팅</span> : 한국거래소(KRX) 및 국세청,  UI RIA솔루션의 공급을 위한 재무적 투자 유치를 위한 투자 IR지원</li>
                    <li className='darkText irPerfoContentTxt'><span>진행경과</span> : 2Pre-IPO컨설팅, 투자유치 IR 컨설팅</li>
                    <li className='darkText irPerfoContentTxt'><span>투자유치</span> : 신주 20억(KDB 산업은행 15억 + 기업은행 5억) 구주 20억, 기술금융융자 20억</li>
                    <li className='darkText irPerfoContentTxt'><span>사후결과</span> : 2015년 IPO 추진, 중국 시장 향후 3천억 매출 예정</li>
                  </ul>
                </li>
              </ul>
              <div className="irPerfoImgBottom">
                <img src={irPerfoImg04} alt="투자유치" />
              </div>
            </div>
            <div className='irPerfoContentBoxLeft'>
              <div className="irPerfoImg">
                <img src={irPerfoImg05} alt="투자유치" />
              </div>
              <ul className='irPerfoContentBox'>
                <li className='darkText irPerfoContentTitle'>(주)00시스템즈 스마트 통합솔루션 기반 미디어디스플레이 및 컨텐츠 제공 솔루션 보유기업 투자유치 및 성과</li>
                <li>
                  <ul className='irPerfoContentDetail'>
                    <li className='darkText irPerfoContentTxt'><span>컨설팅 내용</span>: 미디어 디스플레이 시스템과 컨텐츠 기술개발 및  기업공개(IPO)이전 투자유치</li>
                    <li className='darkText irPerfoContentTxt'><span>투자 컨설팅</span>  : 중국 및 해외시장공급을 위한 재무적 투자유치를 위한 투자 IR 컨설팅</li>
                    <li className='darkText irPerfoContentTxt'><span>진행경과</span>  : 중국 투자기관의 직접투자를 위한 중국IR 실시</li>
                    <li className='darkText irPerfoContentTxt'><span>투자유치</span>  : 중국 CITIC그룹의 100만USD(1차 투자) 외자유치</li>
                    <li className='darkText irPerfoContentTxt'><span>사후결과</span>  : 사업성장에 따른 중국 CITIC 그룹의 2차 투자유치,  500만USD 2015년 투자협상 진행 중</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </PageBase>
    </div>
  );
};

export default IrPerfo;