import React from 'react';
import '../../styles/notice/newsItem.scss'
import thumbnail from '../../img/notice/notice_thumbnail.png';

const NewsList = ({items, selectedIndex}) => {
  return (
    <div className='newsItemContainer'>
      <img className='thumbnail' src={items.img} alt="" />
      {/* <img className='thumbnail' src={thumbnail} alt="" /> */}
      <p className='newsTitle'>{items.title}</p>
      <p className='newsContent' dangerouslySetInnerHTML={{__html: items.content}}></p>
      <p className='createdAt'>{items.createdAt}</p>
    </div>
  );
};

export default NewsList;