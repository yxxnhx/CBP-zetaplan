import React, { useState, useEffect } from 'react';
import SubBanner from '../../components/common/SubBanner';
import subBg from '../../img/notice/notice_sub_bg@2x.png';
import QnaTable from '../../components/Notice/QnaTable';
import '../../styles/qna/qna.scss'
import qnaJsonList from '../../db/qna.json';
import PaginatedItems from './Pagination';
import { Link, useSearchParams } from 'react-router-dom';
import QnaDetailB from './QnaDetailB';

const Qna = ({ setHdSubStyle }) => {
  useEffect(() => {
    setHdSubStyle('hdMain hdSub')
  }, [setHdSubStyle])

  let [query, setQuery] = useSearchParams();

  let queryId = query.get('detailId');
  queryId=parseInt(queryId) 
   
  const itemsPerPage = 10;
  const [originData, setOriginData] = useState([]);
  const [data, setData] = useState([]);

  const [sliceData, setSliceData] = useState([]);

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const [input, setInput] = useState('');

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(sliceData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(sliceData.length / itemsPerPage));
  }, []);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage % data.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    const qnaLocalStorage = JSON.parse(window.localStorage.getItem('newQnaList'));
    const qnaCombineData = qnaLocalStorage !== null ? qnaJsonList.concat(qnaLocalStorage):qnaJsonList;
    const qnaNewDataList = qnaCombineData.splice(queryId ,1);
    setSliceData(qnaCombineData);
    console.log(sliceData)

  
    const qnaList = qnaCombineData.map((item,index)=>{
      return {
        ...item, 
        id: index,
        hit: 88,
      }

    })

    setSliceData(qnaList.reverse())

    // const qnaList = qnaLocalStorage !== null 
    //   ? qnaJsonList.concat(qnaLocalStorage).map((item, index) => {
    //     return { 
    //       ...item, 
    //       id: index + 1,
    //       hit: 888
    //     };
    //   }) 
    //   : [...qnaJsonList];

    console.log(qnaList)
    //const reversedQnaList = qnaList;

    //setData(reversedQnaList);
    //setOriginData(reversedQnaList);
  }, [])

  // const onDelete = (targetId) => {
  //   console.log(`${targetId}가 삭제되었습니다`)
  //   const newQnaList = data.filter((it) => it.id !== targetId);
  //   console.log(newQnaList) 
  // }

  // const onDelete = (targetId) => {
  //   console.log(`${targetId}가 삭제되었습니다`);
  //   // const newQnaList = [...qnaList];
  //   // data.splice(id, 1)
  //   setData(data.splice(parseInt(query), 1))
  // }

  const title = 'ZETA PLAN만의 <br />다양하고 전문적인 정보를 제공해드립니다'
  const oneDepth='소식 · 자료';
  const oneDepthLink='/news';
  const twoDepth='Q&A';
  const twoDepthLink='/qna';
  const linkActive='twoDepth';

  console.log(sliceData);

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
            {/* <select className='qnaSelect' name="qanCategory" id="qnaCategory" onChange={getOptionValue}>
              <option value="all">전체</option>
              <option value="author">작성자</option>
            </select> */}
          </div>
          <div className='qnaSearchBox'>
            {/* <input className="qnaSearch" type="text" placeholder="검색어를 입력하세요." onKeyDown={onKeyDown} onChange={getSearchByData} />
            <span className='qnamagnifier' onClick={onSearch}></span> */}
          </div>
        </div>
        <div>
          <QnaTable qnaJsonList={sliceData} />
        </div>
        <PaginatedItems handlePageClick={handlePageClick} currentItems={currentItems} pageCount={pageCount} />
        <button><Link to='/qna-write'>글쓰기</Link></button>
      </div>
      {/* <QnaDetailB data={data}/> */}
    </div>
  );
};

export default Qna;