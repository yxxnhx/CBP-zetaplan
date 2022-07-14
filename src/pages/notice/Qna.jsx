import React from 'react';
import SubBanner from '../../components/common/SubBanner';
import subBg from '../../img/notice/notice_sub_bg@2x.png';
import QnaTable from '../../components/Notice/QnaTable';
import '../../styles/qna/qna.scss'
import qnaJsonList from '../../db/qna.json';


const Qna = () => {
  const title = 'ZETA PLAN만의 <br />다양하고 전문적인 정보를 제공해드립니다'

  return (
    <div>
      <SubBanner title={title} img={subBg}/>
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
          <input className="qnaSearch" type="search" placeholder="검색어를 입력하세요." />
        </div>
        <div>
          <QnaTable qnaJsonList={qnaJsonList} />
        </div>
        
      </div>
      
    </div>
  );
};

export default Qna; 