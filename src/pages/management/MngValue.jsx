import React from 'react';
import '../../styles/mng/mngValue.scss';
import SubBanner from '../../components/common/SubBanner/index';
import subBg from '../../img/me/me_sub_bg@2x.png';
import GradientImg from '../../img/me/me_gradient_box@2x.png'; 
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';



const MngValue = ({setHdSubStyle}) => {
  const {category} = useParams();
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex]= useState(0); 
  const oneDepth='경영 · 평가';
  const oneDepthLink='/mng';
  const twoDepth='가치평가';
  const twoDepthLink='/mng-value/mngvaluecompany'; //주소 맨앞에 '/' 안붙이면 주소가 추가됨(아마 문자로 인식하는 듯)
  const threeDepth= setBreadThreeDepth();
  const threeDepthLink=`/mng-value/${category}`;
  const linkActive='threeDepth';

  /* header 배경색 변경 */
  useEffect(() => {
    setHdSubStyle('hdMain hdSub')
  }, [setHdSubStyle])
  
  const [data, setData] = useState([]);

  useEffect(()=> {
    setData(getSelectedData()); 
  }, [selectedIndex]);
  

  useEffect(() => {
    setData(getCategoryData());
  }, [category])

  const title = '효율적인 자산관리와 적절한<br />투자관련 의사결정을 지원합니다.'
  const [activeIndex, setActiveIndex] = useState(0);
  const tabClickHandler=(index)=>{
    setActiveIndex(index)
  }

  const getCategoryData = () => {
    switch (category) {
    case 'mngvaluecompany':
    default:
      return mngValueContents[0];
    case 'mngvalueskill':
      return mngValueContents[1];
    }
  }

  const getActiveClassName = (cate) => {
    if (cate === category) {
      return 'isActive';
    }
    return '';
  }

  const getSelectedData = () => {
    switch (selectedIndex) {
    case 0:
    default:
      return mngValueContents[0];
    case 1:
      return mngValueContents[1];
    }
  }

  function setBreadThreeDepth() {
    if (category === undefined) {
      return '기업가치평가';
    } else if (category === 'mngvaluecompany') {
      return '기업가치평가';
    } else if (category === 'mngvalueskill') {
      return '기술가치평가';
    }
  }


  const mngValueContents = [
    {
      tabSubTitle: (<SubBanner title={title} img={subBg} oneDepth={oneDepth} oneDepthLink={oneDepthLink} twoDepth={twoDepth} twoDepthLink={twoDepthLink} threeDepth={threeDepth} threeDepthLink={threeDepthLink} linkActive={linkActive}  />),
      tabContent: (
        <div className='mngValueBusiness'>
          <h2 className='mngSmTitle mngValueTitle'>기업가치평가</h2>
          <h4 className='mngValueTxt'>필요성</h4>
          <div className='mngNeedTxt'>
            <p>금융기관의 효율적인 자산관리가 필요하고 적시・적절한 투자관련 의사 결정 필요성이 증가하여
              <span>기업가치평가가 필요하며, 진행하게 되면 기업가치 중 무형자산의 기여도가 증가한다.</span>
            </p>
          </div>
          <h4 className='mngValueTxt'>기업가치 평가요인</h4>
          <div className='thinGradient'>
            <img src={GradientImg} alt="그라데이션"/>
            <span className='mngValueGradientLeft'>기업내적요인</span>
            <span className='mngValueGradientRight'>기업외적요인</span>
          </div>
          <ul className='mngCompanyValueAssess'>
            <li>질적요인</li>
            <li>양적요인</li>
            <li>시장내적요인</li>
            <li>시장외적요인</li>
          </ul>
          <div className='mngValueAssess'>
            <p>기업내적요인에는 질적 요인과 양적 요인이 있는데 질적 요인에는 경영자의 자질, 주주현황, 연구개발투자, 기술인력구성,     노사관계, Life Cycle 등이 있고 양적요인에는 수익성, 재무구조, 배당성향, 재무제표에 관한 사항이 있습니다.</p>
            <p>기업외적요인에는 시장내적요인과 시장외적요인이 있는데 시장내적요인에는 시장규제, 부양조치, 투자자의 심리 및 동향 등이    있고 시장외적요인에는 경기순환, 물가동향, 금리수준, 통화신용, 재정정책, 환율 등이 있습니다.</p>
          </div>
          <div>
            <h4 className='mngValueTxt mngValueCompany'>기업가치평가방법</h4>
          </div>
          <ul className='mngFourCircle mngValueCompanyAssess'>
            <li>자산가치법 <span>(Asset-Based</span><span>Approach)</span></li>
            <li>수익가치법<span>(Income</span><span>Approach)</span></li>
            <li>시장가치법<span>(Market Comparable</span><span>Transactions Approach)</span></li>
            <li>현금흐름할인모형</li>
          </ul>
          <div className='mngCompanyAssess'>
            <p>자산가치법에는 장부가치에 의한 평가, 시간에 의한 평가, 청산가치가 있고 수익가치법에는 당기순이익 환원법, 배당    환원법이 있으며 시장가치법에는 PER(Price-Earning Ratio, EV/EBITDA, PBR(Priceon Book-value Ratio), PSR(Price Selling   Ratio)이 있고 현금흐름할인모형에는 잉여현금흐름, (FCF : Free Cash Flow), 미래현금흐름 할인모형, (DCF : Discount Cash     Flow)이 있습니다.</p>
          </div>
        </div>)
    },
    {
      tabSubTitle: (<SubBanner title={title} img={subBg} oneDepth={oneDepth} oneDepthLink={oneDepthLink} twoDepth={twoDepth} twoDepthLink={twoDepthLink} threeDepth={threeDepth} threeDepthLink={threeDepthLink} linkActive={linkActive} />),
      tabContent: (
        <div className='mngSkillValue'>
          <h2 className='mngSmTitle mngValueTitle'>기술가치평가</h2>
          <h4 className='mngValueTxt'>필요성</h4>
          <div className='mngNeedTxt'>
            <p>
              R&D 흐름 및 관리범위를 확인하고,  기술가치를 근거로 경제적 접근이 필요하다.
            </p>
          </div>
          <h2 className='mngValueTxt'>기업가치평가 방법</h2>
          <div className='mngValueTxtBox'>
            <div className='mngValueList'>
              <h4>Step 1</h4>
              <h4>Step 2</h4>
              <h4>Step 3</h4>
              <h4>Step 4</h4>
            </div>
            <div className='mngCompanyValue'>
              <div className='mngCompanyValueTitle'>비용접근법</div>
              <p>- 기업이 유사기술을 내부에서 개발하거나 외부로부터 도입하는데 드는 모든 비용을 계 산함으로써 기술가치를 평가하는     방법</p>
              <p>- 적정시장가치 = 개발투하 총 비용 – 가치하락요소</p>
              <div>시장접근법</div>
              <p>- 평가대상기술과 유사 또는 동일한 기술의 시장거래가격을 기준으로 신청기술의 우열 등을 고려하여 산출</p>
              <p>- 시장가치 = 매매사례가격 × 변동요인</p>
              <p>- 평가대상 : 일반기계 및 설비류, 차량, 범용컴퓨터 S/W, H/W, 주류허가권, 프랜차이즈 등 </p>
              <div>수익접근법</div>
              <p>- 평가대상으로부터 발생되는 미래현금흐름의 현재가치의 합계에 기술기여도를 곱하여 기술가치를 산정</p>
              <p>기술가치 = 현재가치의 합 × 기술기여도</p>
              <div>기술기여도</div>
              <p>평가대상기술을 사용함에 따라 발생한 추가적인 현금흐름의 현재가치 중 기술자체가 기여한 범위를 의미</p>
              <p>기술요소 = 산업요소지수(industrial factor) × 개별기술지수(Technology rating)</p>
              <p>산업요소지수 : 기술자산이 어떤 산업 내에서 상업적 기업가치에 공헌할 수 있는 최대 비율</p>
              <p>개별기술지수 : 특정기술이 사업에 활용되어 상업적 우월성에 대한 공헌과 관련하여 기술의 상대적인 강도를 측정하여     비율로 나타낸 것.</p>
              <span>- 특허권 등 대부분의 지적재산권을 평가하는데 유용하게 사용</span>
            </div>
          </div>
          <h2 className='mngValueTxt mngValueStep'>기업가치평가 절차</h2>
          <div className='mngValueCompanyProcess'>
            <div className="mngCircleWrap">
              <div className="mngCircleBg"></div>
              <div className="mngCircle">
                <div className="mngCircleItem mngCircleItemLocation">
                  <span className="mngCircleText">기술적 위치 분석</span>
                </div>
                <div className="mngCircleItem mngCircleItemIndustry">
                  <span className="mngCircleText">산업분석</span>
                </div>
                <div className="mngCircleItem mngCircleItemTogether">
                  <span className="mngCircleText">기술가치 종합분석</span>
                </div>
              </div>
            </div>
            <div className='mngValueProcess'>
              <div>기술적 위치 분석<span>(Technical Position Analysis)</span></div>
              <p>- Patent map 작성,  기술개발 흐름, 타 기술과 관계, 기술경쟁력</p>
              <div>산업 분석<span>(industry analysis)</span></div>
              <p>- Value Chains 파악, Cost Drivers 분석, 경쟁환경, 하부구조 파악</p>
              <div>기술가치 종합 분석<span>(Comprehensive analysis of technology value)</span></div>
              <p>- 시장분석, 투자비용 산출, 잠재적 경제수익, 기술가치 종합분석</p>
            </div>
          </div>
        </div>)
    }
  ] ;


  return (
    <div>
      <div>
        {/* {mngValueContents[activeIndex].tabSubTitle} */}
        {data.tabSubTitle}
        <div className='mngInner'>
          <h2 className='mngSubTitle'>가치평가</h2>
          <div className='mngMenuTabEdge'>
            <ul className='mngMenuTab'>
              <li className={getActiveClassName('mngvaluecompany')} onClick={()=>{
                tabClickHandler(0) 
                navigate('/mng-value/mngvaluecompany') 
                setSelectedIndex(0)}} >기업가치평가</li>
              <li className={getActiveClassName('mngvalueskill')} onClick={()=>{
                tabClickHandler(1) 
                navigate('/mng-value/mngvalueskill')
                setSelectedIndex(1)}}>기술가치평가
              </li>
            </ul> 
          </div>
          <div>
            {data.tabContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MngValue;