import React from 'react';
import styled from 'styled-components';
import splite from '../../../img/zetaplan_splite.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import BreadCrumb from './BreadCrumb';

const SubBanner = ({ title,img,oneDepth,twoDepth,threeDepth,oneDepthLink,twoDepthLink,threeDepthLink,linkActive }) => {
  useEffect(() => {
    AOS.init();
  })

  return (
    <SubBannerContainer img={`${img}`}>
      <BreadCrumb oneDepth={oneDepth} twoDepth={twoDepth} threeDepth={threeDepth} oneDepthLink={oneDepthLink} twoDepthLink={twoDepthLink} threeDepthLink={threeDepthLink} linkActive={linkActive}/>
      <SubBannerTextContainer>
        <div className='leftBracket'></div>
        <p data-aos="zoom-in" data-aos-duration="2150" dangerouslySetInnerHTML={{ __html: title }}></p>
        <div className='rightBracket'></div>
      </SubBannerTextContainer>
    </SubBannerContainer>
  );
};

export default SubBanner;

const SubBannerContainer = styled.div`
  width: 100%;
  /* height: 480px; */
  height: 48rem;
  background: url(${props => props.img}) no-repeat;
  background-size: cover;
  position: relative;

  @media (min-width: 360px) and (max-width: 700px) {
    height: 200px;
  }

`

const SubBannerTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 100%;
  color: #fff;
  max-width: 100rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: 768px) and (max-width: 870px) {
    justify-content: center;
    
    }
  @media (min-width: 360px) and (max-width: 700px) {
    justify-content: center;
  }

  .leftBracket {
    background: url(${splite}) no-repeat -5px -190px;
    background-size: 599px 280px;
    width: 20px;
    min-width: 20px;
    height: 72px;
    margin-right: 50px;

    @media (min-width: 768px) and (max-width: 870px) {
      display: none;
    }
    @media (min-width: 360px) and (max-width: 700px) {
      display: none;
    }
  }

  p.aos-animate {
    @import 'https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Noto+Sans+KR:wght@400;500;700;900&family=Roboto:wght@700&display=swap';
    font-size: 4.5rem;
    font-weight: bold;
    line-height: 1.5;
    color: #fff;
    font-family: 'Noto Sans KR', sans-serif;
    text-align: center;

    @media (min-width: 360px) and (max-width: 700px) {
      font-size: 3rem;
    }
  }

  .rightBracket {
    background: url(${splite}) no-repeat -79px -190px;
	  background-size: 599px 280px;
    width: 20px;
    min-width: 20px;
	  height: 72px;
    margin-left: 50px;

    @media (min-width: 768px) and (max-width: 870px) {
      display: none;
    }

    @media (min-width: 360px) and (max-width: 700px) {
      display: none;
    }
  }

`