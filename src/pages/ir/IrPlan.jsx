import React from 'react';
import './../../styles/ir/irPlan.scss'
import SubBanner from '../../components/common/SubBanner/index';
import subBg from '../../img/ir/ir_sub_bg@2x.png'

const IrPlan = () => {
  const title = 'ZETA PLAN은 지속적인 투자유치 멘토링으로 <br /> 성공적인 투자을 지원합니다'

  return (
    <div>
      <SubBanner title={title} img={subBg} />
      <div className='inner'>
        <div className="irSubtitle">사업계획서</div>
        <ul className='irCircle'>
          <li>핵심요약<br />(Executive Summary)</li>
          <li>기업개요<br />(Corporate Overview)</li>
          <li>제품/용역<br />(Product&Service)</li>
          <li>재무계획<br />(Financial Planning)</li>
          <li>인력/조직<br />(Organization)</li>
          <li>마케팅능력<br />(Marketing)</li>
          <li>위험/기회<br />(Risks & Opportunities)</li>
          <li>실행일정<br />(Action Plan)</li>
          <li>사업체제<br />(Business System)</li>
        </ul>
        <div className="irBusinessContent">
          <ul>
            <li className='irBusTitle'>기업분석</li>
            <li className='irBusTxt'>체크리스트 진단을 통해 종합적인 기업분석 전략보고서가 만들어지고, 내부적으로 임직원이 향후 기업의 향방 및 진로를 결정하는데 보다 도움이 될 수 있도록 구성합니다.</li>
          </ul>
          <ul>
            <li className='irBusTitle'>작성 주체</li>
            <li className='irBusTxt'>[기업+파트너+기타] →단계별로 각 주체가 관련 내용 확인하여 최종완성</li>
          </ul>
          <ul>
            <li className='irBusTitle'>작성기간</li>
            <li className='irBusTxt'>1~2개월 소요</li>
          </ul>
          <ul className='irBnIndex'>
            <li className='irBusTitle'>주요목차</li>
            <li className='irBnStep'>Step 1
              <ul>
                <li className='irBnStepT'>기업요약</li>
                <li>– 보유기술</li>
                <li>– 회사현황</li>
                <li>– 사업추진 단계</li>
                <li>– 사업화 발전 계획</li>
              </ul>
            </li>
            <li className='irBnStep'>Step 2
              <ul>
                <li className='irBnStepT'>외부환경/내부역량/사업전략</li>
                <li>– 분석요약</li>
                <li>– 기준에 따른 평점제시</li>
                <li>– 파트별 분석내용 활용법</li>
                <li>– 기술분석 및 기술가치평가</li>
              </ul>
            </li>
            <li className='irBnStep'>Step 3
              <ul>
                <li className='irBnStepT'>재무분석</li>
                <li>– 추정재무제표</li>
                <li>– 기업 활용 재무프로그램제시</li>
                <li>– 투자유치를 위한 기업가치평가</li>
              </ul>
            </li>
            <li className='irBnStep'>Step 4
              <ul>
                <li className='irBnStepT'>기업 발전을 위한 제언</li>
                <li>– 기술개발로드맵</li>
              </ul>
            </li>
          </ul>
          <div className='irBnTotal'>회사의 사업특성 및 경영진의 비전을 상세한 설명으로 성공적인 투자가 될 수 있도록 지원합니다</div>
        </div>

      </div>
    </div>
  );
};

export default IrPlan;