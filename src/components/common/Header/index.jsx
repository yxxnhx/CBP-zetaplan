import React from 'react';
import { Link } from 'react-router-dom'
import Gnb from './Gnb';
import Util from './Util';
import '../../../styles/header/Header.scss'
import { useState } from 'react';

const Header = ({ hdSubStyle }) => {

  let [srhOpen, setSrhOpen] = useState(false);

  return (
    <header className={srhOpen ? hdSubStyle+' on':hdSubStyle}>
      <div className='hd'>
        <h1> 
          <Link to={'/main'} className='hdLogo'>zeta plan</Link>
        </h1>

        <Gnb />

        <Util srhOpen={srhOpen} setSrhOpen={setSrhOpen} />
      </div>
    </header>
  );
};

export default Header;