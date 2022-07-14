import React from 'react';
import styled from 'styled-components';
import LogoImg from './../../../img/zetaplan_splite.png'
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  /* const navigate = useNavigate();
  const goToSns = () => {
    navigate('http://k-mit.com');
  }; */
  return (
    <div className="footerBox footerinner">
      <div>
        <p className='footerLogo' alt="logo" />
        <ul className='infoBox infoboxStyle'>
          <li>
            서비스신청
          </li>
          <li>
            개인정보처리방침
          </li>
          <li>
            사이트맵
          </li>
          <li>
            Contact us
          </li>
        </ul>
        
        <div className='Address addressStyle'>
          <p>정보관리책임자 박민경 | 사업자등록번호 120-87-36351</p>
          <p>중소기업상담회사 제2010-397호 | 기술거래기관 제2016-48호 | 사업화전문회사 제2017-96호 | 엑셀러레이터 제2018-60호</p>
          <p>서울본사 (08589) 서울 금천구 디지털로 130, 1210 | Tel 02-538-4801 | Fax 02-6008-4779 | E-mail zetabiz@zetaplan.com</p>
          <p>호남본부 (61947) 광주광역시 서구 상무중앙로 114, 1307호 | Tel 062-233-4142</p>
        </div>
        <div className='Address addressStyle'>
          <p>China Office 6F, Beiguang Building, No.23, Huangsi Street, Xicheng District, Beijing, China</p>
          <p>Vietnam Office No 241, Tang Thiet Giap Apt, 110 Hoang Quoc Viet Street, Cau Giay District, Hanoi, VietNam</p>
          <p>Ini Office 2 Jl Jenderal Gatot Subroto Kav.58, Kuningan Timur setiabudi Jakarta Selatan, Indonesia</p>
        </div>
        <div>
          <p>Zeta Plan Investment Co., Ltd. Copyright 2006~2020</p>
        </div>
      </div>
      <ul className='footerSnsBox' >
        {/* <FooterSns style={{background: 'url(/static/media/zetaplan_splite.34aa9da89296aded1967.png)'}}/> */}
        {/* <FooterSns style={{background: `url(${LogoImg})`}}/> */}
        <li className='footerSns' position="-0.6rem"  alt="facebook"/*  onClick={goToSns} *//>
        <li className='footerSns' position="-5.3rem"  alt="youtube" />
        <li className='footerSns' position="-10rem"  alt="blog" />
      </ul>
    </div>
  );
};


const footerBox = styled.div`
  background: #1C1C1C;
  color:#fff;
  font-size:1.8rem;
`

const FooterLogo=styled.p`
  background: url(${LogoImg}) no-repeat -0.7rem -0.5rem;
	background-size: 59.9rem 28rem;
	width: 20.9rem;
	height: 4.7rem;
  cursor: pointer;
`

const infoBox=styled.ul`
  display:flex;
  font-size:2.3rem;
  li{
      &:hover {
        cursor: pointer;
        color:#1527A0;
      }
      &::after {
        content:'';
        display:inline-block;
        width:0.2rem;
        height:1rem;
        background-color:#707070;
        margin:0 2.4rem;
      }
      &:last-child::after{
        display:none;
      }
    }
`
const Address=styled.div`
  p{
    font-size:1.4rem;
    line-height:2.5rem;
  }
`

const FooterSnsBox=styled.ul`
  display: flex;
  justify-content: space-between;
`

const FooterSns=styled.li`
  background: url(${LogoImg}) no-repeat no-repeat  ${ props => props.position } -10rem;
	background-size: 59.9rem 28rem;
	width: 4.1rem;
	height: 4.1rem;
  margin-left:0.7rem;
  cursor: pointer;
  &:hover {
    opacity:0.8;
  }
`

const infoboxStyle = {
  margin: '5rem 0'
}

const addressStyle = {
  margin: '3rem 0'
}

const footerinner = {
  padding: '5rem 7.8rem',
  display:'flex',
  justifyContent:'space-between'
}


export default Footer;