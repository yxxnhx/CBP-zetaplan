import React from 'react';
import '../../styles/notice/newsItem.scss'
import thumbnail from '../../img/notice/notice_thumbnail.png';

const NewsList = ({items, selectedIndex, currentItems}) => {

  console.log('items: ', items.img);
  console.log('currentItems: ', currentItems);

  return (
    <div className='newsItemContainer'>
      {
        items.img.length === 0 ? <img className='thumbnail' src={thumbnail} alt="뉴스 칼럼 대표 이미지" /> : <img className='thumbnail' src={items.img} alt="" />
      }
      <p className='newsTitle'>{items.title}</p>
      <p className='newsContent' dangerouslySetInnerHTML={{__html: items.content}}></p>
      <p className='createdAt'>{items.createdAt}</p>
    </div>
  );
};

export default NewsList;