import React from 'react';
import { Link } from 'react-router-dom'
import Gnb from './Gnb';
import Util from './Util';
import '../../../styles/header/Header.scss'

const Header = () => {
  return (
    <header>
      <div className='hd'>
        <h1>
          <Link to={'/main'} className='hdLogo'>zeta plan</Link>
        </h1>

        <Gnb />

        <Util />
      </div>
      {/* end : header */}
    </header>
  );
};

export default Header;