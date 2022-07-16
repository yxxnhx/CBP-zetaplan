import React from 'react';
import '../../../styles/maipo/MaIpoAccordion.scss';

const MaIpoAccordion = ({ title, active, setActive, content }) => {
  return (
    <div className="maAcco">
      <div className={(active === title ? 'on' : '') + 'maAccoHeading'} onClick={() => setActive(title)}>
        <div className="maContainer">
          <p>{title}</p>
          <span className={(active === title ? 'up' : '') + 'maAccoBtn'}></span>
        </div>
      </div>
      <div className={(active === title ? 'show' : '') + 'maAccoContent'}>
        <div className="maContainer">
          <p className="maAccoTxt">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default MaIpoAccordion;
