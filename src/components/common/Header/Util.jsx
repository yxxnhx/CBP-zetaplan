import React from 'react';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Search from './Search';

const Util = () => {
  let [block, setBlock] = useState(false);
  var clickCount = 0;

  function blockEvent() {
    clickCount = clickCount + 1;
    console.log(clickCount);
    if (clickCount % 2 === 1) {
      setBlock(true)
    } else if (clickCount % 2 === 0) {
      setBlock(false)
    }
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

      <button className='hdSitemapBtn'>sitemap</button>

    </div>
  );
};

export default Util;