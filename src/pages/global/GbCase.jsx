import React from 'react';
import gbMap from '../../img/global/global_map.png';
import '../../styles/global/gbCase.scss';
import SubBanner from '../../components/common/SubBanner/index';
import subBg from '../../img/global/global_sub_bg.png';
import { useState, useEffect } from 'react';

const GbCase = ({ setHdSubStyle }) => {
  const title = 'ZETA PLAN은 전 세계적으로<br/> 우수한 해외 네트워크를 보유하고 있습니다.';

  const oneDepth = '해외진출';
  const oneDepthLink = '/gb';
  const twoDepth = '해외진출사례';
  const twoDepthLink = '/gb-case';
  const linkActive = 'twoDepth';

  /* header 배경색 변경 */
  useEffect(() => {
    setHdSubStyle('hdMain hdSub');
  }, [setHdSubStyle]);

  /* dark mode */
  const [theme, setTheme] = useState('');
  const [themeCss, setThemCss] = useState('');
  const handleTheme = () => {
    const value = theme;
    setTheme(!value);
    const cssValue = value ? 'dark' : 'light';
    setThemCss(cssValue);
  };

  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const data = [
    {
      id: '1',
      title: 'CHINA NETWORK',
      content: (
        <div className="gbAccoContentBox">
          <div className="gbAccoContentArea">
            <div className="gbAccoContentT">
              <h1>中國 ‘ICI’</h1>
            </div>
            <div className="gbAccoContentC">
              <ul>
                <li>ICI : Beijing B&R International Co-incubation</li>
                <li>
                  Beijing B&R International Co-incubation(ICI)는 인큐베이션 서비스 제공 업체를 서로 연결하고 파트너십을
                  촉진하는 임무를 가진 비영리 및 비정부 네트워크임
                </li>
              </ul>
            </div>
          </div>
          <div className="gbAccoContentArea">
            <div className="gbAccoContentT">
              <h1>中國 ‘베이징기술교역촉진중심</h1>
            </div>
            <div className="gbAccoContentC">
              <ul>
                <li>BTEC : Beijing Technology Transfer & Exchange, Promotion Center</li>
                <li>
                  중국 베이징 기술 교류 촉진 센터는 산업의 발전에 따른 중국기술의 향상을 위해 중국기업의 해외 특허기술
                  이전을 지원하는 기관임.
                </li>
              </ul>
            </div>
          </div>
          <div className="gbAccoContentArea">
            <div className="gbAccoContentT">
              <h1>中國 ‘상하이기술교역소</h1>
            </div>
            <div className="gbAccoContentC">
              <ul>
                <li>STTE : Shanghai Technology Transfer & Exchange Center</li>
                <li>
                  상하이기술거래소(STTE)는 중국 최초의 국가급 종산 Technomart 로서 중국 과학기술부와 상하이시 인민정부에
                  의해 1993년 12월 설립
                </li>
              </ul>
            </div>
          </div>
          <div className="gbAccoContentArea">
            <div className="gbAccoContentT">
              <h1>절강성과학기술교류중심</h1>
            </div>
            <div className="gbAccoContentC">
              <ul>
                <li>절강대외과기교류중심(Zhejang Provincial and Technology Center with foreign conturies)</li>
                <li>
                  중국 절강성 기술교류 네트워크와 연계된 절강성 과학기술국 산하 직속 기관으로 중국 과학기술부와 절강성
                  항주시 인민정부에 의해 2008년 12월 설립
                </li>
              </ul>
            </div>
          </div>
          <div className="gbAccoContentArea">
            <div className="gbAccoContentT">
              <h1>中國 ‘북방기술교역시장(NTEM)’</h1>
            </div>
            <div className="gbAccoContentC">
              <ul>
                <li>북방기술교역시장(Northen Technology Exchange Market )</li>
                <li>
                  천진시 북방기술교역시장은 중국 하북성 기술교류 네트워크와 연계된 천진시 과학기술국 산하 직속 기관으로
                  중국 과학기술부와 천진시 인민정부에 의해 1995년 3월 설립
                </li>
              </ul>
            </div>
          </div>
          <div className="gbAccoContentArea">
            <div className="gbAccoContentT">
              <h1>中國 ‘온주시 과기합작교류중심’</h1>
            </div>
            <div className="gbAccoContentC">
              <ul>
                <li>윈저우시 과기합작교류중심(WenZhou Science-Tech cooperation Exchange Center)</li>
                <li>
                  온주시 과기합작교류중심은 중국 절강성 기술교류 네트워크와 연계된 온주시 과학기술국 산하 직속 기관으로
                  중국 과학기술부와 절강성 온 주시 인민정부에 의해 2009년 8월 설립
                </li>
              </ul>
            </div>
          </div>
          <div className="gbAccoContentArea">
            <div className="gbAccoContentT">
              <h1>중국 국제 무역 촉진 위원회</h1>
            </div>
            <div className="gbAccoContentC">
              <ul>
                <li>
                  대외 무역 진흥 및 외국의 선진 기술 도입과 투자 유치, 외국과 각종 형태의 경제, 기술협력 활동을 하고
                  있으며 중국에서 가장 핵심적이며 커다란 국제무역 진흥 기관임.
                </li>
                <li>
                  중국 전역에 걸쳐 지소가 마련되어 있으며 특히 청두와 창사 지소는 EEN 중국파트너로 2011년 이후
                  국내기업의 중국 진출을 위해 다양한 협력을 시도 중
                </li>
              </ul>
            </div>
          </div>
          <div className="gbAccoContentArea">
            <div className="gbAccoContentT">
              <h1>中國 ‘산업과기창신위원회</h1>
            </div>
            <div className="gbAccoContentC">
              <ul>
                <li>China Industrial Technological Innovation Association</li>
                <li>
                  국가 각 부서간의 협조를 통하여 정부의 기능과 시장의 규칙을 조율하고 공동으로 힘을 모아 중국의 과학기술
                  성과를 산업화
                </li>
              </ul>
            </div>
          </div>
          <div className="gbAccoContentArea">
            <div className="gbAccoContentT">
              <h1>中國 산동성 ‘교주市’</h1>
            </div>
            <div className="gbAccoContentC">
              <ul>
                <li>중국산동성 지아저우시(ZIAOZHOU City )</li>
                <li>
                  중국 산동성 교주시는 중국 청도시 남동쪽의 교주만에 위치하고 있으며, 1987년 2월, 청도시의 첫 번째 위성
                  도시로 국무원의 승인을 받은 도시
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: '2',
      title: 'ASIA NETWORK',
      content: (
        <div className="gbAccoContentBox">
          <div className="gbAccoContentArea">
            <div className="gbAccoContentT">
              <h1>Transpacific IP</h1>
            </div>
            <div className="gbAccoContentC">
              <ul>
                <li>중국 베이징,홍콩,대만,싱가폴의 제품 및 기술교역 전문기관</li>
                <li>중국 내 시장조사, 수출사절단 및 전시회참가, 바이어 매칭 등을 체계적으로 지원하고 있음</li>
              </ul>
            </div>
          </div>
          <div className="gbAccoContentArea">
            <div className="gbAccoContentT">
              <h1>VIETNAM IPC</h1>
            </div>
            <div className="gbAccoContentC">
              <ul>
                <li>IPC는 베트남 남부 지역 호치민시에 본사를 둔 투자 촉진 센터</li>
                <li>IPCS는 투자 유치 기능을 구현하고 남부 지역의 외국인 직접 투자 (FDI)의 관리 작업에 참여</li>
              </ul>
            </div>
          </div>
          <div className="gbAccoContentArea">
            <div className="gbAccoContentT">
              <h1>IPA VIETNAM</h1>
            </div>
            <div className="gbAccoContentC">
              <ul>
                <li>Vietnam Investment Promotion & Associates JSC</li>
                <li>베트남 내 시장조사, 서류준비, 투자증명서 신청, 비자 허가 등을 체계적으로 지원하고 있음</li>
              </ul>
            </div>
          </div>
          <div className="gbAccoContentArea">
            <div className="gbAccoContentT">
              <h1>베트남 특허청(NOIP)</h1>
            </div>
            <div className="gbAccoContentC">
              <ul>
                <li>National Office of Intellectual Property of VietNam)</li>
                <li>
                  국가의 지적 재산권 시스템의 개발과 관련된 프로그램과 프로젝트 수립, 법률에 따라 산업 재산권의 설립을
                  위한 절차 등을 수행하고 있음
                </li>
              </ul>
            </div>
          </div>
          <div className="gbAccoContentArea">
            <div className="gbAccoContentT">
              <h1>북베트남 투자촉진센터(IPCN)</h1>
            </div>
            <div className="gbAccoContentC">
              <ul>
                <li>Invest Promotion Center of North Vietnam</li>
                <li>
                  북베트남 29개 북부 지방에서 투자 활동을 지원하는 기능을 수행하는 외국인 투자 기관, 기획 투자를
                  지원하는 기관으로 FIA(Ministry of Planning and Investment (베트남 기획재정부) 산하
                  외국인투자청(Foreign Investment Agency))의 산하기관
                </li>
              </ul>
            </div>
          </div>
          <div className="gbAccoContentArea">
            <div className="gbAccoContentT">
              <h1>싱가포르 특허청 (IPOS)</h1>
            </div>
            <div className="gbAccoContentC">
              <ul>
                <li>
                  IPOS는 지적 재산권 (IP) 정권을 관리 및 조언과 싱가포르의 IP 에코 시스템의 개발을 촉진하기 위해 전문
                  지식을 구축하였음
                </li>
                <li>
                  IP가 오늘날의 글로벌 시장에서 중요한 자산이 되면서, IPOS는 지식 경제의 모든 제작자 권한을 부여하며
                  신뢰할 수 있는 파트너가 될 것을 목표로 하고 있음
                </li>
              </ul>
            </div>
          </div>
          <div className="gbAccoContentArea">
            <div className="gbAccoContentT">
              <h1>말레이시아 특허청(MYIPO)</h1>
            </div>
            <div className="gbAccoContentC">
              <ul>
                <li>
                  국내 및 글로벌 수준의 지적 재산권의 발전에 대응하기 위해, 본부는 말레이시아 법 2002 년 지적 재산권
                  공사의 시행과 함께, 말레이시아의 지적 재산권 공사 (PHIM)로 2003년 3월 3일에 법인화
                </li>
                <li>특허, 상표, 산업 디자인, 저작권 및 지리적 표시 등록, IP에 대한 자문 서비스 등을 지원하고 있음</li>
              </ul>
            </div>
          </div>
          <div className="gbAccoContentArea">
            <div className="gbAccoContentT">
              <h1>태국 과학기술위원회(NSTDA)</h1>
            </div>
            <div className="gbAccoContentC">
              <ul>
                <li>태국 과학기술부 산하기관으로 태국 사이언스 파크에 위치하였으며 1991년 설립됨</li>
                <li>
                  5개의 대상 영역(농업 및 식품 , 에너지 및 환경 , 보건 및 의료 , 생물 자원 및 지역 사회 와 제조 및
                  서비스 산업)에 초점을 맞추어 기능 재료, 센서 및 지능형 시스템, 디지털 공학, 서비스 연구로 구분하여
                  연구개발함
                </li>
              </ul>
            </div>
          </div>
          <div className="gbAccoContentArea">
            <div className="gbAccoContentT">
              <h1>인도 I2IT</h1>
            </div>
            <div className="gbAccoContentC">
              <ul>
                <li>인도의 정보 기술의 국제 연구소</li>
                <li>라지브 간디 인포테크 공원에 위치한 고등 교육 기관이며, 연구소가 푸네 대학교와 제휴되어있음</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: '3',
      title: 'EU&USA NETWORK',
      content: (
        <div className="gbAccoContentBox">
          <div className="gbAccoContentArea">
            <div className="gbAccoContentT">
              <h1>美 대학기술관리자협회(AUTM)</h1>
            </div>
            <div className="gbAccoContentC">
              <ul>
                <li>Association of University Technology Managers</li>
                <li>미국 350개 대학과 연구기관, 100여개 기업이 참여하는 기술 이전 전문 기관</li>
              </ul>
            </div>
          </div>
          <div className="gbAccoContentArea">
            <div className="gbAccoContentT">
              <h1>주한영국상공회의소(BCCK)</h1>
            </div>
            <div className="gbAccoContentC">
              <ul>
                <li>
                  한국 상공 영국 상공 회의소 (BCCK)는 모든 국적의 개인과 기업에 열려 한국의 주요 국제 및 지역 비즈니스
                  포럼
                </li>
                <li>지식 교환 촉진 및 공유로 비즈니스 및 소셜 네트워킹에 대한 충족과 회원을 위한 기회 제공</li>
              </ul>
            </div>
          </div>
          <div className="gbAccoContentArea">
            <div className="gbAccoContentT">
              <h1>EEN</h1>
            </div>
            <div className="gbAccoContentC">
              <ul>
                <li>ENTERPRISE EUROPE NETWORK</li>
                <li>
                  EU(유럽연합)를 중심으로 유럽, 미국 등 54개국 600여개 기관이 참여하고 있는 세계 최대 규모의
                  기술ㆍ비즈니스협력 네트워크임
                </li>
              </ul>
            </div>
          </div>
          <div className="gbAccoContentArea">
            <div className="gbAccoContentT">
              <h1>GLE TUVRheinland</h1>
            </div>
            <div className="gbAccoContentC">
              <ul>
                <li>1872년부터 TUVRheinland는 사람, 환경, 기술.의 안전과 품질을 유지하고 있음</li>
                <li>TUVRheinland는 모든 대륙에 69 개국에서 작용하는 선도적인 국제 서비스 제공 그룹임</li>
              </ul>
            </div>
          </div>
          <div className="gbAccoContentArea">
            <div className="gbAccoContentT">
              <h1>핀란드 상공회의소(FINNCHAM)</h1>
            </div>
            <div className="gbAccoContentC">
              <ul>
                <li>중소기업의 국제화 지원을 위한 우수한 채널 제공</li>
                <li>글로벌 FinnCham 네트워크는 아르헨티나, 미국, 한국, 중국, 아프리카에 도달</li>
              </ul>
            </div>
          </div>
          <div className="gbAccoContentArea">
            <div className="gbAccoContentT">
              <h1>이스라엘 ABG</h1>
            </div>
            <div className="gbAccoContentC">
              <ul>
                <li>
                  기술과 비즈니스 스카우트 서비스, 시장 전략, 사업 개발 및 판매 서비스를 제공하며 이를 위해 일본 ABG는
                  중국, 한국, 회사와 제휴하고 있음
                </li>
                <li>
                  ABG와 파트너들은 이스라엘의 기술을 찾고 아시아 시장에서의 성공에 대한 전문적인 서비스를 이스라엘
                  회사뿐만 아니라 아시아 기업에도 제공
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
  ];

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
      <div className={themeCss}>
        <div className="darkBackground">
          <div className="gbInner">
            <div className="themeBtnArea">
              <button
                className="themeBtn"
                onClick={() => {
                  handleTheme();
                }}
              >
                mode change
              </button>
            </div>
            <div className="gbTabTitleBox darkText">
              <p className="gbTabTitle">해외진출사례</p>
            </div>
            <p className="gbContentSubTitle darkText">해외진출지원 주요 실적</p>
            <div className="gbMapImgBox">해외 진출 사례 지도</div>
            <div className="gbAccordion">
              {data.map((item, i) => (
                <div className="gbProcessItem" key={i}>
                  <div className={selected === i ? 'gbProcessBtn on' : 'gbProcessBtn'} onClick={() => toggle(i)}>
                    <h2 className="gbProcessTitle">{item.title}</h2>
                    <div>{selected === i ? <div className="gbTopBtn"></div> : <div className="gbUnderBtn"></div>}</div>
                  </div>
                  <div className={selected === i ? 'gbProcessContent show' : 'gbProcessContent'}>{item.content}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(GbCase);
