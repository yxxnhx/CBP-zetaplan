import React from 'react';
import './../../styles/ir/Accordion.scss'

const Accordion = ({title, active, setActive }) => {
  return (
    <div className='accordion'>
      <div className="accordionHeading">
        <div className="container">
          <p>{title}</p>
          <span onClick={() => setActive(title)}>X</span>
        </div>
      </div>
      <div className={(active === title ? 'show' : '') + 'accordionContent' }>
        <div className="container">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, ipsum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, ipsum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, ipsum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, ipsum? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, ipsum?</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
