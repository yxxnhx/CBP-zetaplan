import React from 'react';
import './../../styles/global/gbAccordion.scss';

const GbAccordion = ({ title, active, setActive, txt }) => {
  return (
    <div className="gbaccordion">
      <div className={(active === title ? 'on' : '') + 'gbaccordionHeading'} onClick={() => setActive(title)}>
        <div className="gbcontainer">
          <p>{title}</p>
          <span className={(active === title ? 'up' : '') + 'gbaccordionBtn'}></span>
        </div>
      </div>
      <div className={(active === title ? 'show' : '') + 'gbaccordionContent'}>
        <div className="gbcontainer">
          <p className="gbaccordionTxt">{txt}</p>
        </div>
      </div>
    </div>
  );
};

export default GbAccordion;
