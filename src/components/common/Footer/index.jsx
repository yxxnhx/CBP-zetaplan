import React from 'react';
import './../../../styles/footer/footer.scss';
import { useState,useEffect } from 'react';

const Footer = () => {
  const goToSnsFb = () => {
    window.open('https://www.facebook.com/Zetaplan-FInvestment-1900302276910629/');
  }
  const goToSnsYou = () => {
    window.open('https://www.youtube.com/channel/UC2BZ-Cd829KVoAYdeiSKUzQ');
  }
  const goToSnsBl = () => {
    window.open('http://zetaplan.com/page/208/?p=wordpress_themes');
  }
  const goToZeta = () => {
    window.open('/zeta');
  }
  const goToMap = () => {
    window.open('/zeta-map');
  }
  const goToMail = () => {
    window.open('mailto:zetabiz@zetaplan.com');
  }
  const goToTelSeoul = () => {
    window.open('tel:02-538-4801');
  }
  const goToTelPlus = () => {
    window.open('tel:02)561-6698');
  }
  const goToTelsPlus = () => {
    window.open('tel:070)8129-5884');
  }
  const goToTelGj = () => {
    window.open('tel:062-233-4142');
  }
  const goToMain = () => {
    window.open('/main');
  }


  const [ftModal, setFtModal] = useState(false);
  const [ftsModal, setFtsModal] = useState(false);

  function FtModal(){
    useEffect(() => {
      const scroll = window.scrollY;
      document.body.style.cssText = `
        position: fixed;
        top: -${scroll}px;
        overflow: hidden;
        width: 100%;
        height: auto;
      `;
      return () => {
        document.body.style.cssText = '';
        window.scrollTo(0, scroll);
      }
    },[]);
    return(
      <div className='ftModalContain'>
        <div className='ftDim' onClick={()=>{setFtModal(!ftModal)}}></div>
        <div className='ftModal'>
          <p className='ftModalClose' onClick={()=>{setFtModal(!ftModal)}}></p>
          <div className='ftModalTextBox'>
            <h4 className='ftModalTitle'>ZETA PLAN의 개인정보처리방침</h4>
            <p className='ftModalTxt'>제타플랜의 개인정보처리방침에 대해 안내드립니다.</p>
            <p className='ftModalTxt'>이용자 개인정보 보호를 여러 경영요소 가운데 최우선의 가치로 두고 있습니다.<br/>(주)제타플랜은 서비스 기획부터 종료까지 개인정보보호법 등 국내의 개인정보 보호 법령을 철저히 준수합니다. 또한 OECD의 개인정보 보호 가이드라인 등 국제 기준을 준수하여 서비스를 제공합니다.<br/>본 개인정보처리방침의 목차는 아래와 같습니다.
            관계법령이 요구하는 개인정보처리방침의 필수 사항과 자체적으로 이용자 개인정보 보호에 있어 중요하게 판단하는 내용을 포함하였습니다.</p>
            <ul className='ftModalTxt'>
              <li className='ftModalTxts'>1.개인정보처리방침의 의의</li>
              <li className='ftModalTxts'>2.수집하는 개인정보 </li>
              <li className='ftModalTxts'>3.수집한 개인정보의 이용</li>
              <li className='ftModalTxts'>4.개인정보의 제공 및 위탁</li>
              <li className='ftModalTxts'>5.개인정보의 파기</li>
              <li className='ftModalTxts'>6.이용자 및 법정대리인의 권리와 행사 방법</li>
            </ul>
            <p className='ftModalTxt ftModalTxtLast'>
              제타플랜은 이용자의 개인정보를 안전하게 관리하기 위하여 최선을 다하며, 개인정보보호법에서 요구하는 수준 이상으로 개인정보를 보호하고 있습니다.
            </p>
          </div>
        </div>
      </div>
    )
  }

  function FtcusModal(){
    useEffect(() => {
      const scroll = window.scrollY;
      document.body.style.cssText = `
        position: fixed;
        top: -${scroll}px;
        overflow: hidden;
        width: 100%;
        height: auto;
      `;
      return () => {
        document.body.style.cssText = '';
        window.scrollTo(0, scroll);
      }
    },[]);
    return(
      <div className='ftModalContain'>
        <div className='ftDim' onClick={()=>{setFtsModal(!ftsModal)}}></div>
        <div className='ftModal ftsModal'>
          <p className='ftModalClose' onClick={()=>{setFtsModal(!ftsModal)}}></p>
          <div className='ftModalTextBox ftsModalTextBox'>
            <h4 className='ftModalTitle'>ZETA PLAN의 고객센터</h4>
            <p className='ftsModalTxt'>궁금한 점이 있으시면 편하게 문의해주세요.</p>
            <ul className='ftsModalTxt'>
              <li className='ftsModalTxt'>
                전화번호 : 
                <span className='ftModalHv' onClick={goToTelSeoul}> 02) 538-4801</span>
              </li>
              <li className='ftModalTxts ftsModalTxt'>부가 문의 전화번호 : <span className='ftModalHv' onClick={goToTelPlus}> 02)561-6698</span>, <span className='ftModalHv' onClick={goToTelsPlus}>070)8129-5884</span></li>
              <li className='ftsModalTxt ftModalHv' onClick={goToMail}>zetabiz@zetaplan.com</li>
            </ul>
            <p className='ftsModalTxt ftsModalTxtLast'>
              제타플랜은 고객님을 위해 항상 준비되어 있습니다.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="ftBox">
      <div className='ftInner'>
        <div className='ftContent'>
          <p className='ftLogo' alt="logo" onClick={goToMain}></p>
          <ul className='ftInfoBox'>
            <li className='ftInfoList' onClick={goToZeta}>
              회사소개
            </li>
            <li className='ftInfoList' onClick={()=>{setFtModal(!ftModal)}}>
              개인정보처리방침
            </li>
            <li className='ftInfoList' onClick={()=>{setFtsModal(!ftsModal)}}>
              고객센터
            </li>
            <li className='ftInfoList' onClick={goToMap}>
              Contact us
            </li>
            {
              ftModal === true ? <FtModal/> : null
            }
            {
              ftsModal === true ? <FtcusModal/> : null
            }
          </ul>
          
          <div className='ftAddr ftAddrStyle'>
            <p className='ftAddrText'>정보관리책임자 박민경 | 사업자등록번호 120-87-36351</p>
            <p className='ftAddrText'>중소기업상담회사 제2010-397호 | 기술거래기관 제2016-48호 | 사업화전문회사 제2017-96호 | 엑셀러레이터 제2018-60호</p>
            <p className='ftAddrText'>서울본사 (08589) 서울 금천구 디지털로 130, 1210 | <span className='ftGoto' onClick={goToTelSeoul}>Tel 02-538-4801</span> | Fax 02-6008-4779 | <span className='ftGoto' onClick={goToMail}>E-mail zetabiz@zetaplan.com</span></p>
            <p className='ftAddrText'>호남본부 (61947) 광주광역시 서구 상무중앙로 114, 1307호 | <span className='ftGoto' onClick={goToTelGj}>Tel 062-233-4142</span></p>
          </div>
          <div className='ftAddr ftAddrStyle ftGlobalTxt'>
            <p className='ftAddrText'>China Office 6F, Beiguang Building, No.23, Huangsi Street, Xicheng District, Beijing, China</p>
            <p className='ftAddrText'>Vietnam Office No 241, Tang Thiet Giap Apt, 110 Hoang Quoc Viet Street, Cau Giay District, Hanoi, VietNam</p>
            <p className='ftAddrText'>Ini Office 2 Jl Jenderal Gatot Subroto Kav.58, Kuningan Timur setiabudi Jakarta Selatan, Indonesia</p>
          </div>
          <div className='ftAddr'>
            <p className='ftAddrText'>Zeta Plan Investment Co., Ltd. Copyright 2006~2020</p>
          </div>
        </div>
        <ul className='ftSnsBox' >
          <li className='ftSns ftSnsFb' alt="facebook" onClick={goToSnsFb}>
          </li>
          <li className='ftSns ftSnsYou' alt="youtube" onClick={goToSnsYou}>
          </li>
          <li className='ftSns ftSnsBl' alt="blog" onClick={goToSnsBl}>
          </li>
        </ul>
      </div>  
    </div>
  );
};

export default Footer;