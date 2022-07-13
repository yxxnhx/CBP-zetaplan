import React from 'react';

const Search = () => {
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
              <button>동해물과</button>
              <button>동해물과</button>
              <button>동해물과</button>
              <button>동해물과</button>
              <button>동해물과</button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;