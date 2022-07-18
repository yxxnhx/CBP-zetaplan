import React from 'react';
import styled from 'styled-components';
import splite from '../../../img/zetaplan_splite.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const SubBanner = ({ title, img }) => {
  useEffect(() => {
    AOS.init();
  })

  return (
    <SubBannerContainer img={`${img}`}>
      <SubBannerTextContainer>
        <div className='leftBracket'></div>
        <p data-aos="zoom-in" dangerouslySetInnerHTML={{ __html: title }}></p>
        <div className='rightBracket'></div>
      </SubBannerTextContainer>
    </SubBannerContainer>
  );
};

export default SubBanner;

const SubBannerContainer = styled.div`
  width: 100%;
  height: 480px;
  background: url(${props => props.img}) no-repeat;
  background-size: cover;
  position: relative;
`

const SubBannerTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 100rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .leftBracket {
    background: url(${splite}) no-repeat -5px -190px;
    background-size: 599px 280px;
    width: 20px;
    min-width: 20px;
    height: 72px;
    margin-right: 50px;
  }

  p {
    @import 'https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Noto+Sans+KR:wght@400;500;700;900&family=Roboto:wght@700&display=swap';
    font-size: 4.5rem;
    font-weight: bold;
    line-height: 1.5;
    color: #fff;
    font-family: 'Noto Sans KR', sans-serif;
    text-align: center;
  }

  .rightBracket {
    background: url(${splite}) no-repeat -79px -190px;
	  background-size: 599px 280px;
    width: 20px;
    min-width: 20px;
	  height: 72px;
    margin-left: 50px;
  }
`