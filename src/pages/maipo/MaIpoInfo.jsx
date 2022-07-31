import React from 'react';
import SubBanner from '../../components/common/SubBanner';
import MaIpoSubImg from '../../img/m&a_ipo/m&a_ipo_sub_bg@2x.png'
import '../../styles/maipo/MaIpoInfo.scss'
import MaInfo from './tab/MaInfo';
import IpoInfo from './tab/IpoInfo';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PageBase from './../../components/common/Darkmode/PageBase';

const MaIpoInfo = ({ setHdSubStyle }) => {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const { category } = useParams();
  const [selectedIndex, setSelectedIndex]= useState(0); 

  const tabClick = (index) => {
    setActive(index)
  }

  const maTitle = 'M&A는 기업에게\n재도약과 성장의 기회를 부여합니다.';
  const ipoTitle = 'IPO는 기업에게\n상장을 향한 큰 도약입니다.';

  const oneDepth='M&A/IPO';
  const oneDepthLink='/maipo-info/m&a';
  const twoDepth='개요';
  const twoDepthLink='/maipo-info/m&a';
  const threeDepth= setBreadThreeDepth();
  const threeDepthLink=`/maipo-info/${category}`;
  const linkActive = 'threeDepth';

  useEffect(() => {
    setHdSubStyle('hdMain hdSub')
  }, [setHdSubStyle])

  const [data, setData] = useState([]);

  useEffect(()=> {
    setData(getSelectedData()); 
  }, [selectedIndex]);

  useEffect(() => {
    setData(getCategoryData());
  }, [category])

  const getCategoryData = () => {
    switch (category) {
    case 'm&a':
    default:
      return tabContentents[0];
    case 'ipo':
      return tabContentents[1];
    }
  }

  const getSelectedData = () => {
    switch (selectedIndex) {
    case 0:
    default:
      return tabContentents[0];
    case 1:
      return tabContentents[1];
    }
  }

  function setBreadThreeDepth() {
    if (category === undefined) {
      return 'M&A';
    } else if (category === 'm&a') {
      return 'M&A';
    } else if (category === 'ipo') {
      return 'IPO';
    }
  }

  const getActiveClassName = (cate) => {
    if (cate === category) {
      return 'miInfoTabOn';
    }
    return '';
  }


  const tabContentents = [
    {
      tabSubTitle: (<SubBanner title={maTitle} img={MaIpoSubImg} oneDepth={oneDepth} oneDepthLink={oneDepthLink} twoDepth={twoDepth} twoDepthLink={twoDepthLink} threeDepth={threeDepth} threeDepthLink={threeDepthLink} linkActive={linkActive}  />),
      tabContent: (<MaInfo />)
    },
    {
      tabSubTitle: (<SubBanner title={ipoTitle} img={MaIpoSubImg} oneDepth={oneDepth} oneDepthLink={oneDepthLink} twoDepth={twoDepth} twoDepthLink={twoDepthLink} threeDepth={threeDepth} threeDepthLink={threeDepthLink} linkActive={linkActive} />),
      tabContent: (<IpoInfo />)
    }
  ];

 

  return (
    <div className='miInfo'>
      {data.tabSubTitle}
      <PageBase>
        <div className='miInfoInner miInfoInnerDark'>
          <div className='darkText miInfoHead'>
              개요
            <ul className='darkText miInfoTab'>
              <li key={0} className={getActiveClassName('m&a')} onClick={() => {
                tabClick(0)
                navigate('/maipo-info/m&a')
                setSelectedIndex(0)
              }} > M & A 
              </li >
              <li key={1} className={getActiveClassName('ipo')} onClick={() => {
                tabClick(1)
                navigate('/maipo-info/ipo')
                setSelectedIndex(1)
              }}> IPO 
              </li>
            </ul>
          </div>

          {data.tabContent}

        </div>
      </PageBase>
    </div >
  );
};

export default MaIpoInfo;