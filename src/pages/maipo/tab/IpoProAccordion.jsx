import React from 'react';
import '../../../styles/maipo/MaIpoAccordion.scss';

const MaIpoAccordion = ({ title, active, setActive, content }) => {
  return (
    <div className="ipoAcco">
      <div className={(active === title ? 'on' : '') + 'ipoAccoHeading'} onClick={() => setActive(title)}>
        <div className="ipoContainer">
          <p>{title}</p>
          <span className={(active === title ? 'up' : '') + 'ipoAccoBtn'}></span>
        </div>
      </div>
      <div className={(active === title ? 'show' : '') + 'ipoAccoContent'}>
        <div className="ipoContainer">
          <p className="ipoAccoTxt">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default MaIpoAccordion;
