import React from 'react';
import BoldGradient from '../../img/me/me_company_box@2x.png'; 
import '../../styles/mng/mngCertify.scss';
import SubBanner from '../../components/common/SubBanner/index';
import subBg from '../../img/me/me_sub_bg@2x.png';
import { useEffect } from 'react';



const MngCertify = ({setHdSubStyle}) => {
  const title = '인증기업의 성장을 위해<br />체계적인 업무를 지원합니다.'

  /* header 배경색 변경 */
  useEffect(() => {
    setHdSubStyle('hdMain hdSub')
  }, [setHdSubStyle])

  return (
    <div>
      <SubBanner title={title} img={subBg} />
      <div className='mngInner'>
        <div>
          <h2 className='mngSubTitle'>기업인증</h2>
        </div>
        <h3 className='mngSmTitle mngCertifyTitle'>서비스진행 및 진행절차</h3>
        <div className='mngCertifyTxt'>
          <p>제타플랜은 2006년부터 현재까지 국내 2,500여 개사의 기업 인증을 지원하고 있으며,
          인증기업의 성장을 위한 기업금융, 기술금융, 투자유치, 기술거래, M&A, 해외 진출 등의 업무를 체계적으로 지원하여
          고객사의 글로벌 기업의 성장을 위한 노력을 기울이고 있습니다.</p>
        </div>
        <div className='mngCertifyTxt'>
          <p>제타플랜은 이노비즈기업협회, 벤처기업협회, 경영혁신형중소기업협회 등의 3대 혁신형 기업을 지원하는 협회와 지원 업무를 공유하고 있으며,
          녹색인증을 위한 녹색기술센터, 서울 산업진흥원, 경기테크노파크와도 협력하여 업무를 지원하고 있습니다.</p>
          <p>그리고 한국발명진흥회, 신용보증기금, 한국산업은행, 한국 벤처캐피털협회, 중소기업진흥공단, 농업기술실용화 재단,
          농수산식품유통공사, 한국 소재부품투자기관협의회, 국제기술교류재단, 한국산업기술진흥원 등과 협업하여
          기업의 성공을 위한 지원 업무에 최선을 다하고 있습니다.</p>
        </div>
        <h4 className='mngCertifyCt'>지난 14년 동안 2,500개 이상의 기업이 왜 제타플랜을 선택했을까?</h4>
        <div className='mngCertifyTxt'>
          <p>작은 컨설팅이라도 제타플랜과 인연을 맺었다면, 당신은 자문조직을 얻으신겁니다.</p>
          <p>인증기업의 성장을 위한 컨설팅 체계적인 컨설팅 지원</p>
          <p>- 창업지원 / 기업금융 / IP금융 / 투자유치 / 해외진출 / 특허 기술거래 / IPO(코넥스, 코스닥) / M&A</p>
        </div>
        <div className='mngCertifyTxt'>
          <p>국내, 해외 정부컨설팅 지정 기관으로서 정부지원 컨설팅 사업 기회 제공</p>
          <p>- 중소기업청 경영컨설팅 / 중소기업청 해외민간네트워크 사업 / 한국환경산업기술원 사업화기반 컨설팅 / 한국환경협회 컨설팅</p>
          <p>- 소재부품투자기관협의회 투자유치 컨설팅 / 한국발명진흥회 상설 투자마트 투자지원 컨설팅 / 한국농수산식품유통공사 컨설팅</p>
          <p>- 산업통상자원부 지정 기술거래기관으로서 기술이전 및 기술사업화 · 투자연계 R&D 컨설팅 지원 / KDB 산업은행 기술거래 연계지원 </p>
          <p>- 한국벤처캐피탈협회 M&A 지원사업, 신용보증기금 연계 보증연계투자· IPO · M&A 컨설팅</p>
        </div>
        <h4 className='mngCertifyCt'>제타플랜 인증컨설팅 어떻게 다른가?</h4>
        <div className='mngCertifyTxt'>
          <p>- 인증 취득성공를 위한 사전 검토서비스 제공</p>
          <p>- 2017년 해당 컨설팅 진행사 99% 인증 취득</p>
          <p>- 인증로드맵 설계를 통한 향후 기업 성장 제공 멘토링 무료 제공</p>
          <p>- 경영혁신 표준 메뉴얼 제공</p>
          <p>- 제타플랜 컨설팅의 높은 인지도와 고객만족율</p>
          <p>- 인증만료 안내 및 인증 변경관련 무료 상담 제공</p>
          <p>- 전분야 상담가능한 고급컨설턴트의 1:1 업체 전담 배정 및 지원</p>
        </div>
        <h3 className='mngSmTitle mngCertifyTitle'>기업인증을 통한 성장</h3>
        <div className='mngGrowEdge'>
          <div className='mngGrow'>
            <img src={BoldGradient} alt="두꺼운 그라데이션" className='Boldgradient'/>
            <span className='mngGrowLeft'>창업초기</span>
            <span className='mngGrowMiddle'>성장기</span>
            <span className='mngGrowRight'>성숙기</span>
          </div>
          <div className='mngGrowTxt'>
            <div className='mngGrowF'>
              <ul>
                <li>기업부설연구소</li>
                <li>- 세액공제(개발비 25%)</li>
                <li>- R&D 연구과제 참여 필수요소</li>
                <li>- 전문연구원 지정 필수요소</li>
                <li>- 이노비즈 필수요소, 자금지원</li>
              </ul>
              <ul>
                <li>ISO9001/14001</li>
                <li>- 이노비즈・메인비즈 필수요소</li>
                <li>- KS심사 시 일부 면제</li>
                <li>- NEP 현장심사 시 품질경영</li>
                <li>- 시스템 평가 면제</li>
              </ul>
            </div>
            <div className='mngGrowM'>
              <ul>
                <li>병역특례지정</li>
                <li>- 고급인력을 저임금으로 채용</li>
                <li>- 전문연구인력 36개월 배정으로</li>
                <li>안정적인 인력확보</li>
                <li>- 기업 신뢰도 상승 및 홍보효과</li>
              </ul>
              <ul>
                <li>메인비즈인증</li>
                <li>- 신보보증시 보증료율 0.1% 차감</li>
                <li>- 방송광고비 감면</li>
                <li>- 조달입촬 가점요소</li>
                <li>- 정책자금 지원 가점 요소</li>
              </ul>
              <ul>
                <li>이노비즈인증</li>
                <li>- 기보・신보 보증지원(최대 50억)</li>
                <li>- 방송광고비 감면</li>
                <li>- 정책자금 지원 가점요소</li>
                <li>- 특허우선출원, 상장심사 우대</li>
              </ul>
            </div>
            <div className='mngGrowL'>
              <ul>
                <li>환경표지인증</li>
                <li>- 조달 입찰시 가점</li>
                <li>- 정부포상 제도에 추천</li>
                <li>- 공공기관의 의무구매</li>
              </ul>
              <ul>
                <li>월드클래스300</li>
                <li>- 기술/인력 확보 우대지원</li>
                <li>- 수출확대/금융 우대지원</li>
                <li>- 컨설팅 우대지원 및 가점</li>
                <li>- 기업성장을 위한 최고의 지원</li>
              </ul>
              <ul>
                <li>녹색인증</li>
                <li>- 녹색산업 융자지원</li>
                <li>- 정부발주공사 우대</li>
                <li>- 공공구매, 국방 조달심사우대</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default MngCertify;