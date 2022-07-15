import React from 'react';
import './../../styles/ir/Accordion.scss';

const Accordion = ({ title, active, setActive, txt }) => {
  return (
    <div className="accordion">
      <div className={(active === title ? 'on' : '') + 'accordionHeading'} onClick={() => setActive(title)}>
        <div className="container">
          <p>{title}</p>
          <span className={(active === title ? 'up' : '') + 'accordionBtn'}></span>
        </div>
      </div>
      <div className={(active === title ? 'show' : '') + 'accordionContent'}>
        <div className="container">
          <p className="accordionTxt">{txt}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
