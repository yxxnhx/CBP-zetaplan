import React from 'react';
import './../../styles/ir/irProcess.scss'
import Accordion from './Accordion';
import Accordion2 from './Accordion';
import { useState   } from 'react';

const IrProcess = () => {
  const acco = [
    {
      id: '1',
      txt: `<div class="accoContentT">기업 진단 및 기업 전략 분석자문</div>
<ul class='irProCircleArea'><li class='irProCircleContent'><ul class='irProCircleM'><li>STEP 01<br />예비진단</li><li>STEP 02<br />현금 흐름</li><li>STEP 03<br />성공요소</li><li>STEP 04<br />내부환경</li><li>STEP 05<br />사업전략</li><li>STEP 06<br />자무재표</li></ul><ul class='irProCircleDes'><li>사업경쟁력(핵심역량)</li><li>미래현금흐름</li><li>성공요소</li><li>핵심역량</li><li>사업전략</li><li>미래수익구조</li></ul></li><p class='irProText'>예비진단 단계에서 핵심역량을 판단할 수 있도록 지원하며 그 핵심역량으로 성공적인 사업추진을 할 수 있도록 사업 전략 및 계획수립을 지원합니다</p></ul><div class="accoContentT">재무분석 및 투자유치 IR 컨설팅</div><ul class='irProCircleAreaS'><li><ul class='irProCircleS'><li>STEP 01<br />예비진단</li><li>STEP 02<br />재무분석</li><li>STEP 03<br />투자유치준비</li><li>STEP 04<br />투자유치실행/IPO</li></ul><ul class='irProCircleSDes'><li>재무분석</li><li>기준 및 역량분석</li><li>실행전략</li></ul><ul class='irProCircleSDetail'><li>사업경쟁력(핵심역량)</li><li>미래현금흐름</li><li>성공요소</li><li>핵심역량</li></ul></li></ul><p class='irProText'>재무분석에서 추정재무제표작성 및 기업가치 평가를 진행하며 기준 및 역량분석에서는 사전절차 확인 및 주요사항을 준비합니다. 실행전략에서 추진전략 및 세부 실행 계획 수립을 하여 성공적인 진단을 진행합니다.</p></div>`
    },
    {
      id: '2',
      txt: '<div></div>'
    },
    {
      id: '3',
      txt: '<div>ir 단계별 IR 실행에 따른 컨설팅</div>'}
  ]
  console.log(acco[0].txt);
  const [active, setActive] = useState(' '); 
  return (
    <div>
      <div className='inner'>
        <div className="irSubtitle">Process</div>
        <ul className='irProCircleArea'>
          <li className='irProCircleBox'>
            <ul className='irProCircle'>
              <li>STEP 01<br />경영 및 사업현황조사</li>
              <li>STEP 02<br />기업 진단</li>
              <li>STEP 03<br />투자유치 및 성장전략 수립</li>
              <li>STEP 04<br />IR자료 작성</li>
              <li>STEP 05<br />사후관리<br />(국내 VC 투자유치 등)</li>
            </ul>
          </li>
        </ul>
        <ul className="irProContent">
          <li>경영 및 사업현황조사에서는 기업현황 기본조사 (사업영역, 연혁 등)가 진행됩니다. 그 이후 기업 진단에서는 기업현황 및 Need 파악, 내∙외부 환경분석 및 기업경영전략 타당성 검토합니다. 세 번째 단계에서는 투자유치 및 성장전략 수립이 진행됩니다. 자금조달 및 재무전략 자문과 적정자본금 규모 및 지분구조 전략 컨설팅, 투자유치 단계별 추진전략 컨설팅 그리고 성공적인 IPO및 해외진출 전략컨설팅이 진행됩니다. </li>
          <li>네 번째 단계에서는 IR자료 작성이 되며 IR용 사업계획서(TM, PT자료) 작성 컨설팅과 추정재무제표작성 및 기업가치평가를 합니다. 마지막으로 총평 및 제언이 진행됩니다. 프로젝트 완료 검토, 보고 및 사후관리 계획수립됩니다. 사후관리 (국내 VC 투자유치 등)에서는 국내 VC 참여 투자유치 IR 행사지원, 개별VC 대상 기업 IR지원 및 투자유치 성사지원 및 투자유치 컨설팅 이후 지속적인 투자유치 성사지원이 진행됩니다</li>
        </ul>
        <Accordion title="전략수립" txt={<div className='accoCircleArea' dangerouslySetInnerHTML={{__html: acco[0].txt}}></div>} active={active} setActive={setActive}/>
        <Accordion2 title="역량강화" txt={<div className='irProcess01' dangerouslySetInnerHTML={{__html: acco[1].txt}}></div>} active={active} setActive={setActive}/>
        <Accordion2 title="단계별 IR 실행에 따른 컨설팅" txt={<div className='irProcess02' dangerouslySetInnerHTML={{__html: acco[2].txt}}></div>} active={active} setActive={setActive}/>
      </div>
    </div>
  );
};

export default IrProcess;