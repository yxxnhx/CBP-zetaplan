import React from 'react';
import { Link } from 'react-router-dom';

const Search = ({ open, close }) => {
  return (
    <div className={open ? 'hdOpenSearch hdSearch' : 'hdSearch'}>
      {
        open ?
          (<div className='hdSearchWrap'>
            <div className='hdSearchContent'>
              <div className='hdSearchInput'>
                <input type="text" placeholder='검색어를 입력하세요' />
                <button>검색</button>
              </div>
              <div className='hdButtonsArea'>
                <p>필요하신 검색어를 찾아보세요</p>
                <ul className='hdButtons'>
                  <button><Link to={'/maipo'}>M&A/IPO</Link></button>
                  <button><Link to={'/ir'}>IR</Link></button>
                  <button><Link to={'/mng-consulting'}>경영컨설팅</Link></button>
                  <button><Link to={'/mng-trade'}>기술거래</Link></button>
                  <button><Link to={'/mng-value'}>가치평가</Link></button>
                </ul>
              </div>
            </div>
            <button onClick={close} className='hdSerarchClose'>X</button>
          </div >)
          : null
      }
    </div >
  );
};

export default Search;