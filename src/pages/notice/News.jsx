import React, {useEffect, useState} from 'react';
import SubBanner from '../../components/common/SubBanner';
import subBg from '../../img/notice/notice_sub_bg@2x.png';
import '../../styles/notice/news.scss';
import NewsList from '../../components/Notice/NewsList';
import newsData from '../../db/newsList.json';
import columnData from '../../db/column.json';
import NewsSwiper from '../../components/Notice/NewsSwiper';
import PaginatedItems from './Pagination';

const News = () => {
  const itemsPerPage = 6;

  const [data, setData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

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

  useEffect(()=> {
    setData(getSelectedData());
  }, [selectedIndex]);


  const getSelectedData = () => {
    switch (selectedIndex) {
    case 0:
      return newsData;
    case 1:
    default:
      return columnData;
    }
  }

  const getActiveClassName = (index) => {
    return index === selectedIndex ? 'active' : undefined;
  }

  const title ='ZETA PLAN만의 <br />다양하고 전문적인 정보를 제공해드립니다';

  if (currentItems === null) {
    return <div></div>;
  }

  return (
    <div>
      <SubBanner title={title} img={subBg} />
      <div className='newsInner'>
        <div className='newsTitleBox'>
          <h2 className='newsTabTitle'>소식</h2>
          <ul className='newsTabList'>
            <li className={getActiveClassName(0)} onClick={()=> setSelectedIndex(0)}>News</li>
            <li className={getActiveClassName(1)} onClick={()=> setSelectedIndex(1)}>Column</li>
          </ul>
        </div>
        <NewsSwiper items={data} />
        <div className='newsSearchBox'>
          <input className="newsInput" type="text" placeholder='검색어를 입력하세요' />
          <span className='newsmagnifier'></span>
        </div>
        <div className='newsListContainer'>
          {
            data.map((datalist)=> {
              return <NewsList key={datalist.id} items={datalist} selectedIndex={selectedIndex} />

            })
          }
        </div>
        <PaginatedItems itemsPerPage={itemsPerPage} handlePageClick={handlePageClick} currentItems={currentItems} pageCount={pageCount} />
      </div>
    </div>
  );
};

export default News;