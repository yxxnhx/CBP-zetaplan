import React from 'react';
import './../../styles/lang/index.scss';
import BusConsul from './../../img/eng_cn/eng_cn_business@2x.png'
import { useState } from 'react';


const LangAcco = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  const cnData = [
    {
      id: 1,
      title: '技术转让',
      content : (
        <div className="langContentBox">
          <div className="langContentText">
            <p>未来的技术转让服务不仅要顺应时代趋势展开竞争和实现超越，还是对韩国的商业化项目产生影响的因素。虽然比起寻找及利用合适的外部技术，给现有的人力分配任务会带来更快效果，但这种方法会浪费时间和资源，最终导致失去优先权。 </p>
            <p>为了缓解这种紧张状态，Zeta Plan Investment株式会社正在运营专门负责技术转让业务的业界首创的专家咨询网络。</p>
            <p>Zeta Plan Investment株式会社基于特定技术的需要，凭借下面列出的专门技术，会帮您量身定制为贵公司提供支持的专家团队。</p>
          </div>
          <div className="langContentTableArea">
            <table className="langContentTable">
              <thead>
                <tr>
                  <th className='tableTitle'>重点</th>
                  <th className='tableTitle'>说明</th>
                  <th className='tableTitle'>咨询专业知识</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>项目开发</td>
                  <td>丰富的经验、对选择权的知识、让项目实现成功的战略</td>
                  <td>
                    <ul className='langContentList'>
                      <li>•  商业化过程工程</li>
                      <li>•  技术研究/监督(Audit)</li>
                      <li>•  办公室系统</li>
                      <li>•  缺口补助(Gap Funding)</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>营销</td>
                  <td>为使合作伙伴和大众参与到贵公司的项目和新兴创意事业中来运用最前沿的营销法</td>
                  <td>
                    <ul className='langContentList'>
                      <li>•  战略营销</li>
                      <li>•  术营销资料</li>
                      <li>•  社交媒体</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>建立关系</td>
                  <td>通过本公司专家的现有网络接触并扩大贵公司的影响力，或开发鼓励建立关系的项目</td>
                  <td>
                    <ul className='langContentList'>
                      <li>•  发展内部利益关系人</li>
                      <li>•  商业/投资合作伙伴网络化</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: '国际风险俱乐部',
      content: (
        <div className="langContentBox">
          <div className="langContentText">
            <p>Zeta Plan Investment株式会社是共享相同前景的内行风险资本家精英团队打造的高级风险资本。本公司正在为成为拥有投资力量、出色的业绩和国际专门知识，并与其它VC（风险资本）有差别的国际Premium风险资本而全力以赴。</p>
            <p>本公司首先在韩国构建风险资本的成功模式之后，下一步的目标是在亚洲成为主导型风险资本。</p>
            <p>分阶段投资</p>
            <ul>通过成长阶段针对性资金支持，将企业价值和投资利润最大化。
              <li>– 初期：拥有创新技术和创意想法的企业家</li>
              <li>– 成长：技术导向的成长型企业</li>
              <li>– PE：可创出协同效应的企业</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: '国际M&A合作伙伴',
      content: (
        <div className="langContentBox">
          <div className="langContentText">
            <p>Zeta Plan Investment株式会社专门从事收购中间市场的业务，对公司所有人采取慎重且敏感的个人接触方法。本公司还奠定国际地位，定期了解掌握全球目标。</p>
            <p>Zeta Plan Investment株式会社从定义战略开始到交易成功结束为止，在收购的所有阶段将会为贵公司提供咨询服务。本公司了解和评估潜在收购目标后，与公司所有人接触提供实际调查和价值评估，在最终合同协商过程中密切地协助贵公司。Zeta Plan M&A咨询团队拥有深度的行业专门知识，保证所有M&A专家对业界、行为者、价值评估及潜在机会拥有丰厚深度的知识。</p>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: '业务咨询',
      content: (
        <div className="langContentBox">
          <div className="langContentText">
            <div className="langContentImg">
              <img src={BusConsul} alt="Business Consulting" />
            </div>
            <p>Zeta Plan Investment株式会社的经营咨询服务将重点放在本公司客户的最重要热点和机会：在所有业界和地区进行营销、组织、运营、技术、变化、数字、高级分析和收购&合并上。 </p>
            <p>Zeta Plan Investment株式会社虽然引进了深度实用性强的专业知识，但最重要的是以整体论方法而闻名。本公司通过超越所有组织间的界限捕获价值，将部分总合进行优化，而非个别碎片，力证了上升效果（multiplier effect）。</p>
          </div>
        </div>

      )
    },
  ]
  return (
    <div>
      <div className="langAccoWrapper">
        <div className="langAccordion">
          {cnData.map((item, i) => (
            <div className="langBusinessItem" key={i}>
              <div className={selected === i ? 'langBtn on' : 'langBtn'} onClick={() => toggle(i)}>
                <h2 className="langTitle">{item.title}</h2>
                <div>{selected === i ? <div className="langTopBtn"></div> : <div className="langUnderBtn"></div>}</div>
              </div>
              <div className={selected === i ? 'langContent show' : 'langContent'}>{item.content}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default LangAcco;
