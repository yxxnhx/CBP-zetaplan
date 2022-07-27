import React from 'react';
import './../../styles/lang/index.scss';
import langTecImg from '../../img/eng_cn/eng_cn_focus.png';
import langTecChinaMap from '../../img/eng_cn/eng_cn_china.png';
import langTecMap from '../../img/eng_cn/eng_cn_map.png';
import langTecGlobal from '../../img/eng_cn/eng_cn_minibanner.png';
import PublCli from '../../img/eng_cn/eng_cn_public@2x.png';
import ComlCli from '../../img/eng_cn/eng_cn_company@2x.png';
import UniCli from '../../img/eng_cn/eng_cn_univercity@2x.png';
import LangCnAcco from './LangCnAcco';
import { Link } from 'react-router-dom';
import MainBannerCn from '../main/MainBannerCn';

const LangEng = () => {
  return (
    <div>
      <MainBannerCn />
      <div className="langAbout">
        <div className="langAboutCon">
          <h2 className="langAboutT">About</h2>
          <div className="langAboutC">
            <p>Zeta Plan Investment株式会社成立于2006年，是专门提供风险投资、技术转让、M&A、经营咨询，及海外支持服务的投资咨询公司。</p>
            <p>
            中国、亚洲、欧洲和美国正在对大韩民国的生物、IT、环境、能源、医疗、高科技机械、航空、农产品、水产品、媒体、内容、汽车、半导体、高新技术、高级制造技术的商业化、技术转让具体实施投资。
            </p>
            <p>
            尤其是，Zeta Plan Investment株式会社与风险事业协会的15,000家公司、中小企业创新协会的15,000家公司、产业及技术开发协会的30,000家公司签订了促进优质技术支持、世界技术商业化、技术转让服务的合同。
            </p>
            
          </div>
        </div>
      </div>
      <div className="langTec">
        <div className="langTecBox">
          <p className="langTecTitle">技术转让的重点</p>
          <div className="langTecContent">
            <div className="langTecImgBox">
              <img src={langTecImg} alt="Technology Img" />
            </div>
            <p className="langTecContentC">
            Zeta Plan Investment株式会社将业务重点放在促进韩国与中国之间的技术转让上。
            </p>
            <p className="langTecContentC">
            向需要技术的大韩民国和中国的企业供应可进行技术转让的技术，扮演着两国之间协商渠道的角色。
            </p>
            <p className="langTecContentT">以中国和全球为中心的国际技术转让网络</p>
            <div className="langTecChBox">
              <img className="langTecChMap" src={langTecChinaMap} alt="Technology China Map" />
              <p className="langTecContentC">
              Zeta Plan Investment株式会社在15个国家构筑了国际技术转让网络。<br />国际技术转让，特别是，在北京、天津、上海、青岛、浙江、温州及香港构筑了技术转让的合作网络。
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
          <div className="langTecOCtitle">本公司客户</div>
          <div className="langTecContent">
            <h2 className='langTecContentTitle'>公共机构</h2>
            <div className="langTecContentImg">
              <img src={PublCli} alt="公共机构" />
            </div>
          </div>
          <div className="langTecContent">
            <h2 className='langTecContentTitle'>企业客户</h2>
            <div className="langTecContentImg">
              <img src={ComlCli} alt="企业客户" />
            </div>
          </div>
          <div className="langTecContent">
            <h2 className='langTecContentTitle'>大学客户</h2>
            <div className="langTecContentImg">
              <img src={UniCli} alt="大学客户" />
            </div>
          </div>  
        </div>
      </div>
      <div className="langBA">
        <div className="langTecOCtitle">业务领域</div>
        <LangCnAcco />
      </div>
      <div className='langIntro'>
        <div className="langIntroTitleCon">
          <span className="langTitleBlue">global</span>
          <span className="langTitleBlack">zeta plan investment</span>
        </div>
        <div className="langIntroContentBox">
          <p className="langIntroCompanyDes">
          Zeta Plen的愿景是"为全球所有企业的启动和稳定提供咨询解决方案。「服务正在提供中。
          </p>
          <div className="langIntroLinkBox">
            <div className="langIntroCompanyLink">
              <Link to={'/zeta'}>公司名称</Link>
            </div>
            <div className="langIntroEstablishmentLink">
              <Link to={'/zeta-map'}>公司地址</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="langLocationArea">
        <div className="langLocationTitle">公司地址</div>
        <div className="langLocationView"></div>
        <div className="langLocationContent">
          <div className="langLocationH">
            <div className="langLocationHeadT">总部<span>www.zetaplan.com</span></div>
            <div className="langLocationText"><span>地址</span>:  大韩民国，首尔衿川区，Digital路130，NAMSUNG PLAZA #1210</div>
            <div className="langLocationText"><span>电话</span>: +82-538-4801 </div>
            <div className="langLocationText"><span>传真</span>: +82-6008-4779</div>
            <div className="langLocationText"><span>邮箱</span>: zetabiz@zetaplan.com</div>
          </div>
          <div className="langLocationH">
            <div className="langLocationHeadT">中国分公司</div>
            <div className="langLocationText"><span>地址</span>中国北京市西城区黄寺大街23号6层
            </div>
            <div className="langLocationText"><span>电话</span>18721162574</div>
            <div className="langLocationText"><span>邮箱</span>yytak2000@hanmail.net</div>
          </div>
          <div className="langLocationH">
            <div className="langLocationHeadT">越南分公司</div>
            <div className="langLocationText"><span>地址</span>No 241, Tang Thiet Giap Apt, 110 Hoang Quoc
          Viet Street, Cau Giay District, Hanoi, VietNam</div>
            <div className="langLocationText"><span>电话</span>+84-4-6281-7522 </div>
            <div className="langLocationText"><span>手机</span>+82-10-3347-4350
            </div>
            <div className="langLocationText"><span>传真</span>+84-91-302-4677</div>
            <div className="langLocationText"><span>邮箱</span>yytak2000@naver.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LangEng;
