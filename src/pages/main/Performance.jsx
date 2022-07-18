import React from 'react';
import CountUp from 'react-countup';
import './../../styles/main/Performance.scss';
import globalBg from './../../img/main/performance/global_smaill_bg.png';
import ipoBg from './../../img/main/performance/ipo_smaill_bg.png';
import irBg from './../../img/main/performance/ir_smaill_bg.png';
import maBg from './../../img/main/performance/m&a_smaill_bg.png';
import globalIcon from './../../img/main/business/global_icon.png';
import ipoIcon from './../../img/main/business/ipo_icon.png';
import irIcon from './../../img/main/business/ir_icon.png';
import maIcon from './../../img/main/business/m&a_icon.png';

const Performance = () => {
  /*   const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log(window.scrollY);

  const handleScroll = () => {
    if (window.scrollY >= 1500) {
      setScroll(true);
      console.log(scroll);
    } else {
      setScroll(false);
    }
  }; */

  return (
    <div className="pfWrap">
      <div className="pfCon">
        <div className="pfMaintitle">
          <h1>Performance</h1>
        </div>
        <div className="pfListCon">
          <div className="pfList">
            <div className="pfImgBox">
              <img src={globalBg} alt="배경 이미지" />
            </div>
            <div className="pfConBox">
              <div className="pfIconBox">
                <img src={globalIcon} alt="글로벌 아이콘" />
              </div>
              <span className="pfTitle">M&A</span>
              <CountUp className="pfCount" end={6965} duration={2} enableScrollSpy={true} />;
              <div className="pfDes">
                기업 성장과 발전 가치를 극대화할 수 <br />
                있도록 컨설팅하고 있습니다.
              </div>
            </div>
          </div>
          <div className="pfList">
            <div className="pfImgBox">
              <img src={ipoBg} alt="배경 이미지" />
            </div>
            <div className="pfConBox">
              <div className="pfIconBox">
                <img src={ipoIcon} alt="ipo 아이콘" />
              </div>
              <span className="pfTitle">IPO</span>
              <CountUp className="pfCount" end={978} duration={2} enableScrollSpy={true} />
              <p className="pfDes">
                다양한 방법으로 투자기업에 대한
                <br /> 적극적인 성장을 지원합니다
              </p>
            </div>
          </div>
          <div className="pfList">
            <div className="pfImgBox">
              <img src={irBg} alt="배경 이미지" />
            </div>
            <div className="pfConBox">
              <div className="pfIconBox">
                <img src={irIcon} alt="ir아이콘" />
              </div>
              <span className="pfTitle">투자유치</span>
              <CountUp className="pfCount" end={6965} duration={2} enableScrollSpy={true} />;
              <p className="pfDes">
                해외 21개국의 글로벌 네트워크를
                <br /> 구축하고 서비스를 지원하고 있습니다
              </p>
            </div>
          </div>
          <div className="pfList">
            <div className="pfImgBox">
              <img src={maBg} alt="배경 이미지" />
            </div>
            <div className="pfConBox">
              <div className="pfIconBox">
                <img src={maIcon} alt="m&a 아이콘" />
              </div>
              <span className="pfTitle">해외진출</span>
              <CountUp className="pfCount" end={1051} duration={2} enableScrollSpy={true} />
              <p className="pfDes">
                ZETA PLAN의 노하우로 <br />
                기업 성장과 발전 가치를 극대화할 수<br /> 있도록 컨설팅하고 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
