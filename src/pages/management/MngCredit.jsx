import React from 'react';
import CreditImg from '../../img/me/me_credit01@2x.png';
import CooperationImg from '../../img/me/me_credit2@2x.png';
import '../../styles/mng/mngCredit.scss';
import SubBanner from '../../components/common/SubBanner/index';
import subBg from '../../img/me/me_sub_bg@2x.png';
import { useState, useEffect } from 'react';


const MngCredit = ({ setHdSubStyle }) => {
  const title = '신용거래에 따른 위험도를 최소화하고,<br />합리적인 거래처 결정을 지원합니다.'

  const [selected, setSelected] = useState(null)
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  /* header 배경색 변경 */
  useEffect(() => {
    setHdSubStyle('hdMain hdSub')
  }, [setHdSubStyle])

  const data = [
    {
      title: '기업신용평가서비스',
      content:
        (
          <div className="mngCreditTxt">
            <p>기업 신용평가(Credit Assessment)란 신용거래에 따른 대손위험의 최소화와 합리적인 거래처의 결정을 위해</p>
            <p>거래상대방에 대한 신용상태를 파악하여 신용거래기간 내 부식화할 가능성을 평가하고 등급으로 나타내는 과정입니다.</p>
          </div>
        )
    },
    {
      title: '공공입찰 기업신용평가',
      content:
        (
          <div>
            <img src={CreditImg} alt="credit" className='mngCreditImg' />
            <div className='mngCreditTxt'>
              <p>국가계약관련 회계예규 및 공공기관의 입찰적격심사세부기준의 변경으로 물품, 용역, 공사 입찰참여자의 경영상태의 평가방법이 기업신용평가로</p><p>변경되었습니다. 조달청을 시작으로 중소기업청, 공기업, 행정자치부 등 모든 공공기관으로 확대 되어가는 “공공입찰 기업신용평가”에 대비하시기</p>
              <p>바랍니다.</p>
            </div>
          </div>
        )
    },
    {
      title: '당좌거래 기업신용평가',
      content:
        (
          <div>
            <img src={CreditImg} alt="credit" className='mngCreditImg' />
            <div className='mngCreditTxt'>
              <p>시중은행 및 전국은행연합회는 현행 당좌 개설요건을 강화하여 일정수준의 신용도를 가진 기업에만 어음발행을 허용하는  개선안을 마련하였습니다.</p>
              <p>(2009년 2월). 이러한 ‘어음제도 개선방안’의 일환으로 은행대신 외부의 공신력있는 조사, 평가기관이 당좌거래개설을 위한 기업신용평가를 수행하게</p><p>되었습니다. 나이스디앤비 등 신용평가기관을 통해 받으셔서 은행에 제출하신 당좌개설용 기업신용평가결과는 은행의   당좌개설심사에 반영되어 개설여부</p>
              <p>및 어음교부매수가 결정됩니다.</p>
            </div>
          </div>
        )
    },
    {
      title: '아파트입찰용 신용평가',
      content:
        <div>
          <p className='mngCreditApart'>국토교통부 지침상 사업자 선정 제도</p>
          <ul className='mngCreditApartTxt'>
            <li>(출처 : 국토교통부 고사(제 2013-854호), 주탁관리업자 및 사업자 선정 지침)</li>
            <li className="mngCreditbold">사업자 선정에서 낙찰방식</li>
            <li>- 경쟁입찰방식에 의하며, 적격심사제를 기본으로 하되, 관리규약에 정한 경우 최저(고) 낙찰제</li>
            <li className="mngCreditbold">입찰참가 사업자 제출서류(지침 제20조)</li>
            <li>- 사업별   면허증/등록증, 사업자등록증 사본, 법인등기부등본, 국세・지방세 납세필증, 법정 기술인력시설 장비 현황</li>
            <li>-  적격심사제에서 추가 서류 : 신용평가등급, 행정처분확인서, 기술인력보유증명서, (업무)실적증명서, 장비구입증,  (입찰가격표시한)입찰서류신청서 등</li>
          </ul>
          <p className='mngCreditApart'>적격심사제에서 신용평가유의사항</p>
          <ul className='mngCreditApartTxt'>
            <li>신용평가등급확인서 발급 기관 확인</li>
            <li>- 은행 등 금융기관, 공제조합, 보증기관의 신용조사서, 평가서는 사용 불가</li>
            <li className="mngCreditbold">신용평가등급확인서 점검</li>
            <li>- 유효기간 확인 : 등급 유효기간(기한)이 경과한 것은 사용불가</li>
            <li>- 제출용도 확인 : ‘공공기관제출용’, ‘공공기관입찰용’, ‘공동주택입찰용’ 등으로 표시된 것만 사용 가능 협력사 평가용은 사용불가</li>
          </ul>
        </div>
    },
    {
      title: '협력업체 신용평가',
      content:
        (
          <div>
            <div className='mngCreditTxt'>
              <p>전문적인 평가모형과 실사를 통하여 거래 기업의 상거래 신용능력을 등급으로 제공하고 평가연구원이 작성하여 보고서   형태로 발급하는 서비스입니다.</p>
              <p>신용평가 결과 및 신용변동내역을 온라인 상에서 조회 및 출력할 수 있고 실시간 모니터링을 통해 상시적으로 거래기업의 신용능력을 관리할 수 있는 솔루션입니다.</p>
            </div>
            <img src={CooperationImg} alt="신용평가" className='mngCreditImg' />
            <div className='mngCreditCombine'>
              <div>1. 검증된 기업정보 활용</div><p>- 협력회사 신용평가 서비스를 통한 검증된 기업정보 활용</p>
              <div>2. 신뢰가 있는 상거래 가능</div>
              <p>- 공정하고 객관적인 평가로 신뢰성 있는 상거래 관계 형성가능</p>
              <div>3. 중소기업 자사 진단 컨설팅 효과</div>
              <p>- 재무상태에 따른 개선사항 등의 경영진단 컨설팅 효과</p>
              <div>4. 온라인 DATA 전송</div>
              <p>- 서류제출 필요없는 간편한 온라인 DATA 전송</p>
            </div>
          </div>
        )
    }
  ]


  return (
    <div>
      <div>
        <SubBanner title={title} img={subBg} />
        <div className='mngInner'>
          <h2 className='mngSubTitle'>신용평가</h2>
          <h2 className='mngSmTitle'>서비스진행 및 진행절차</h2>
          <ul className='mngFiveCircle'>
            <li>홈페이지<br />가입/평가신청</li>
            <li>평가수수료<br />납부</li>
            <li>필요서류<br />제출</li>
            <li>실태조사<br />인터뷰 및 분석</li>
            <li>평가완료<br />입찰기관에 결과통지</li>
          </ul>
          <div className='mngCreditWrapper'>
            <div className='mngAccordion'>
              {data.map((item, i) => (
                <div className='mngCreditItem' key={item.id}>
                  <div className={selected === i ? 'mngCreditBtn on' : 'mngCreditBtn'} onClick={() => toggle(i)}>
                    <h2 className='mngCreditTitle'>{item.title}</h2>
                    <div>{selected === i ? <div className='mngTopBtn'></div> : <div className='mngUnderBtn'></div>}</div>
                  </div>
                  <div className={selected === i ? 'mngCreditContent show' : 'mngCreditContent'}>{item.content}</div>
                </div>
              ))}
            </div>
          </div>
          <h2 className='mngSmTitle mngCreditReportTitle'>보고서 종류</h2>
          <div className='mngCreditReport'>
            <div>CLIP보고서 (신용평가보고서)</div>
            <p>협력회사가 제출한 서류와 평가연구원의 평가로 작성된 보고서로 기업개요, 대표자 정보, 영업현황 등 제공</p>
            <div>거래처위험분석보고서</div>
            <p>협력회사의 판매처 정보를 분석하여 거래위험 정도를 분석하여 제공하는 보고서, 거래금액, 거래비중 등의 정보제공</p>
            <div>건설실적 보고서</div>
            <p>건설업종 기업에 발급되는 보고서, 시공순위, 실적금액, 실적내역, ISO현황 등의 정보제공</p>
            <div>SI실적 보고서</div>
            <p>SI업종 기업에 발급되는 보고서, 기술자 현황, 프로젝트 수행실적, 부설시설 연구기관 등의 정보제공</p>
            <div>심층분석 보고서</div>
            <p>정밀심사와 분석을 필요로 하는 기업에 제공하는 보고서</p>
          </div>
          <button className='mngCreditApply' onClick={() => { window.location.href = 'https://aff.g2brating.co.kr/index.html#MENUCM0300?param=zeta' }}>신용평가 신청</button>
        </div>
      </div>
    </div>
  );
};

export default MngCredit;