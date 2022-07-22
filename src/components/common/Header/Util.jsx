import React from 'react';
import { Link } from 'react-router-dom'
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
      <select className='hdLang'>
        <option><Link to={''}>KOR</Link></option>
        <option><Link to={''}>ENG</Link></option>
        <option><Link to={''}>CHN</Link></option>
      </select>

      <button className='hdSearchBtn' onClick={openSrh}></button>
      <Search open={srhOpen} close={closeSrh} />

      <button className='hdSitemapBtn' onClick={openSm}>sitemap</button>
      <Sitemap open={smOpen} close={closeSm} />


    </div>
  );
};

export default Util;