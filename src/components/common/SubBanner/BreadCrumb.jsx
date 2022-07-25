import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import splite from '../../../img/zetaplan_splite.png';

const BreadCrumb = ({ oneDepth,twoDepth,threeDepth,oneDepthLink,twoDepthLink,threeDepthLink,linkActive})=> 
{
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/main');
  };
  const goOneDepth = () => {
    navigate(`${oneDepthLink}`);
  };
  const gotwoDepth = () => {
    navigate(`${twoDepthLink}`);
  };
  const gothreeDepth = () => {
    navigate(`${threeDepthLink}`);
  };
  
  return (
    <SubBreadcrumb>
      <p onClick={goHome}>HOME</p>
      <p className={linkActive==='oneDepth'?'subOneDepth active':'subOneDepth'} onClick={goOneDepth} style={{display:oneDepth===undefined?'none':'inline-block'}}>
        {oneDepth}
      </p>
      <p className={linkActive==='twoDepth'?'subTwoDepth active':'subTwoDepth'} onClick={gotwoDepth} style={{display:twoDepth===undefined?'none':'inline-block'}}>
        {twoDepth}
      </p>
      <p className={linkActive==='threeDepth'?'subThreeDepth active':'subThreeDepth'} onClick={gothreeDepth} style={{display:threeDepth===undefined?'none':'inline-block'}}>
        {threeDepth}
      </p>
    </SubBreadcrumb>
  );
};

export default BreadCrumb;

const SubBreadcrumb= styled.div`
    position: absolute;
    top:2rem;
    right:10rem;
    color: #fff;
    font-size:2.5rem;
    font-weight:700;
    p{
      display:inline-block;
      margin-left:2rem;
      cursor: pointer;
      color:#fff;
      &:hover{
        color:#007ACC;
      };
      &::before{
        content:'';
        display:inline-block;
        background:url(${splite}) no-repeat -236px -221px;
        background-size: 599px 280px;
        width: 8px;
        height: 13px;
        margin-right: 2rem;
      };
      &:first-child::before{
        display:none;
      };
    };
    p.active{
      color:#007ACC;
    };
    @media all and  (min-width: 768px) and (max-width: 1023px){
     &{
      font-size: 3.5rem;
      };
    };
    @media all and (min-width: 501px)  and (max-width: 767px){
      &{
        right:6rem;
        top: 1rem;
        font-size: 5.5rem;
      };
    };
      @media all and (max-width: 500px){
        &{
          display:none;
        };
  };
`