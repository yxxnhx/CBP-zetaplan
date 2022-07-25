import React from 'react';
import '../../styles/notice/newsItem.scss'
import thumbnail from '../../img/notice/notice_thumbnail.png';
import { useNavigate } from 'react-router-dom';

const NewsList = ({items, selectedIndex}) => {
  const navigate = useNavigate();

  const getSelectedIndex = () => {
    switch (selectedIndex) {
    case 0:
      return 'news';
    case 1:
    default:
      return 'column';
    }
  };

  return (
    <div className='newsItemContainer' onClick={()=> navigate(`/news/${getSelectedIndex()}/${items.id}`)}>
      {
        items.img.length === 0 ? <img className='thumbnail' src={thumbnail} alt="뉴스 칼럼 대표 이미지" /> : <img className='thumbnail' src={items.img} alt="" />
      }
      <div className='newsItemContent'>
        <p className='newsTitle'>{items.title}</p>
        <p className='newsContent' dangerouslySetInnerHTML={{__html: items.content}}></p>
        <p className='createdAt'>{items.createdAt}</p>
      </div>
    </div>
  );
};

export default NewsList;