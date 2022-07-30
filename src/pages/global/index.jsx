import React from 'react';
import '../../styles/global/index.scss';
import SubBanner from '../../components/common/SubBanner/index';
import subBg from '../../img/global/global_sub_bg.png';
import { useEffect, useState } from 'react';
import PageBase from '../../components/common/Darkmode/PageBase';

const index = ({ setHdSubStyle }) => {
  const title = 'ZETA PLAN은 전 세계적으로\n우수한 해외 네트워크를 보유하고 있습니다.';

  const oneDepth = '해외진출';
  const oneDepthLink = '/gb';
  const twoDepth = '개요';
  const twoDepthLink = '/gb';
  const linkActive = 'twoDepth';

  /* header 배경색 변경 */
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setHdSubStyle('hdMain hdSub');
  }, [setHdSubStyle]);

  
  return (
    <div>
      <SubBanner
        title={title}
        img={subBg}
        oneDepth={oneDepth}
        oneDepthLink={oneDepthLink}
        twoDepth={twoDepth}
        twoDepthLink={twoDepthLink}
        linkActive={linkActive}
      />
      <PageBase>
        <div className="gbInner">
          <div className="gbTabTitleBox">
            <p className="gbTabTitle darkText">개요</p>
          </div>
          <p className="gbContentSubTitle darkText">프로그램 개요</p>
          <div className="gbMaterialBox darkText">
            <p className="gbMaterialTitle">✔︎ 대상 국가</p>
            <p className="gbMaterialContent">중국, 베트남, 인도네시아 등 아시아 국가 중심 시장조사</p>
          </div>
          <div className="gbMaterialBox darkText">
            <p className="gbMaterialTitle">✔︎ 서비스 내용</p>
            <p className="gbMaterialContent">
              • 15년의 노하우, 2천개 이상의 기업지원, 중진공, kotra, kiat 등 정부기관의 글로벌사업자로 선정된
              (주)제타플랜인베스트가 해외시장의 전반적 상황에 대한 정보를 수집, 제공.
            </p>
            <p className="gbMaterialContent">
              • 각종 시장조사 기관의 발간정보, 해외 대리인, 오퍼상 등을 이용하여 실시하는 시장조사 활동이며 해외시장의
              전반적 상황(경제 동향, 산업 동향, 시장 특성, 시장 규모 및 전망) 정보 제공
            </p>
          </div>
          <div className="gbMaterialBox darkText">
            <p className="gbProMaterialTitle">✔︎ 진행 절차</p>
            <div className="gbProcessImgBox">해외진출지원 주요 실적</div>
          </div>
          <div className="gbMaterialBox darkText">
            <p className="gbMaterialTitle">✔︎ 기대효과</p>
            <p className="gbMaterialContent">중국, 베트남, 인도네시아 등 아시아 국가 중심 시장조사</p>
            <p className="gbContentSubTitle">해외진출지원 주요 실적 그래프</p>
          </div>
          <div className="gbMaterialBox darkText">
            <p className="gbPartMaterialTitle">✔︎ 분야별 주요 실적</p>
            <div className="gbProcessChartImgBox">해외진출 분야별 주요 실적</div>
          </div>
          <p className="gbTbMaterialTitle darkText">✔︎ 해외진출사업 관련 활동</p>
          <div className="gbChartBox darkText">
            <ul className="gbChart">
              <li className="gbChartListTop">
                <p className="gbChartYear">년도</p>
                <p className="gbChartName">사업명</p>
                <p className="gbChartCom">발주처</p>
                <p className="gbChartCon">사업내용</p>
              </li>
              <li className="gbchartList">
                <p className="gbChartYear">2019</p>
                <p className="gbChartName">융복합콘텐츠육성 엑셀러레이팅</p>
                <p className="gbChartCom">성남산업진흥원</p>
                <p className="gbChartCon">멘토링, 교육, 국내외 투자상담회</p>
              </li>
              <li className="gbchartList">
                <p className="gbChartYear">2019</p>
                <p className="gbChartName">글로벌현지화 엑셀러레이팅 사업</p>
                <p className="gbChartCom">인천테크노파크</p>
                <p className="gbChartCon">멘토링, 현지화 교육</p>
              </li>
              <li className="gbchartList">
                <p className="gbChartYear">2019</p>
                <p className="gbChartName">중국 북경투자유치로드쇼</p>
                <p className="gbChartCom">KITIA</p>
                <p className="gbChartCon">중국 투자유치 컨퍼런스 진행</p>
              </li>
              <li className="gbchartList">
                <p className="gbChartYear">2019</p>
                <p className="gbChartName">독일 소재부품 투자유치 로드쇼</p>
                <p className="gbChartCom">KITIA</p>
                <p className="gbChartCon">독일투자유치 컨퍼런스 진행</p>
              </li>
              <li className="gbchartList">
                <p className="gbChartYear">2019</p>
                <p className="gbChartName">소재부품기업 전략적제휴지원</p>
                <p className="gbChartCom">KITIA</p>
                <p className="gbChartCon">해외투자유치전략 코칭 및 수립</p>
              </li>
              <li className="gbchartList">
                <p className="gbChartYear">2019</p>
                <p className="gbChartName">중소기업 해외진출 컨설팅</p>
                <p className="gbChartCom">신용보증기금</p>
                <p className="gbChartCon">해외 IR, 해외진출전략 컨설팅</p>
              </li>
              <li className="gbchartList">
                <p className="gbChartYear">2019</p>
                <p className="gbChartName">글로벌성과확산강화산업</p>
                <p className="gbChartCom">KIAT</p>
                <p className="gbChartCon">바이어 발굴 및 매칭, 상담회 개최</p>
              </li>
              <li className="gbchartList">
                <p className="gbChartYear">2018</p>
                <p className="gbChartName">서울시 중국투자협력주간</p>
                <p className="gbChartCom">서울특별시</p>
                <p className="gbChartCon">바이어 발굴 및 매칭, 투자상담회 개최</p>
              </li>
              <li className="gbchartList">
                <p className="gbChartYear">2019</p>
                <p className="gbChartName">베트남 투자유치로드쇼</p>
                <p className="gbChartCom">KIAT</p>
                <p className="gbChartCon">바이어 발굴 및 매칭, 투자상담회 개최</p>
              </li>
              <li className="gbchartList">
                <p className="gbChartYear">2018</p>
                <p className="gbChartName">중소환경기업 사업화기반구축사업</p>
                <p className="gbChartCom">한국환경산업기술원</p>
                <p className="gbChartCon">해외진출 전략수립 컨설팅, 바이어 매칭</p>
              </li>
              <li className="gbchartList">
                <p className="gbChartYear">2018</p>
                <p className="gbChartName">제9회 중국 투자유치로드쇼</p>
                <p className="gbChartCom">KITIA</p>
                <p className="gbChartCon">바이어 발굴 및 매칭, 투자상담회 개최</p>
              </li>
              <li className="gbchartList">
                <p className="gbChartYear">2018</p>
                <p className="gbChartName">소재부품기업 전략적제휴지원</p>
                <p className="gbChartCom">KITIA</p>
                <p className="gbChartCon">해외투자유치전략 코칭 및 수립</p>
              </li>
            </ul>
          </div>
        </div>
      </PageBase>
    </div>
  );
};

export default index;
