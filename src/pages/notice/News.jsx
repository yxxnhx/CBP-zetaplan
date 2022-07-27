import React, { useEffect, useState } from 'react';
import SubBanner from '../../components/common/SubBanner';
import subBg from '../../img/notice/notice_sub_bg@2x.png';
import '../../styles/notice/news.scss';
import NewsList from '../../components/Notice/NewsList';
import newsData from '../../db/newsList.json';
import columnData from '../../db/column.json';
import NewsSwiper from '../../components/Notice/NewsSwiper';
import PaginatedItems from './Pagination';
import { useNavigate, useParams } from 'react-router-dom';

const News = ({ setHdSubStyle }) => {
  const itemsPerPage = 6;

  const navigate = useNavigate();
  const {category} = useParams();

  const [originData, setOriginData] = useState([]);
  const [data, setData] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);

  const [itemOffset, setItemOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [pageRangeCount, setPageRangeCount] = useState(10);

  const [input, setInput] = useState('');

  useEffect(() => {    
    setHdSubStyle('hdMain hdSub')
  }, [setHdSubStyle])

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [data, itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage % data.length;
    setItemOffset(newOffset);
  };

  // useEffect(() => {
  //   setData(getSelectedData());
  // }, [selectedIndex]);

  useEffect(() => {
    setOriginData(getCategoryData());
    setData(getCategoryData());
  }, [category]);
  
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
  }, [])

  useEffect(() => {
    if (isMobile) {
      setPageRangeCount(1);
    }
  }, [isMobile]);

  const getCategoryData = () => {
    switch (category) {
    case 'news':
    default:
      return newsData;
    case 'column':
      return columnData;
    }
  }

  const onChangeInput = (e) => {
    setInput(e.target.value);
  }

  const onSearch = () => {
    const searchedData = originData.filter((item) => {
      return item['title'].includes(input);
    })
    setData(searchedData);
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  }

  const getActiveClassName = (cate) => {
    if (cate === category) {
      return 'active';
    }
    return undefined;
  }
  
  const setBreadThreeDepth = () => {
    if (category === undefined) {
      return 'NEWS';
    } else if (category === 'news') {
      return 'NEWS';
    } else if (category === 'column') {
      return 'COLUMN';
    }
  }

  const title = 'ZETA PLAN만의 <br />다양하고 전문적인 정보를 제공해드립니다';
  const oneDepth='소식 · 자료';
  const oneDepthLink='/news/news';
  const twoDepth='소식';
  const twoDepthLink = '/news/news';
  const linkActive='threeDepth';

  if (currentItems === null) {
    return <div></div>;
  }

  return (
    <div>
      <SubBanner title={title} img={subBg} oneDepth={oneDepth} oneDepthLink={oneDepthLink} twoDepth={twoDepth} twoDepthLink= {twoDepthLink} threeDepth={setBreadThreeDepth()} threeDepthLink={category === undefined ? '/news/news' : `/news/${category}`} linkActive={linkActive} />
      <div className='newsInner'>
        <div className='newsTitleBox'>
          <h2 className='newsTabTitle'>소식</h2>
          <ul className='newsTabList'>
            <li className={getActiveClassName('news')} onClick={() => {
              navigate('/news/news')
              setSelectedIndex(0)}}>News</li>
            <li className={getActiveClassName('column')} onClick={() => {
              navigate('/news/column')
              setSelectedIndex(1)}}>Column</li>
          </ul>
        </div>
        <NewsSwiper items={originData.slice(0, 6)} selectedIndex={selectedIndex} />
        <div className='newsListContainer'>
          <div className='newsSearchBox'>
            <input className="newsInput" type="text" placeholder='검색어를 입력하세요' onChange={onChangeInput} onKeyDown={onKeyDown} />
            <span className='newsmagnifier' onClick={onSearch}></span>
          </div>
          <div className='newsListBox'>
            {
              currentItems.map((data) => {
                return <NewsList key={data.id} items={data} selectedIndex={selectedIndex} />
              })
            }
          </div>
        </div>
        <PaginatedItems pageRangeCount={pageRangeCount} itemsPerPage={itemsPerPage} handlePageClick={handlePageClick} currentItems={currentItems} pageCount={pageCount} />
      </div>
    </div>
  );
};

export default News;