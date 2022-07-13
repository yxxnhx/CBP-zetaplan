import React from 'react';
import { Link } from 'react-router-dom'
import Gnb from './Gnb';
import Util from './Util';
import Sitemap from './Sitemap';
import '../../../styles/header/Header.scss'

const Header = () => {
  return (
    <header>
      <div className='hd'>
        <h1>
          <Link to={'/'} className='hdLogo'>zeta plan</Link>
        </h1>

        <Gnb />

        <Util />
      </div>
      {/* end : header */}

      <Sitemap />
      {/* sitemap 창 */}
    </header>
  );
};

export default Header;