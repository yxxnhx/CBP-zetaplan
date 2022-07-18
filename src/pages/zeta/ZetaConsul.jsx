import React from 'react';
import {useState,useEffect} from 'react';
import './../../styles/zeta/zetaConsul.scss';
import ztCsDtJs from './../../db/serviceField.json';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SubBanner from '../../components/common/SubBanner/index';
import subBg from '../../img/zeta/zeta_sub_bg@2x.png';

const ZetaConsul = () => {
  const [ztCsDt,setztCsData]=useState([]);

  useEffect(()=>{
    setztCsData(ztCsDtJs);
    AOS.init();
  },[]);

  const title = 'ZETA PLAN\'S  CONSULTING';

  return (
    <div className='ztCsBox'>
      <SubBanner title={title} img={subBg} />
      <div className="ztInner">
        <h2 className='ztTitle'>
          컨설팅 부문
        </h2>
        <div className="ztCsTitle" data-aos="fade-up"  data-aos-duration="2000">
          <h3 className='ztCsTitleBig'>
            ZETA PLAN만의 전문적인 컨설팅 
          </h3>
          <p className='ztCsTitleSub'>
            IT/바이오/기계/화학 등 다양한 분야의 전문가들이 체계적인 컨설팅 서비스를 제공합니다.
          </p> 
        </div>
        <div className="ztCsDataBox">
          {
            ztCsDt.map(function(data,i){
              return(
                <div className='ztCsData' key={data.id}>
                  <div className="ztCsDataTitle">
                    <p className='ztCsDataNum' data-aos="fade-right"
                      data-aos-offset="300" data-aos-easing="ease-in-sine">
                      {i<9?`0${ztCsDt[i].id+1}`:`${ztCsDt[i].id+1}`}
                    </p>
                    <p className='ztCsDataSub' data-aos="fade-right"
                      data-aos-offset="300" data-aos-easing="ease-in-sine">
                      {ztCsDt[i].field}
                    </p>
                  </div>
                  <div className='ztCsDataCont' dangerouslySetInnerHTML={{__html:ztCsDt[i].content}}data-aos="fade-left"
                    data-aos-offset="300" data-aos-easing="ease-in-sine">
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default ZetaConsul;