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

  const itemsPerPage = 10;

  const [data, setData] = useState([]);

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

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
    const qnaLocalStorage = JSON.parse(window.localStorage.getItem('newQnaList'));
    if (qnaLocalStorage !== null) {
      const qnaList = qnaJsonList.concat(qnaLocalStorage).map((item, index) => {
        return { ...item, id: index + 1, hit: 7 };
      });
      const reverseQnaList = qnaList.reverse();
      setData(reverseQnaList);
    } else {
      const reverseJsonList = [...qnaJsonList].reverse();
      setData(reverseJsonList);
    }
  }, [])

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
    <div>
      <SubBanner title={title} img={subBg} oneDepth={oneDepth} oneDepthLink={oneDepthLink} twoDepth={twoDepth} twoDepthLink={twoDepthLink} linkActive={linkActive} />
      <div className='qnaInner'>
        <div className='qnaTitleBox'>
          <h2 className='qnaTitle'>Q&A</h2>
        </div>
        <div className='qnaSearchInput'>
          <div className="qnaSelectBox">
            <label htmlFor="qnaCategory">qnaCategory</label>
            <select className='qnaSelect' name="qanCategory" id="qnaCategory">
              <option value="all">전체</option>
              <option value="writer">작성자</option>
              <option value="createdAt">작성일</option>
            </select>
          </div>
          <div className='qnaSearchBox'>
            <input className="qnaSearch" type="text" placeholder="검색어를 입력하세요." />
            <span className='qnamagnifier'></span>
          </div>
        </div>
        <div>
          <QnaTable qnaJsonList={currentItems} />
        </div>
        <PaginatedItems handlePageClick={handlePageClick} currentItems={currentItems} pageCount={pageCount} />
        <button><Link to='/qna-write'>글쓰기</Link></button>
      </div>
    </div>
  );
};

export default Qna; 