import React from 'react';
import './../../styles/lang/index.scss';
import MainBanner from '../main/MainBanner';
import langTecImg from '../../img/eng_cn/eng_cn_focus.png';
import langTecChinaMap from '../../img/eng_cn/eng_cn_china.png';
import langTecMap from '../../img/eng_cn/eng_cn_map.png';
import langTecGlobal from '../../img/eng_cn/eng_cn_minibanner.png';
import PublCli from '../../img/eng_cn/eng_cn_public@2x.png';
import ComlCli from '../../img/eng_cn/eng_cn_company@2x.png';
import UniCli from '../../img/eng_cn/eng_cn_univercity@2x.png';
import LangEngAcco from './LangEngAcco';
import { Link } from 'react-router-dom';
import ZetaKrMap from '../zeta/zetaMap/ZetaKrMap';

const LangEng = () => {
  return (
    <div>
      <MainBanner />
      <div className="langAbout">
        <div className="langAboutCon">
          <h2 className="langAboutT">About</h2>
          <div className="langAboutC">
            <p>Zeta Plan Investment Co, Ltd. was established in 2006 as a investment consulting company specializing in
            Venture Investment, Technology Transfer, M&A, Management Consulting, and support services perform overseas.</p>
            <p>
              South Korea’s Bio, IT, Environment, Energy, Medical, High-tech Machinery, Aerospace, Agri-Food, Marine
              Fisheries, Media, Content, Automobiles, Semiconductors with early-stage investments in high technology,
              advanced manufacturing technology commercialization, technology transfer the work is carried out
              systematically as China, Asia, Europe and the United States.
            </p>
            <p>
              Particularly Zeta Plan Investment Co, Ltd. Korea Venture Business Association 15,000 companies, Technology
              Small Business Innovation Association 15,000 companies, Industry and Technology Development Association
              30,000 companies, owned concluded an agreement for the excellent technical support global technology
              commercialization and technology transfer services promoting.
            </p>
            
          </div>
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
        <div className="langTecOCBox clientArea">
          <div className="langTecOCtitle">Our Clients</div>
          <div className="langTecContent">
            <h2 className='langTecContentTitle'>Public Clients</h2>
            <div className="langTecContentImg">
              <img src={PublCli} alt="Public Clients" />
            </div>
          </div>
          <div className="langTecContent">
            <h2 className='langTecContentTitle'>Company Clients</h2>
            <div className="langTecContentImg">
              <img src={ComlCli} alt="Company Clients" />
            </div>
          </div>
          <div className="langTecContent">
            <h2 className='langTecContentTitle'>University Clients</h2>
            <div className="langTecContentImg">
              <img src={UniCli} alt="University Clients" />
            </div>
          </div>  
        </div>
      </div>
      <div className="langBA">
        <div className="langTecOCtitle">Business Area</div>
        <LangEngAcco />
      </div>
      <div className='langIntro'>
        <div className="langIntroTitleCon">
          <span className="langTitleBlue">global</span>
          <span className="langTitleBlack">zeta plan investment</span>
        </div>
        <div className="langIntroContentBox">
          <p className="langIntroCompanyDes">
          ZetaPlen has a vision of "providing a consulting solution for the start and stability of all companies on the planet."Service is being provided.
          </p>
          <div className="langIntroLinkBox">
            <div className="langIntroCompanyLink">
              <Link to={'/zeta'}>Company</Link>
            </div>
            <div className="langIntroEstablishmentLink">
              <Link to={''}>Location</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="langMajorArea">
        <div className="langMajorTitle">Major Performance <br />- Technology Transfer</div>
        <div className="langMajorSubTitle">TECH TRANSFER CASE</div>
        <table className='langMajorTable'>
          <thead>
            <tr className='langMajoTablerTitle'>
              <th>Technology Title</th>
              <th>Deal Year</th>
              <th>Deal Condition</th>
              <th>Demand Country</th>
              <th>Korea Supply Company</th>
            </tr>
          </thead>
          <tbody>
            <tr className='langMajorContent'>
              <td>Solar Energy Tech</td>
              <td>2009</td>
              <td>1,000,000USD</td>
              <td>China</td>
              <td>SUNTECH</td>
            </tr>
            <tr className='langMajorContent'>
              <td>Reducing Bovine Mastitis Derived Tech</td>
              <td>2010</td>
              <td>1,000,000USD</td>
              <td>China</td>
              <td>KOREA NEWPHARM</td>
            </tr>
            <tr className='langMajorContent'>
              <td>Water Heat Pump Tech</td>
              <td>2010</td>
              <td>500,000USD</td>
              <td>China</td>
              <td>TEMPA</td>
            </tr>
            <tr className='langMajorContent'>
              <td>Fan Heater for Agri Tech</td>
              <td>2010</td>
              <td>80,000USD</td>
              <td>China</td>
              <td>OVIL</td>
            </tr>
            <tr className='langMajorContent'>
              <td>Nano Particle Tech</td>
              <td>2010</td>
              <td>3,000,000USD</td>
              <td>China</td>
              <td>MICRO MORETECH</td>
            </tr>
            <tr className='langMajorContent'>
              <td>Chemical Tech for LNG Plant</td>
              <td>2011</td>
              <td>1,000,000USD<br />+2.5%(5Year)</td>
              <td>China</td>
              <td>TIC</td>
            </tr>
            <tr className='langMajorContent'>
              <td>Echo Soil Solidifying agent Tech</td>
              <td>2011</td>
              <td>1,000,000USD<br />+J/V 30%</td>
              <td>China</td>
              <td>TNG</td>
            </tr>
            <tr className='langMajorContent'>
              <td>Light Control Control Tech by Zigbee</td>
              <td>2012</td>
              <td>2,500,000USD<br />+2.0%(5Year)</td>
              <td>China</td>
              <td>Pearl Energy</td>
            </tr>
            <tr className='langMajorContent'>
              <td>RIA  SW Technology</td>
              <td>2012</td>
              <td>1,000,000USD<br />+3.0%(3year)</td>
              <td>China</td>
              <td>SHIFTCOMM</td>
            </tr>
            <tr className='langMajorContent'>
              <td>Multiboard Tech for Control Center</td>
              <td>2013</td>
              <td>3,000,000USD<br />+3.0%(1year)</td>
              <td>China</td>
              <td>T1SYSTEMS</td>
            </tr>
            <tr className='langMajorContent'>
              <td>Character Animation Copyright &amp; Tech</td>
              <td>2013</td>
              <td>1,500,000USD<br />+3.0%(6Year)</td>
              <td>China</td>
              <td>LASKALAND</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="langLocationArea">
        <div className="langLocationTitle">Location</div>
        <ZetaKrMap />
        <div className="langLocationContent">
          <div className="langLocationH">
            <div className="langLocationHeadT">Head Quarter <span>www.zetaplan.com</span></div>
            <div className="langLocationText"><span>Add</span>: Namsung Plaza #1210 130, Digital-ro, Geumcheon-gu, Seoul, Korea</div>
            <div className="langLocationText"><span>Tel</span>: +82-538-4801 </div>
            <div className="langLocationText"><span>Fax</span>: +82-6008-4779</div>
            <div className="langLocationText"><span>Mail</span>: zetabiz@zetaplan.com</div>
          </div>
          <div className="langLocationH">
            <div className="langLocationHeadT">China Branch</div>
            <div className="langLocationText"><span>Add</span>6F, Beiguang Building, No.23, Huangsi Street, 
           Xicheng District, Beijing, China
            </div>
            <div className="langLocationText"><span>Tel</span>+86-10-6566-9965(601)</div>
            <div className="langLocationText"><span>Mobile</span>+82-10-3347-4350</div>
            <div className="langLocationText"><span>Fax</span>+86-10-8527-1272</div>
            <div className="langLocationText"><span>Mail</span>yytak2000@hanmail.net</div>
          </div>
          <div className="langLocationH">
            <div className="langLocationHeadT">Vietnam Branch</div>
            <div className="langLocationText"><span>Add</span>No 241, Tang Thiet Giap Apt, 110 Hoang Quoc
          Viet Street, Cau Giay District, Hanoi, VietNam</div>
            <div className="langLocationText"><span>Tel</span>+84-4-6281-7522 </div>
            <div className="langLocationText"><span>Mobile</span>+82-10-3347-4350
            </div>
            <div className="langLocationText"><span>Fax</span>+84-91-302-4677</div>
            <div className="langLocationText"><span>Mail</span>yytak2000@naver.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LangEng;
