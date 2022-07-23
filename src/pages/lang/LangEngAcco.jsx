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

  const engData = [
    {
      id: 1,
      title: 'Technology Transfer',
      content : (
        <div className="langContentBox">
          <div className="langContentText">
            <p>Technology Transfer service of the future must evolve to compete and excel in the midst of trends and drivers that are affecting Korea commercialization programs. It is often quicker to assign tasks to existing staff than to locate and leverage the right external skill sets; but, this approach of tens spread operations too thin, wastes time/resources, and detracts from real priorities. </p>
            <p>To relieve this tension, The Zeta Plan Investment co. Ltd. is launching a first-of-its-kind expert consultant network dedicated to fulfilling these tasks for Technology Transfer operation.</p>
            <p>Based on specific technology needs, Zeta Plan Investment co. Ltd. will create a customized team of experts to support you in expertise areas described below:</p>
          </div>
          <div className="langContentTableArea">
            <table className="langContentTable">
              <thead>
                <tr>
                  <th className='tableTitle'>Focus</th>
                  <th className='tableTitle'>Description</th>
                  <th className='tableTitle'>Consultant Expertise</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Program Development</td>
                  <td>The robust experience, knowledge of options, and strategies to set your program up for success.</td>
                  <td>
                    <ul className='langContentList'>
                      <li>•  Commercialization Process Engineering</li>
                      <li>•  Technology Review/Audit</li>
                      <li>•  Office Systems</li>
                      <li>•  Gap Funding</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Marketing</td>
                  <td>Leverage leading marketing tactics to engage partners and the public in your program and promising innovations.</td>
                  <td>
                    <ul className='langContentList'>
                      <li>•  Strategic Marketing</li>
                      <li>•  Technology Marketing Material</li>
                      <li>•  Social Media</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Relationship-building</td>
                  <td>Develop programs to encourage relationship building or rapidly expand your reach and access through our experts’ existing networks.</td>
                  <td>
                    <ul className='langContentList'>
                      <li>•  Internal Stakeholder Development</li>
                      <li>•  Commercial/Investment Partner Networking</li>
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
      title: 'International Venture Club',
      content: (
        <div className="langContentBox">
          <div className="langContentText">
            <p>Zeta Plan Investment Co, Ltd. is an advanced venture capital founded by an elite team of experienced venture capitalists who share the same vision. We strive to become a global independent premier venture capital differentiated from the other VCs with its investment capabilities, outstanding performance, and global expertise. </p>
            <p>Our goal is to build a success model as a venture capital in Korea first, and then to become a leading venture capital in Asia.</p>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: 'Global M&A Partners',
      content: (
        <div className="langContentBox">
          <div className="langContentText">
            <p>Zeta Plan Investment Co. Ltd. specialize in mid-market acquisitions, which means we can often make a personal approach \to company owners discreetly and sensitively. We also have a global footprint and we regularly identify targets around the world.</p>
            <p>Zeta Plan Investment Co. Ltd. will advise you at all stages of an acquisition, from defining your strategy through to successfully closing the deal. We will identify and evaluate potential acquisition targets, approach the owners, assist on due diligence and valuation, and work closely with you through the final contractual negotiations and Zeta Plan M&A teams of advisors have deep industry expertise and we ensure that every M&A professional possesses a detailed knowledge of the industry, its players, valuations and potential opportunities.</p>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: 'Business Consulting',
      content: (
        <div className="langContentBox">
          <div className="langContentText">
            <div className="langContentImg">
              <img src={BusConsul} alt="Business Consulting" />
            </div>
            <p>Zeta Plan Investment Co, Ltd. management consulting services focus on our clients’ most critical issues and opportunities : strategy, marketing, organization, operations, technology, transformation, digital, advanced analytics and mergers & acquisitionsS, across all industries and geographies. </p>
            <p>Zeta Plan Investment Co, Ltd. bring deep, functional expertise, but are known for our holistic perspective : we capture value across boundaries and between the silos of any organization and have proven a multiplier effect f rom optimizing the sum of the parts, not just the individual pieces.</p>
          </div>
        </div>

      )
    },
  ]
  return (
    <div>
      <div className="langAccoWrapper">
        <div className="langAccordion">
          {engData.map((item, i) => (
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
