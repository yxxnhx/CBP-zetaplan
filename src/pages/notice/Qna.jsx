import React, { useState, useEffect } from 'react';
import SubBanner from '../../components/common/SubBanner';
import subBg from '../../img/notice/notice_sub_bg@2x.png';
import QnaTable from '../../components/Notice/QnaTable';
import '../../styles/qna/qna.scss'
import qnaJsonList from '../../db/qna.json';
import PaginatedItems from './Pagination';

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
    const reverseData = [...qnaJsonList].reverse();
    setData(reverseData);
  }, [])

  const title = 'ZETA PLAN만의 <br />다양하고 전문적인 정보를 제공해드립니다'

  if (currentItems === null) {
    return <div></div>;
  }

  console.log(currentItems);
  return (
    <div>
      <SubBanner title={title} img={subBg} />
      <div className='qnaInner'>
        <div className='qnaTitleBox'>
          <h2 className='qnaTitle'>Q&A</h2>
        </div>
        <div className='qnaSearchInput'>
          <label htmlFor="qnaCategory"></label>
          <select className='qnaSelect' name="qanCategory" id="qnaCategory">
            <option value="all">전체</option>
            <option value="writer">작성자</option>
            <option value="createdAt">작성일</option>
          </select>
          <div className='qnaSearchBox'>
            <input className="qnaSearch" type="text" placeholder="검색어를 입력하세요." />
            <span className='qnamagnifier'></span>
          </div>
        </div>
        <div>
          <QnaTable qnaJsonList={currentItems} />
        </div>
        <PaginatedItems handlePageClick={handlePageClick} currentItems={currentItems} pageCount={pageCount} />
      </div>
    </div>
  );
};

export default Qna; 