import React from 'react';
import SubBanner from '../../components/common/SubBanner';
import subBg from '../../img/notice/notice_sub_bg@2x.png';
import '../../styles/notice/news.scss';
import NewsList from '../../components/Notice/NewsList';

const News = () => {
  const title ='ZETA PLAN만의 <br />다양하고 전문적인 정보를 제공해드립니다';

  return (
    <div>
      <SubBanner title={title} img={subBg} />
      <div className='newsInner'>
        <div className='newsTitleBox'>
          <h2 className='newsTabTitle'>소식</h2>
          <ul className='newsTabList'>
            <li>News</li>
            <li>Column</li>
          </ul>
        </div>
        <div className='newsContainer'>
          <div className='newsContentBox'>
            <p className='newsTitle'>중기부, ‘중소기업 기술사관’ 확대…첨단산업 정예인력 양성</p>
            <p className='newsSummary'>중소벤처기업부는 인력 수급에 애로를 겪고 있는 첨단산업 분야를 중심으로 중소기업 기술사관을 대폭 확대할 계획이라고 6일 밝혔다.</p>
            <p className='newsCreated'>2022.07.06</p>
            <div>
              <button className='news-prevBtn'>-</button>
              <button className='news-nextBtn'>+</button>
            </div>

          </div>
          <img className='newsThumbnail' src={require('../../img/notice/notice_sub_bg@2x.png')} alt="중소벤처기업부" />
        </div>
        <div className='newsSearchBox'>
          <input className="newsInput" type="search" placeholder='검색어를 입력하세요' />
          <span className='newsmagnifier'></span>
        </div>

        <NewsList />

      </div>
    </div>
  );
};

export default News;