import React from 'react';

const InfoList = () => {
  return (
    <div>
      <dl className='dataInfoItem'>
        <div className='infoItemTop'>
          <dd className='ddnotice'>공지</dd>
          <dd className='ddCate'>전기/전자</dd>
        </div>
        <dt>2022 KDB테크커넥트데이 투자 M&A</dt>
        <dd className='date'>2022.07.07</dd>
      </dl>
    </div>
  );
};

export default InfoList;