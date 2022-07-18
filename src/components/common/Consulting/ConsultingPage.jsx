import React from 'react';
import './../../../styles/consul/index.scss'
import { useState } from 'react';
import SubBanner from './../SubBanner'
import subBg from './../../../img/bg/consulPage_bg@2x.png'



const ConsultingPage = ({open, close}) => {
  const title = '기업맞춤형 컨설팅으로 <br /> 진심을 다해 상담하겠습니다'

  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    fullName:'',
    company:'',
    email:'',
    position:'',
    tell:'',
    companyName:'',
    companyYear:'',
    category:'',
    business:'',
    capital:'',
    property:'',
    debt:'',
    prevSales:'',
    thisSales:'',
    predSales:'',
    webSite:'',
    address:'',
    ma:'',
    ipo:'',
    certificate:'',
    policyFund:'',
    foundation:'',
    system:'',
    consulting:'' 
  })

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    }) 
  }

  const isValidEmail = values.email.includes('@') && values.email.includes('.');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(values));
    if (!isValidEmail || values['fullName' || 'company' || 'position' || 'tell' || 'companyName' || 'address'].length <= 0)  {
      alert('필수 입력을 확인하세요.')
    } else {
      alert('상담 신청이 완료되었습니다')
    }
  };

  const validation = (values) => {
    let errors = {};
  
    if (!values.fullName) {
      errors.fullName = '이름을 입력해주세요';
    }
    if (!values.company) {
      errors.company = '회사명을 입력해주세요';
    }
    if (!values.email) {
      errors.email = '이메일 주소를 입력해주세요';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = '이메일 형식을 확인해주세요';
    }
    if (!values.position) {
      errors.position = '직책을 입력해주세요';
    }
    if (!values.tell) {
      errors.tell = '연락처 입력해주세요';
    }
    if (!values.companyName) {
      errors.companyName = '회사명을 입력해주세요';
    }
    if (!values.address) {
      errors.address = '주소을 입력해주세요';
    }
    return errors;
  };

  return (
    <div className='consulPage'>
      <SubBanner title={title} img={subBg} />
      <div className="consulInner">

        <form className='consultingAppForm'>
          <div className="consulPageInner">
            <h2 className='consulFormTitle'>Contact Us</h2>
            <div className="consulPageFormArea">
              <fieldset className='pageFieldset'>
                <legend className='legend'>신청인 정보</legend>
                <div className="consulCategory">
                  <div className='consulItem'>
                    <label htmlFor="fullName" className='formKey'> 이름 </label> 
                    <input 
                      className="nameInput" 
                      name="fullName" 
                      id="fullName"
                      type="text" 
                      onChange={handleChange} 
                      value={values.fullName}
                      required />
                  </div>
                  <div className='errorBox'>
                    {errors.fullName || <p className='error'>{errors.fullName}</p>}
                  </div>
                </div>
                <div className="consulCategory">
                  <div className='consulItem'>
                    <label htmlFor="company" className='formKey'>회사</label>
                    <input 
                      className="companyInput" 
                      name="company" 
                      id="company" 
                      type="text" 
                      onChange={handleChange} 
                      value={values.company}
                      required/>
                  </div>
                  <div className="errorBox">
                    {errors.company || <p className='error'>{errors.company}</p>}
                  </div>
                </div>
                <div className="consulCategory">
                  <div className="consulItem">
                    <label htmlFor="email" className='formKey'>이메일</label>
                    <input 
                      className="emailInput" 
                      name="email" 
                      id="email" 
                      type="text" 
                      onChange={handleChange}
                      value={values.email}
                      required />
                  </div>
                  <div className='errorBox'>
                    {errors.email || <p className='error'>{errors.email}</p>}
                  </div>
                </div>
                <div className="consulCategory">
                  <div className="consulItem">
                    <label htmlFor="position" className='formKey'>직책</label>
                    <input 
                      className="positionInput" 
                      name="position" 
                      type="text" 
                      onChange={handleChange}
                      value={values.position}
                      required />
                  </div>
                  <div className='errorBox'>
                    {errors.position || <p className='error'>{errors.position}</p>}
                  </div>
                </div>
                <div className="consulCategory">
                  <div className="consulItem">
                    <label htmlFor="tell" className='formKey'>연락처</label>
                    <input 
                      className="tellInput" 
                      name="tell" 
                      type="text" 
                      onChange={handleChange}
                      value={values.tell}
                      required />
                  </div>
                  <div className='errorBox'>
                    {errors.tell || <p className='error'>{errors.tell}</p>}
                  </div>
                </div>
              </fieldset>
              <fieldset className='fieldset'>
                <legend className='legend'>회사 정보</legend>
                <div className="consulCategory">
                  <div className="consulItem">
                    <label htmlFor="companyName" className='formKey'>회사명</label>
                    <input 
                      className="companyNameInput" 
                      name="companyName" 
                      id="companyName" 
                      type="text" 
                      onChange={handleChange}
                      value={values.companyName}
                      required />
                  </div>
                  <div className='errorBox'>
                    {errors.companyName || <p id='error'>{errors.companyName}</p>}
                  </div>
                </div>
                <div className="consulCategory">
                  <div className="consulItem">
                    <label htmlFor="companyYear">설립년도</label>
                    <input 
                      className="companyYearInput" 
                      name="companyYear" 
                      id="companyYear" 
                      type="text" 
                      onChange={handleChange}
                      value={values.companyYear} />
                  </div>
                </div>
                <div className="consulCategory">
                  <div className="consulItem">
                    <label htmlFor="category">분류</label>
                    <input 
                      className="categoryInput" 
                      name="category" 
                      id="category" 
                      type="text" 
                      onChange={handleChange}
                      value={values.category} />
                  </div>
                </div>
                <div className="consulCategory">
                  <div className="consulItem">
                    <label htmlFor="business">사업분야</label>
                    <input 
                      className="businessInput" 
                      name="business" 
                      id="business" 
                      type="text" 
                      onChange={handleChange}
                      value={values.business} />
                  </div>
                </div>
                <div className="consulCategory">
                  <div className="consulItem">
                    <label htmlFor="capital">자본금</label>
                    <input 
                      className="capitalInput" 
                      name="capital" 
                      id="capital" 
                      type="text" 
                      onChange={handleChange}
                      value={values.debt}  />
                  </div>
                </div>
                <div className="consulCategory">
                  <div className="consulItem">
                    <label htmlFor="property">자산</label>
                    <input 
                      className="propertyInput" 
                      name="property" 
                      id="property" 
                      type="text" 
                      onChange={handleChange}
                      value={values.property} />
                  </div>
                </div>
                <div className="consulCategory">
                  <div className="consulItem">
                    <label htmlFor="debt">부채</label>
                    <input 
                      className="debtInput" 
                      name="debt" 
                      id="debt" 
                      type="text" 
                      onChange={handleChange}
                      value={values.debt} />
                  </div>
                </div>
                <div className="consulCategory">
                  <div className="consulItem">
                    <label htmlFor="prevSales">전기매출</label>
                    <input 
                      className="prevSalesInput" 
                      name="prevSales" 
                      id="prevSales" 
                      type="text" 
                      onChange={handleChange}
                      value={values.predSales} />
                  </div>
                </div>
                <div className="consulCategory">
                  <div className="consulItem">
                    <label htmlFor="thisSales">당기매출</label>
                    <input 
                      className="thisSalesInput" 
                      name="thisSales" 
                      id="thisSales" 
                      type="text" 
                      onChange={handleChange}
                      value={values.thisSales} />
                  </div>
                </div>
                <div className="consulCategory">
                  <div className="consulItem">
                    <label htmlFor="predSales">예상매출</label>
                    <input 
                      className="predSalesInput" 
                      name="predSales" 
                      id="predSales" 
                      type="text" 
                      onChange={handleChange}
                      value={values.predSales} />
                  </div>
                </div>
                <div className="consulLongCategory ">
                  <div className="consulLongItem">
                    <label htmlFor="webSite" className='website long'>웹사이트</label>
                    <input 
                      className="webSiteInput" 
                      name="webSite" 
                      id="webSite" 
                      type="text" 
                      onChange={handleChange}
                      value={values.webSite} />
                  </div>
                </div>
                <div className="consulLongCategory">
                  <div className="consulLongItem">
                    <label htmlFor="address" className='address long formKey'>주소</label>
                    <input 
                      className="addressInput" 
                      name="address" 
                      id="address" 
                      type="text" 
                      onChange={handleChange}
                      value={values.address}
                      required />
                  </div>
                  <div className='errorBox'>
                    {errors.address  || <p className='error'>{errors.address}</p>}
                  </div>
                </div>
              </fieldset>
              <fieldset className='selectFieldset'>
                <legend className='legend'>컨설팅 신청 양식</legend>
                <div className="selectCategory">
                  <div className="selectItem">
                    <label htmlFor="ma" className='selectLabel'>M&A 구조 조정</label>
                    <select name="ma" id="ma" className='select' value={values.ma} onChange={handleChange}>
                      <option value="corporSelling">기업매도</option>
                      <option value="corporMat">기업매수</option>
                      <option value="companyClass">기업분할</option>
                      <option value="corporMerger">기업합병</option>
                      <option value="restruc">구조조정</option>
                      <option value="corporRehab">기업회생</option>
                      <option value="etc">기타</option>
                    </select>
                  </div>
                </div>
                <div className="selectCategory">
                  <div className="selectItem">
                    <label htmlFor="ipo" className='selectLabel'>기업공개(IPO)</label>
                    <select name="ipo" id="ipo" className='select' value={values.ipo} onChange={handleChange}>
                      <option value="kosdaq">코스닥</option>
                      <option value="konex">코넥스상장</option>
                      <option value="oil">유가증권</option>
                      <option value="stock">주식공모</option>
                      <option value="back">우회상장</option>
                      <option value="overseas">해외상장</option>
                      <option value="ir">IR</option>
                      <option value="ect">기타</option>
                    </select>
                  </div>
                </div>
                <div className="selectCategory">
                  <div className="selectItem">
                    <label htmlFor="certificate" className='selectLabel'>기업인증</label>
                    <select name="certificate" id="certificate" className='select' value={values.certificate} onChange={handleChange}>
                      <option value="venture">벤처기업</option>
                      <option value="inobiz">이노비즈</option>
                      <option value="mainbiz">메인비즈</option>
                      <option value="lab">연구소</option>
                      <option value="smaillBis">유망중소기업</option>
                      <option value="reserVenture">예비벤처</option>
                      <option value="etc">기타</option>
                    </select>
                  </div>
                </div>
                <div className="selectCategory">
                  <div className="selectItem">
                    <label htmlFor="policyFund" className='selectLabel'>정책자금</label>
                    <select name="policyFund" id="policyFund" className='select' value={values.policyFund} onChange={handleChange}>
                      <option value="workingFund">운전자금</option>
                      <option value="facilitiesFund">시설자금</option>
                      <option value="technology">기술금융</option>
                      <option value="foundation">창업자금</option>
                      <option value="donate">출연자금</option>
                      <option value="b2b">B2B구매</option>
                      <option value="pcbo">P-CBO</option>
                      <option value="transition">사업전환</option>
                      <option value="collaboration">협업화</option>
                      <option value="develop">성장공유</option>
                      <option value="cooperation">협업사업</option>
                      <option value="export">수출금융</option>
                      <option value="etc">기타</option>
                    </select>
                  </div>
                </div>
                <div className="selectCategory">
                  <div className="selectItem">
                    <label htmlFor="foundation" className='selectLabel'>경영자문</label>
                    <select name="foundation" id="foundation" className='select' value={values.foundation} onChange={handleChange}>
                      <option value="invest">투자금융</option>
                      <option value="pf">PF금융</option>
                      <option value="mng">기업진단</option>
                      <option value="strategy">전략컨설팅</option>
                      <option value="foundation">재무자문</option>
                      <option value="contract">계약자문</option>
                      <option value="law">법률자문</option>
                      <option value="skill">기술/기업자문</option>
                      <option value="scholarship">학술용역</option>
                      <option value="tax">세무회계</option>
                      <option value="personal">인사/노무</option>
                      <option value="consultation">쿠폰제컨설팅</option>
                      <option value="etc">기타</option>        
                    </select>
                  </div>
                </div>
                <div className="selectCategory">
                  <div className="selectItem">
                    <label htmlFor="system" className='selectLabel'>품질 / 시스템</label>
                    <select name="system" id="system"  className='select' value={values.system} onChange={handleChange}>
                      <option value="iso">ISO</option>
                      <option value="net">NET</option>
                      <option value="nep">NEP</option>
                      <option value="gs">GS</option>
                      <option value="gd">GD</option>
                      <option value="ks">KS</option>
                      <option value="ce">CE</option>
                      <option value="ul">UL</option>
                      <option value="ccc">CCC</option>
                      <option value="jjs">JJS</option>
                      <option value="fba">FDA</option>
                      <option value="rohs">RoHS</option>
                      <option value="haacp">HACCP</option>
                      <option value="ohsas">OHSAS</option>
                      <option value="ts">TS16949</option>
                      <option value="tl">TL9000</option>
                      <option value="q">Q마크</option>
                      <option value="s">S마크</option>
                      <option value="kps">KPS</option>
                      <option value="goods">우수제품</option>
                      <option value="ser">서비스품질우수기업</option>
                      <option value="dqms">국방품질경영시스템</option>
                      <option value="ir52">IR52</option>
                      <option value="efficiency">고효율기자재</option>
                      <option value="patent">특허</option>
                      <option value="utilityModel">실용신안</option>
                      <option value="design">디자인</option>
                      <option value="performance">성능인증</option>
                      <option value="eco">친환경마크</option>
                      <option value="etc">기타</option>
                    </select>
                  </div>
                </div>
              </fieldset>
              <fieldset className='consulFieldset'>
                <legend className='legend consulLegend'>상담 신청 내용</legend> 
                <div className="consultingCategory">
                  <div className="consultingItem">
                    <label htmlFor="consulting"  className='consulLabel'></label>
                    <input 
                      className="consultingInput" 
                      name="consulting" 
                      id="consulting" 
                      type="text" 
                      onChange={handleChange }
                      value={values.consulting} />                        
                  </div>
                </div>
              </fieldset>
              <button className="consultingBtn" type="button" onClick={handleFormSubmit}>상담 신청하기</button>
            </div>
          </div>

        </form>
      </div>
    </div>

  );
};

export default ConsultingPage;