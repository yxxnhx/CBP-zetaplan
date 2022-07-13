import React from 'react';
import { Link } from 'react-router-dom'

const Util = () => {
  return (
    <div className='hdUtil'>
      <div className='hdLang'>
        <Link to={''}>KOR</Link>
        <ul className='hdLangLi'>
          <li><Link to={''}>ENG</Link></li>
          <li><Link to={''}>CHN</Link></li>
        </ul>
      </div>
      <button className='hdSearchBtn'>search</button>
      <button className='hdSitemapBtn'>sitemap</button>
    </div>
  );
};

export default Util;