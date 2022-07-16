import React from 'react';
import SubBanner from '../../components/common/SubBanner';
import maIpoSubImg from '../../img/m&a_ipo/m&a_ipo_sub_bg@2x.png'
import '../../styles/maipo/MaIpo.scss'
import MaInfo from './tab/MaInfo';
import IpoInfo from './tab/IpoInfo';
import { useState } from 'react';

const MaIpoInfo = () => {

  const maTitle = 'M&A는 기업에게 <br /> 재 도약과 성장의 기회를 부여합니다.';
  const ipoTitle = 'IPO는 기업에게 <br /> 상장을 향한 큰 도약입니다.';

  const tabContentents = [
    {
      tabSubTitle: (<SubBanner title={maTitle} img={maIpoSubImg} />),
      tabHead: (<button key={0} /* className={activeIndex === 0 ? 'is-active' : ''} */ onClick={() => tabClick(0)}> M&A </button>),
      tabContent: (<MaInfo />)
    },
    {
      tabSubTitle: (<SubBanner title={ipoTitle} img={maIpoSubImg} />),
      tabHead: (<button key={1} /* className={activeIndex === 1 ? 'is-active' : ''} */ onClick={() => tabClick(1)}> IPO </button>),
      tabContent: (<IpoInfo />)
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const tabClick = (index) => {
    setActiveIndex(index)
  }

  return (
    <div className='maipoInfo'>

      {tabContentents[activeIndex].tabSubTitle}

      <div className='inner'>
        <div className='maInfoHead'>
          개요
          <div className='maInfoTab'>
            {
              tabContentents.map((section, index) => {
                return section.tabHead
              })
            }
          </div>
        </div>

        {tabContentents[activeIndex].tabContent}

      </div>
    </div >
  );
};

export default MaIpoInfo;