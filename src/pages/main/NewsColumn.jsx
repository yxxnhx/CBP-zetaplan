import React from 'react';
import './../../styles/main/NewsColumn.scss';
import { Link } from 'react-router-dom';
import MainAll from './MainAll';
import MainNews from './MainNews';
import MainColumn from './MainColumn';
import { useState, useEffect } from 'react';

const NewsColumn = () => {
  const mainNCList = [
    {
      id: 0,
      title: 'ALL',
    },
    {
      id: 1,
      title: 'NEWS',
    },
    {
      id: 2,
      title: 'COLUMNS',
    }
  ];
  
  const [mainCLi,setMainCLi]=useState([]);
  useEffect(()=>{
    setMainCLi(mainNCList);
  },[])

  const [mainCLView,setMainCLView]=useState(0);

  
  return (
    <div className='mainNewsInner'>
      <div className="mainNewsTop">
        <h1 className='mainNewTitle'>NEWS & COLUMN</h1>
        <Link to='/news/news' className='newsColumnMore'>더보기</Link>
      </div>
      <div className="mainNewsColumn">
        <div className="newsColumBox">
          <div className='newsColumnTab'>
            {
              mainCLi.map(function(data, i) {
                return (
                  <button onClick={() => setMainCLView(i)} key={data.id} className={mainCLView===i?'mainNCTap mainNCTapOn':'mainNCTap mainNCTapOff'}>{mainCLi[i].title}</button>
                )
              })
            }
          </div>
          {
            mainCLi.map(function(data, i) {
              return (
                <div key={data.id}  className={mainCLView===i? 'mainSlide mainSlideOn':'mainSlide mainSlideOff'}>
                  <div>{i === 0 ? <MainAll /> :  null}</div>
                  <div>{i === 1 ? <MainNews /> :  null}</div>
                  <div>{i === 2 ? <MainColumn /> :  null}</div>
                </div>
              )
            })

          }
        </div>
      </div>
    </div>
  );
};

export default React.memo(NewsColumn);