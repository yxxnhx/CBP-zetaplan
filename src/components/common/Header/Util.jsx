import React from 'react';
import { Link, Navigate } from 'react-router-dom'
import { useState } from 'react';
import Search from './Search';
import Sitemap from './Sitemap';

const Util = () => {
  let [srhOpen, setSrhOpen] = useState(false);
  let [srhBtnX, setsrhBtnX] = useState('hdSearchBtn');

  const openSrh = () => {
    setSrhOpen(true);
    document.body.style.overflow = 'hidden';
    setsrhBtnX('hdSearchBtn hdSearchBtnX')
  };
  const closeSrh = () => {
    setSrhOpen(false);
    document.body.style.overflow = 'unset'
    setsrhBtnX('hdSearchBtn')
  }


  const [smOpen, setSmOpen] = useState(false);

  const openSm = () => {
    setSmOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeSm = () => {
    setSmOpen(false);
    document.body.style.overflowX = 'hidden';
    document.body.style.overflowY = 'scroll';
  }


  return (
    <div className='hdUtil'>
      <select className='hdLang'onChange="window.open(value,'_self');">
        <option><Link to={'/'}>KOR</Link></option>
        <option value='www.naver.com'>{/* <Link to={'/'}> */}ENG{/* </Link> */}</option>
        <option><Link to={'/'}>CHN</Link></option>
      </select>
      {/* <ul className='hdLang'>
        <li><Link to={'/'}>KOR</Link></li>
        <li><Link to={'/eng'}>ENG</Link></li>
        <li><Link to={'/'}>CHN</Link></li>
      </ul> */}

      <button className={srhBtnX} onClick={openSrh}></button>
      <Search open={srhOpen} close={closeSrh} />

      <button className='hdSitemapBtn' onClick={openSm}>sitemap</button>
      <Sitemap open={smOpen} close={closeSm} />
    </div>
  );
};

export default Util;