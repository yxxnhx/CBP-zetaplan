import React from 'react';
import './../../styles/ir/irPlan.scss'
import SubBanner from '../../components/common/SubBanner/index';
import subBg from '../../img/ir/ir_sub_bg@2x.png'
import { useEffect } from 'react';
import PageBase from '../../components/common/Darkmode/PageBase';


const IrPlan = ({ setHdSubStyle }) => {
  const title = 'ZETA PLAN은 지속적인 투자유치 멘토링으로\n성공적인 투자을 지원합니다'
  // breadCrumbs
  const oneDepth='투자 IR';
  const oneDepthLink='/ir';
  const twoDepth='사업계획서';
  const twoDepthLink='/ir-plan';
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
          <div className="darkText irSubtitle">사업계획서</div>
          <ul className='irCircle'>
            <li>핵심요약<br /><span>(Executive Summary)</span></li>
            <li>기업개요<br /><span>(Corporate Overview)</span></li>
            <li>제품/용역<br /><span>(Product&Service)</span></li>
            <li>재무계획<br /><span>(Financial Planning)</span></li>
            <li>인력/조직<br /><span>(Organization)</span></li>
            <li>마케팅능력<br /><span>(Marketing)</span></li>
            <li>위험/기회<br /><span>(Risks & Opportunities)</span></li>
            <li>실행일정<br /><span>(Action Plan)</span></li>
            <li>사업체제<br /><span>(Business System)</span></li>
          </ul>
          <div className="irBusinessContent">
            <ul>
              <li className='darkText irBusTitle'>기업분석</li>
              <li className='darkText irBusTxt'>체크리스트 진단을 통해 종합적인 기업분석 전략보고서가 만들어지고, 내부적으로 임직원이 향후 기업의 향방 및 진로를 결정하는데 보다 도움이 될 수 있도록 구성합니다.</li>
            </ul>
            <ul>
              <li className='darkText irBusTitle'>작성 주체</li>
              <li className='darkText irBusTxt'>[기업+파트너+기타] →단계별로 각 주체가 관련 내용 확인하여 최종완성</li>
            </ul>
            <ul>
              <li className='darkText irBusTitle'>작성기간</li>
              <li className='darkText irBusTxt'>1~2개월 소요</li>
            </ul>
            <ul className='darkText irBnIndex'>
              <li className='darkText irBusTitle'>주요목차</li>
              <li className='darkText irBnStep'>Step 1
                <ul>
                  <li className='darkText irBnStepT'>기업요약</li>
                  <li>– 보유기술</li>
                  <li>– 회사현황</li>
                  <li>– 사업추진 단계</li>
                  <li>– 사업화 발전 계획</li>
                </ul>
              </li>
              <li className='darkText irBnStep'>Step 2
                <ul>
                  <li className='darkText irBnStepT'>외부환경/내부역량/사업전략</li>
                  <li>– 분석요약</li>
                  <li>– 기준에 따른 평점제시</li>
                  <li>– 파트별 분석내용 활용법</li>
                  <li>– 기술분석 및 기술가치평가</li>
                </ul>
              </li>
              <li className='darkText irBnStep'>Step 3
                <ul>
                  <li className='darkText irBnStepT'>재무분석</li>
                  <li>– 추정재무제표</li>
                  <li>– 기업 활용 재무프로그램제시</li>
                  <li>– 투자유치를 위한 기업가치평가</li>
                </ul>
              </li>
              <li className='darkText irBnStep'>Step 4
                <ul>
                  <li className='darkText irBnStepT'>기업 발전을 위한 제언</li>
                  <li>– 기술개발로드맵</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="irPlanBg">
          <div className='irBnTotal'>
            <h2>ZETA PLAN</h2>
            <p>회사의 사업특성 및 경영진의 비전을 상세한 설명으로 성공적인 투자가 될 수 있도록 지원합니다</p>
          </div>
        </div>
      </PageBase>
    </div>
  );
};

export default IrPlan;