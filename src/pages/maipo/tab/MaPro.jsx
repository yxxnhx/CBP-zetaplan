import React from 'react';
import MaIpoAccordion from './MaProAccordion';
import IpoProAccordion from './IpoProAccordion';
import { useState } from 'react';

const MaPro = () => {
  const MaProAcco = [
    {
      id: '1',
      content: '<div><div><div><p><span>예비</span></p></div><ul><p>예비단계<span></span></p><li>• 추진안 수립, 추진팀 구성</li><li>• 대상업체 선정</li></ul></div><div><div><p><span>01</span></p></div><ul><p>대상업계 기초조사<span></span></p><li>• 선정기준 설정</li><li>• 인수후보기업의 물색</li></ul></div><div><div><p><span>02</span></p></div><ul><p>업체선정<span></span></p><li>• 후보기업 중 목표기업 선정</li></ul></div><div><div><p><span>03</span></p></div><ul><p>가치평가<span></span></p><li>• 목표기업 평가</li><li>• 전문기관의 자문 및 평가의뢰</li></ul></div><div><div><p><span>04</span></p></div><ul><p>기업결정<span></span></p><li>• 인수방법 및 조건결정</li><li>• 인수자금 조달계획 수립</li></ul></div><div><div><p><span>05</span></p></div><ul><p>접촉 및 교섭<span></span></p><li>• 대상회사 대주주와의 접촉</li><li>• 인수가격, 인수 및 지급방법 등 기본사항 협의</li></ul></div><div><div><p><span>06</span></p></div><ul><p>합의서 체결<span></span></p><li>• 본 계약체결 전 실사일정 및 향후 추진일정 등 기본사항 합의</li></ul></div><div><div><p><span>07</span></p></div><ul><p>합병계약 체결<span></span></p><li>• 계약서 작성과 자금조달 및 대금결제방법 등 결정</li></ul></div><div><div><p><span>08</span></p></div><ul><p>대금지금 및 사후관리<span></span></p><li>• 합의서 상의 일정에 따라 대금지급</li><li>• 합병 후 사후관리절차 수행</li></ul></div></div>'
    },
    {
      id: '2',
      content: '<div></div>'
    }
  ]

  const [active, setActive] = useState(' ');
  // state 하나 더 만들어서 아코디언 클릭하거나 열리면.. 아니다 그냥 css 로 호버 되는 걸로~

  return (
    <div className='maPro'>

      <MaIpoAccordion title={'일반적 절차'} content={<div className='miAccordion' dangerouslySetInnerHTML={{ __html: MaProAcco[0].content }}></div>} active={active} setActive={setActive} />
      <IpoProAccordion title={'중개기관을 통한 절차'} content={<div className='miAccordion' dangerouslySetInnerHTML={{ __html: MaProAcco[1].content }}></div>} active={active} setActive={setActive} />

    </div>

  );
};

export default MaPro;