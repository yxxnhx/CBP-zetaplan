import React from 'react';
import { useNavigate } from 'react-router-dom';

const InfoList = ({item, selectedIndex}) => {
  const navigate = useNavigate();
  
  const hasCategory = !!item.category;

  const getSelectedIndex = () => {
    switch (selectedIndex) {
    case 0:
      return 'm&a-invest';
    case 1:
      return 'government-support';
    case 2:
      return 'fund-support';
    case 3:
      return 'technology-trade';
    case 4:
    default:
      return 'consulting-list';
    }
  };


  return (
    <>
      <dl className='dataInfoItem' onClick={()=> navigate(`/datainfo/${getSelectedIndex()}/${item.id}`)}>
        <div className='infoItemTop'>
          <dd className='ddnotice'>공지</dd>
          {hasCategory && <dd className='ddCate'>{item.category}</dd>}
          {/* <dd className='ddCate'>{hasCategory ? item.category : ''}</dd> */}
        </div>
        <dt>{item.title}</dt>
        <dd className='date'>{item.createdAt}</dd>
      </dl>
    </>
  );
};

export default InfoList;