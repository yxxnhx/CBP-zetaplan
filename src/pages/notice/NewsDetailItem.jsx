<<<<<<< Updated upstream
import React, { useEffect, useState } from 'react';
=======
/*import React, { useEffect, useState } from 'react';
>>>>>>> Stashed changes
import { Link, useParams } from 'react-router-dom';
import SubBanner from '../../components/common/SubBanner';
import subBg from '../../img/notice/notice_sub_bg@2x.png';
import newsData from '../../db/newsList.json';
import columnData from '../../db/column.json';
import '../../styles/notice/newsDetail.scss';

const NewsDetailItem = ({ setHdSubStyle }) => {
  const { category, id } = useParams();
  const [data, setData] = useState([]);

  const [detailData, setDetailData] = useState(null);

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

  const title = 'ZETA PLAN만의 <br />다양하고 전문적인 정보를 제공해드립니다';

  if (!detailData) {
    return <div></div>
  }

  return (
    <div>
      <SubBanner title={title} img={subBg} />
      <div className="newsDetailInner">
        <div className="detailTitle">
          <p>소식</p>
        </div>
        <div className="detailItemBox">
          <p className="detailItemTitle">{detailData.title}</p>
          <div className="contentBox">
            <img src={detailData.img} alt={detailData.alt} />
            <div className="content" dangerouslySetInnerHTML={{ __html: detailData.content }}></div>
          </div>
        </div>
        <Link to='/news' className="newsListBtn">목록</Link>
      </div>

    </div>
  );
};

<<<<<<< Updated upstream
export default NewsDetailItem;
=======
export default NewsDetailItem;*/
>>>>>>> Stashed changes
