import React from 'react';
import './../../../styles/consul/index.scss'
import { useState } from 'react';
import ConsulModal from './ConsulModal';

const Consulting = () => {
  const [consulOpen, setConsulOpen] = useState(false);

  const openConsul = () => {
    setConsulOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closeConsul = () => {
    setConsulOpen(false);
    document.body.style.overflow = 'unset'
  }

  return (
    <div>
      <div className="consulBtnArea">
        <button className="consulBtn">
          <img src={require('./../../../img/bg/file-pen-solid.png')} alt='컨설팅 신청'/>
        </button>
        <button className="consulDimmed" onClick={openConsul}>
          <img src={require('./../../../img/bg/file-pen-solid.png')} alt='컨설팅 신청'/>
          <p>컨설팅 신청하기</p>
        </button>
        <ConsulModal open={consulOpen} close={closeConsul}/>
      </div>
    </div>
  );
};

export default Consulting;