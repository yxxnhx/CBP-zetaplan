import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SubBanner from '../../components/common/SubBanner';
import subBg from '../../img/notice/notice_sub_bg@2x.png';
import newsData from '../../db/newsList.json';
import columnData from '../../db/column.json';
import '../../styles/notice/newsDetail.scss';
import contentImg from '../../img/notice/thumbnail_zeta.png';

const NewsDetailItem = ({ setHdSubStyle }) => {
  const { category, id } = useParams();
  const [data, setData] = useState([]);

  const [detailData, setDetailData] = useState(null);

  const [theme, setTheme] = useState('');
  const [themeCss, setThemCss] = useState('');

  const getDataByCategory = () => {
    switch (category) {
    case 'news':
      return newsData;
    case 'column':
    default:
      return columnData;
    }
  }

  useEffect(() => {
    setData(getDataByCategory());
  }, [category])

  useEffect(() => {
    const filteredData = data.find((element) => element.id === parseInt(id));
    setDetailData(filteredData);
  }, [data])

  useEffect(() => {
    setHdSubStyle('hdMain hdSub')
  }, [setHdSubStyle])

  function handleTheme () {
    const value = theme;
    setTheme(!value);
    const cssValue = value ? 'dark' : 'light';
    setThemCss(cssValue);
  }

  const title = 'ZETA PLAN만의\n다양하고 전문적인 정보를 제공해드립니다';

  if (!detailData) {
    return <div></div>
  }

  return (
    <div>
      <SubBanner title={title} img={subBg} />
      <div className={themeCss}>
        <div className='darkBackground'>
          <div className="newsDetailInner">
            <div className="themeBtnArea">
              <button className='themeBtn' onClick={()=>{handleTheme()}}>
                mode change
              </button>
            </div>
            <div className="detailTitle darkText">
              <p>소식</p>
            </div>
            <div className="detailItemBox">
              <p className="detailItemTitle darkText">{detailData.title}</p>
              <div className="contentBox darkText">
                {
                  detailData.img.length === 0 ? <img className="zetaLogoThumb" src={contentImg} alt="zeta 대표 이미지" /> : <img src={detailData.img} alt={detailData.alt} />
                }
                <div className="content" dangerouslySetInnerHTML={{ __html: detailData.content }}></div>
              </div>
            </div>
            <Link to='/news' className="newsListBtn">목록</Link>
          </div>

        </div>
      </div>

    </div>
  );
};

export default NewsDetailItem;
