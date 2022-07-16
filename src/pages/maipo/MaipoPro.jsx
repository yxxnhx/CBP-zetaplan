import React from 'react';
import '../../styles/maipo/MaIpoPro.scss'
import SubBanner from '../../components/common/SubBanner';
import MaIpoSubImg from '../../img/m&a_ipo/m&a_ipo_sub_bg@2x.png'
import MaPro from './tab/MaPro';
import IpoPro from './tab/IpoPro';
import { useState } from 'react';

const MaIpoPro = () => {
  const maTitle = 'M&A는 기업에게 <br /> 재 도약과 성장의 기회를 부여합니다.';
  const ipoTitle = 'IPO는 기업에게 <br /> 상장을 향한 큰 도약입니다.';

  const tabContentents = [
    {
      tabSubTitle: (<SubBanner title={maTitle} img={MaIpoSubImg} />),
      tabHead: (<button key={0} /* className={activeIndex === 0 ? 'on' : ''} */ onClick={() => tabClick(0)}> M&A </button>),
      tabContent: (<MaPro />)
    },
    {
      tabSubTitle: (<SubBanner title={ipoTitle} img={MaIpoSubImg} />),
      tabHead: (<button key={1} /* className={activeIndex === 1 ? 'on' : ''} */ onClick={() => tabClick(1)}> IPO </button>),
      tabContent: (<IpoPro />)
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const tabClick = (index) => {
    setActiveIndex(index)
  }
  return (
    <div className='miPro'>

      {tabContentents[activeIndex].tabSubTitle}

      <div className='inner'>
        <div className='miProHead'>
          Process
          <div className='miProTab'>
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

export default MaIpoPro;