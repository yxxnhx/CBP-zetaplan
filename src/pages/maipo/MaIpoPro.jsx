import React from 'react';
import '../../styles/maipo/MaIpoPro.scss'
import SubBanner from '../../components/common/SubBanner';
import MaIpoSubImg from '../../img/m&a_ipo/m&a_ipo_sub_bg@2x.png'
import MaPro from './tab/MaPro';
import IpoPro from './tab/IpoPro';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MaIpoPro = ({ setHdSubStyle }) => {
  const [setActive] = useState(0);
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
  const twoDepth='Process';
  const twoDepthLink='/maipo-process/m&a';
  const threeDepth= setBreadThreeDepth();
  const threeDepthLink=`/maipo-process/${category}`;
  const linkActive = 'threeDepth';

  /* header 배경색 변경 */
  useEffect(() => {
    setHdSubStyle('hdMain hdSub')
  }, [setHdSubStyle])
  
  const [data, setData] = useState([]);

  useEffect(()=> {
    setData(getSelectedData()); 
  // eslint-disable-next-line no-use-before-define
  }, [getSelectedData, selectedIndex]);

  useEffect(() => {
    setData(getCategoryData());
  // eslint-disable-next-line no-use-before-define
  }, [category, getCategoryData])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getCategoryData = () => {
    switch (category) {
    case 'm&a':
    default:
      return tabContentents[0];
    case 'ipo':
      return tabContentents[1];
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
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
      return 'miProTabOn';
    }
    return '';
  }


  const tabContentents = [
    {
      tabSubTitle: (<SubBanner title={maTitle} img={MaIpoSubImg} oneDepth={oneDepth} oneDepthLink={oneDepthLink} twoDepth={twoDepth} twoDepthLink={twoDepthLink} threeDepth={threeDepth} threeDepthLink={threeDepthLink} linkActive={linkActive}  />),
      tabContent: (<MaPro />)
    },
    {
      tabSubTitle: (<SubBanner title={ipoTitle} img={MaIpoSubImg} oneDepth={oneDepth} oneDepthLink={oneDepthLink} twoDepth={twoDepth} twoDepthLink={twoDepthLink} threeDepth={threeDepth} threeDepthLink={threeDepthLink} linkActive={linkActive} />),
      tabContent: (<IpoPro />)
    }
  ];



  return (
    <div className='miPro'>

      {data.tabSubTitle}

      <div className='miProinner'>
        <div className='miProHead'>
          Process
          <ul className='miProTab'>
            <li key={0} className={getActiveClassName('m&a')} onClick={() => {
              tabClick(0)
              navigate('/maipo-process/m&a')
              setSelectedIndex(0)
            }} > M & A 
            </li >
            <li key={1} className={getActiveClassName('ipo')} onClick={() => {
              tabClick(1)
              navigate('/maipo-process/ipo')
              setSelectedIndex(1)
            }}> IPO 
            </li>
          </ul>
        </div>

        {data.tabContent}

      </div>
    </div >
  );
};

export default MaIpoPro;