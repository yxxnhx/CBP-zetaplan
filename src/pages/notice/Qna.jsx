import React, { useState, useEffect } from 'react';
import SubBanner from '../../components/common/SubBanner';
import subBg from '../../img/notice/notice_sub_bg@2x.png';
import QnaTable from '../../components/Notice/QnaTable';
import '../../styles/qna/qna.scss'
import qnaJsonList from '../../db/qna.json';
import PaginatedItems from './Pagination';
import { Link } from 'react-router-dom';

const Qna = ({ setHdSubStyle }) => {

  useEffect(() => {
    setHdSubStyle('hdMain hdSub')
  }, [setHdSubStyle])

  
  const [originData, setOriginData] = useState([]);
  const [data, setData] = useState([]);

  const itemsPerPage = 10;
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const [input, setInput] = useState('');
  const [optionValue, setOptionValue] = useState('');

  const [theme, setTheme] = useState('');
  const [themeCss, setThemCss] = useState('');

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [data, itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage % data.length;
    setItemOffset(newOffset);
  };
  
  useEffect(() => {
    const qnaList = JSON.parse(window.localStorage.getItem('newQnaList'));

    if (qnaList === null) {
      window.localStorage.setItem('newQnaList', JSON.stringify(qnaJsonList))
    }
  
    const reversedQnaList = JSON.parse(window.localStorage.getItem('newQnaList')).reverse();

    setData(reversedQnaList);
    setOriginData(reversedQnaList);
  }, [])

  const getSearchByData = (e) => {
    setInput(e.target.value);
  }

  const getOptionValue = (e) => {
    setOptionValue(e.target.value);
  }

  const getSearchedByOption = () => {
    if (optionValue === 'all') {
      return originData.filter((item) => {
        return item['title'].includes(input)
      })
      || originData.filter((item) => {
        return item['author'].includes(input)
      })
    } else {
      return originData.filter((item) => {
        return item['author'].includes(input)
      })

    }
  }

  const onSearch = () => {
    // const dataTitleList = originData.filter((item) => {
    //   return item['title'].includes(input);
    // })
    // setData(dataTitleList);
    setData(getSearchedByOption());


  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  const handleTheme = () => {
    const value = theme;
    setTheme(!value);
    const cssValue = value ? 'dark' : 'light';
    setThemCss(cssValue);
  }

  const title = 'ZETA PLAN만의 <br />다양하고 전문적인 정보를 제공해드립니다'
  const oneDepth='소식 · 자료';
  const oneDepthLink='/news';
  const twoDepth='Q&A';
  const twoDepthLink='/qna';
  const linkActive='twoDepth';

  if (currentItems === null) {
    return <div></div>;
  }

  return (
    <>
      <SubBanner title={title} img={subBg} oneDepth={oneDepth} oneDepthLink={oneDepthLink} twoDepth={twoDepth} twoDepthLink={twoDepthLink} linkActive={linkActive} />
      <div className={themeCss}>
        <div className='darkBackground'>
          <div className='qnaInner'>
            <div className="themeBtnArea">
              <button className='themeBtn' onClick={()=>{handleTheme()}}>
                  mode change
              </button>
            </div>
            <div className='qnaTitleBox'>
              <h2 className='qnaTitle darkText'>Q&A</h2>
            </div>
            <div className='qnaSearchInput'>
              <div className="qnaSelectBox">
                <label htmlFor="qnaCategory">qnaCategory</label>
                <select className='qnaSelect' name="qanCategory" id="qnaCategory" onChange={getOptionValue}>
                  <option value="all">전체</option>
                  <option value="author">작성자</option>
                </select>
              </div>
              <div className='qnaSearchBox'>
                <input className="qnaSearch" type="text" placeholder="검색어를 입력하세요." onKeyDown={onKeyDown} onChange={getSearchByData} />
                <span className='qnamagnifier' onClick={onSearch}></span>
              </div>
            </div>
            <div>
              <QnaTable qnaJsonList={currentItems} />
            </div>
            <PaginatedItems handlePageClick={handlePageClick} currentItems={currentItems} pageCount={pageCount} />
            <button><Link to='/qna-write'>글쓰기</Link></button>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Qna;