import React from 'react';
import { Link, Navigate } from 'react-router-dom'
import { useState } from 'react';
import Search from './Search';
import Sitemap from './Sitemap';

const Util = () => {
  let [srhOpen, setSrhOpen] = useState(false);

  const openSrh = () => {
    setSrhOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeSrh = () => {
    setSrhOpen(false);
    document.body.style.overflow = 'unset'
  }

  const [smOpen, setSmOpen] = useState(false);

  const openSm = () => {
    setSmOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeSm = () => {
    setSmOpen(false);
    document.body.style.overflow = 'unset'
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

      <button className='hdSearchBtn' onClick={openSrh}></button>
      <Search open={srhOpen} close={closeSrh} />

      <button className='hdSitemapBtn' onClick={openSm}>sitemap</button>
      <Sitemap open={smOpen} close={closeSm} />


    </div>
  );
};

export default Util;