import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const InfoList = ({item}) => {
  const navigate = useNavigate();
  const { category } = useParams();
  
  const hasCategory = !!item.category;

  return (
    <>
      <dl className='dataInfoItem darkText' onClick={()=> navigate(`/datainfo/${category}/${item.id}`)}>
        <div className='infoItemTop'>
          <dd className='ddnotice'>공지</dd>
          {hasCategory && <dd className='ddCate'>{item.category}</dd>}
        </div>
        <dt>{item.title}</dt>
        <dd className='date'>{item.createdAt}</dd>
      </dl>
    </>
  );
};

export default InfoList;