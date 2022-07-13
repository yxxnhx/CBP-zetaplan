import React from 'react';

const Util = () => {
  return (
    <div className='hdUtil'>
      <div className='hdLang'>
        <a href="#">KOR</a>
        <ul className='hdLangLi'>
          <li><a href="#">ENG</a></li>
          <li><a href="#">CHN</a></li>
        </ul>
      </div>
      <button className='hdSearchBtn'>search</button>
      <button className='hdSitemapBtn'>sitemap</button>
    </div>
  );
};

export default Util;