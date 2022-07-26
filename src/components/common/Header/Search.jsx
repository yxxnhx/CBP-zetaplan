import React from 'react';
import { Link } from 'react-router-dom';

const Search = ({srhOpen}) => {
  return (
    <div className='hdSearch'>
      <div className='hdSearchWrap'>
        <div className='hdSearchContent'>
          <div className='hdSearchInput'>
            <input type="text" placeholder='검색어를 입력하세요' />
            <button>검색</button>
          </div>
          <div className='hdButtonsArea'>
            <p>필요하신 검색어를 찾아보세요</p>
            <ul className='hdButtons'>
              <button><Link to={'/maipo-info/m&a'} onClick={srhOpen}>M&A/IPO</Link></button>
              <button><Link to={'/ir'} onClick={srhOpen}>IR</Link></button>
              <button><Link to={'/mng'} onClick={srhOpen}>경영컨설팅</Link></button>
              <button><Link to={'/mng-trade'} onClick={srhOpen}>기술거래</Link></button>
              <button><Link to={'/mng-value/mngvaluecompany'} onClick={srhOpen}>가치평가</Link></button>
            </ul>
          </div>
        </div>
      </div >
      
    </div >

  )};

export default Search;