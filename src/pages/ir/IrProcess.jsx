import React from 'react';
import './../../styles/ir/irProcess.scss';
import SubBanner from '../../components/common/SubBanner/index';
import subBg from '../../img/ir/ir_sub_bg@2x.png';
import { useState, useEffect } from 'react';
import irProcessStation from './../../img/ir/ir_process01@2x.png';
import irProcessStep from './../../img/ir/ir_process02@2x.png';

const IrProcess = ({ setHdSubStyle }) => {
  const title = '국내벤처캐피탈, 기술금융 투융자를 통한 <br /> 성공적인 투자유치를 지원합니다.';

  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  /* header 배경색 변경 */
  useEffect(() => {
    setHdSubStyle('hdMain hdSub');
  }, [setHdSubStyle]);

  const data = [
    {
      id: 1,
      title: '전략수립',
      content: (
        <div className="irAccoContentBox">
          <div className="irAccoContentArea">
            <div className="irAccoContentT">기업 진단 및 기업 전략 분석자문</div>
            <ul className="irAccoCircleArea">
              <li className="irAccoProCircleContent">
                <ul className="irAccoProCircleM">
                  <li>
                    STEP 01
                    <br />
                    예비진단
                  </li>
                  <li>
                    STEP 02
                    <br />
                    현금 흐름
                  </li>
                  <li>
                    STEP 03
                    <br />
                    성공요소
                  </li>
                  <li>
                    STEP 04
                    <br />
                    내부환경
                  </li>
                  <li>
                    STEP 05
                    <br />
                    사업전략
                  </li>
                  <li>
                    STEP 06
                    <br />
                    자무재표
                  </li>
                </ul>
                <ul className="irAccoProCircleDes">
                  <li>사업경쟁력(핵심역량)</li>
                  <li>미래현금흐름</li>
                  <li>성공요소</li>
                  <li>핵심역량</li>
                  <li>사업전략</li>
                  <li>미래수익구조</li>
                </ul>
              </li>
              <p className="irProText">
                예비진단 단계에서 핵심역량을 판단할 수 있도록 지원하며 그 핵심역량으로 성공적인 사업추진을 할 수 있도록
                사업 전략 및 계획수립을 지원합니다
              </p>
            </ul>
            <div className="irAccoContentT">재무분석 및 투자유치 IR 컨설팅</div>
            <ul className="irAccoProCircleAreaS">
              <li className="irAccoProCircleBox">
                <ul className="irAccoProCircleS">
                  <li>
                    STEP 01
                    <br />
                    예비진단
                  </li>
                  <li>
                    STEP 02
                    <br />
                    재무분석
                  </li>
                  <li>
                    STEP 03
                    <br />
                    투자유치준비
                  </li>
                  <li>
                    STEP 04
                    <br />
                    투자유치실행/IPO
                  </li>
                </ul>
                <ul className="irAccoProCircleSDes">
                  <li>재무분석</li>
                  <li>기준 및 역량분석</li>
                  <li>실행전략</li>
                </ul>
                <ul className="irAccoProCircleSDetail">
                  <li>사업경쟁력(핵심역량)</li>
                  <li>미래현금흐름</li>
                  <li>성공요소</li>
                  <li>핵심역량</li>
                </ul>
              </li>
            </ul>
            <p className="irProText">
              재무분석에서 추정재무제표작성 및 기업가치 평가를 진행하며 기준 및 역량분석에서는 사전절차 확인 및
              주요사항을 준비합니다. <br /> 실행전략에서 추진전략 및 세부 실행 계획 수립을 하여 성공적인 진단을
              진행합니다.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: '역량강화',
      content: (
        <div className="irAccoContentBox">
          <div className="irAccoContentArea irAccoCenter">
            <img src={irProcessStation} alt="역량강화" className="irProcessStation" />
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: '단계별 IR 실행에 따른 컨설팅',
      content: (
        <div className="irAccoContentBox">
          <div className="irAccoContentArea irAccoCenter">
            <img src={irProcessStep} alt="역량강화" className="irProcessStep" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div>
      <SubBanner title={title} img={subBg} />

      <div className="inner">
        <div className="irSubtitle">Process</div>
        <ul className="irProCircleArea">
          <li className="irProCircleBox">
            <ul className="irProCircle">
              <li>
                STEP 01
                <br />
                경영 및 사업현황조사
              </li>
              <li>
                STEP 02
                <br />
                기업 진단
              </li>
              <li>
                STEP 03
                <br />
                투자유치 및 성장전략 수립
              </li>
              <li>
                STEP 04
                <br />
                IR자료 작성
              </li>
              <li>
                STEP 05
                <br />
                사후관리
                <br />
                (국내 VC 투자유치 등)
              </li>
            </ul>
          </li>
        </ul>
        <ul className="irProContents">
          <li className="irProContent">
            경영 및 사업현황조사에서는 기업현황 기본조사 (사업영역, 연혁 등)가 진행됩니다. 그 이후 기업 진단에서는
            기업현황 및 Need 파악, 내∙외부 환경분석 및 기업경영전략 타당성 검토합니다. 세 번째 단계에서는 투자유치 및
            성장전략 수립이 진행됩니다. 자금조달 및 재무전략 자문과 적정자본금 규모 및 지분구조 전략 컨설팅, 투자유치
            단계별 추진전략 컨설팅 그리고 성공적인 IPO및 해외진출 전략컨설팅이 진행됩니다.{' '}
          </li>
          <li className="irProContent">
            네 번째 단계에서는 IR자료 작성이 되며 IR용 사업계획서(TM, PT자료) 작성 컨설팅과 추정재무제표작성 및
            기업가치평가를 합니다. 마지막으로 총평 및 제언이 진행됩니다. 프로젝트 완료 검토, 보고 및 사후관리
            계획수립됩니다. 사후관리 (국내 VC 투자유치 등)에서는 국내 VC 참여 투자유치 IR 행사지원, 개별VC 대상 기업
            IR지원 및 투자유치 성사지원 및 투자유치 컨설팅 이후 지속적인 투자유치 성사지원이 진행됩니다
          </li>
        </ul>
        <div className="irProcessWrapper">
          <div className="irAccordion">
            {data.map((item, i) => (
              <div className="irProcessItem" key={i}>
                <div className={selected === i ? 'irProcessBtn on' : 'irProcessBtn'} onClick={() => toggle(i)}>
                  <h2 className="irProcessTitle">{item.title}</h2>
                  <div>{selected === i ? <div className="irTopBtn"></div> : <div className="irUnderBtn"></div>}</div>
                </div>
                <div className={selected === i ? 'irProcessContent show' : 'irProcessContent'}>{item.content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IrProcess;
