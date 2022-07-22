import React from 'react';
import './../../styles/lang/LangEng.scss';
import MainBanner from '../main/MainBanner';
import langTecImg from '../../img/eng_cn/eng_cn_focus.png';
import langTecChinaMap from '../../img/eng_cn/eng_cn_china.png';
import langTecMap from '../../img/eng_cn/eng_cn_map.png';
import langTecGlobal from '../../img/eng_cn/eng_cn_minibanner.png';
import PublCli from '../../img/eng_cn/eng_cn_public.png';
import ComlCli from '../../img/eng_cn/eng_cn_company.png';
import UniCli from '../../img/eng_cn/eng_cn_univercity.png';

const LangEng = () => {
  return (
    <div>
      <MainBanner />
      <div className="langAbout">
        <div className="langAboutCon">
          <p className="langAboutT">About</p>
          <p className="langAboutC">
            Zeta Plan Investment Co, Ltd. was established in 2006 as a investment consulting company specializing in
            Venture Investment, Technology Transfer, M&A, Management Consulting, and support services perform overseas.
          </p>
          <p className="langAboutC">
            South Korea’s Bio, IT, Environment, Energy, Medical, High-tech Machinery, Aerospace, Agri-Food, Marine
            Fisheries, Media, Content, Automobiles, Semiconductors with early-stage investments in high technology,
            advanced manufacturing technology commercialization, technology transfer the work is carried out
            systematically as China, Asia, Europe and the United States.
          </p>
          <p className="langAboutC">
            Particularly Zeta Plan Investment Co, Ltd. Korea Venture Business Association 15,000 companies, Technology
            Small Business Innovation Association 15,000 companies, Industry and Technology Development Association
            30,000 companies, owned concluded an agreement for the excellent technical support global technology
            commercialization and technology transfer services promoting.
          </p>
        </div>
      </div>
      <div className="langTec">
        <div className="langTecBox">
          <p className="langTecTitle">Focus on Technology Transfer</p>
          <div className="langTecContent">
            <div className="langTecImgBox">
              <img src={langTecImg} alt="Technology Img" />
            </div>
            <p className="langTecContentC">
              Zeta Plan Investment Co, Ltd. has been a focus on promoting technology transfer business between Korea and
              China.
            </p>
            <p className="langTecContentC">
              South Korea and China in the demand for technology and supply technology to perform technology transfer
              and identify the role negotiation channels between the two countries.
            </p>
            <p className="langTecContentT">Global Technology Transfer Network China and World Wide</p>
            <div className="langTecChBox">
              <img className="langTecChMap" src={langTecChinaMap} alt="Technology China Map" />
              <p className="langTecContentC">
                Zeta Plan Investment Co, Ltd. is to form a global Technology Transfer network to 15 countries. And a
                global technology transfer, especially Beijing, Tianjin, Shanghai, Qingdao, Zhejiang, Wenzhou and Hong
                Kong, has established a cooperative network for technology Transfer.
              </p>
            </div>
            <img className="langTecMap" src={langTecMap} alt="" />
          </div>
        </div>
      </div>
      <div className="langTecGlobalImgBox">
        <img src={langTecGlobal} alt="" />
        <span>Global</span>
      </div>
      <div className="langTecOC">
        <div className="langTecOCBox">
          <div className="langTecOCtitle">
            <p>Our Clients</p>
          </div>
          <div className="langTecConT">
            <p>Public Clients</p>
          </div>
          <div className="langTecOCImg">
            <img src={PublCli} alt="" />
          </div>
          <div className="langTecConT">
            <p>Company Clients</p>
          </div>
          <div className="langTecOCImg">
            <img src={ComlCli} alt="" />
          </div>
          <div className="langTecConT">
            <p>University Clients</p>
          </div>
          <div className="langTecOCImg">
            <img src={UniCli} alt="" />
          </div>
        </div>
      </div>
      <div className="langBA">
        <div className="langBAtitle">
          <p>Business Area</p>
        </div>
      </div>
    </div>
  );
};

export default LangEng;
