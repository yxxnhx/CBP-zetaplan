import React from 'react';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Search from './Search';
import Sitemap from './Sitemap';

const Util = () => {
  let [block, setBlock] = useState(false);

  function blockEvent() {
    if (block === false) {
      setBlock(true)
    } else {
      setBlock(false)
    }
  }

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  }

  return (
    <div className='hdUtil'>
      <div className='hdLang'>
        <Link to={''}>KOR</Link>
        <ul className='hdLangLi'>
          <li><Link to={''}>ENG</Link></li>
          <li><Link to={''}>CHN</Link></li>
        </ul>
      </div>

      <button onClick={() => { blockEvent() }} className='hdSearchBtn'></button>
      {
        block !== false ? <Search /> : null
      }

      <button className='hdSitemapBtn' onClick={openModal}>sitemap</button>

      <Sitemap open={modalOpen} close={closeModal} />


    </div>
  );
};

export default Util;