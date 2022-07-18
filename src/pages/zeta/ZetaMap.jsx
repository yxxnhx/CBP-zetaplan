import React from 'react';
import {useState,useEffect} from 'react';
import './../../styles/zeta/zetaMap.scss';
import ztMapList from './../../db/ztMapList.json';
import ZetaKrMap from './zetaMap/ZetaKrMap';
import ZetaCnMap from './zetaMap/ZetaCnMap';
import ZetaVtmMap from './zetaMap/ZetaVtmMap';
import ZetaIndoMap from './zetaMap/ZetaIndoMap';
import ZetaHnMap from './zetaMap/ZetaHnMap';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import SubBanner from '../../components/common/SubBanner/index';
import subBg from '../../img/zeta/zeta_sub_bg@2x.png';

const ZetaMap = () => {
  const [ztMapDtLi,setZtMapDtLi]=useState([]);

  useEffect(()=>{
    setZtMapDtLi(ztMapList);
    AOS.init();
  },[])

  const [ztMapView,setZtMapView]=useState(0);

  const title = 'ZETAPLAN INVEST<br /> 오신 걸 환영합니다.';

  return (
    <div className='ztMapBox'>
      <SubBanner title={title} img={subBg} />
      <div className="ztInner">
        <h2 className='ztTitle ztMapTitle'data-aos="fade-up"  data-aos-duration="2000">
          오시는 길
        </h2>
        <div className='ztMapDtBox'>
          <div className='ztMapBtnBox'>
            {
              ztMapDtLi.map(function(data,i){
                return(
                  <button onClick={()=>setZtMapView(i)} className={ztMapView===i?'ztMapBtn ztMapBtnOn':'ztMapBtn'}  key={data.id}>{ztMapDtLi[i].title}</button>
                )
              })
            }
          </div>

          {
            ztMapDtLi.map(function(data,i){
              return(
                <div key={data.id} className={ztMapView===i?'ztMapContent ztMapOn':'ztMapContent ztMapOff'}>
                  <div className='ztMapLook'>
                    {i===0?<ZetaKrMap />:null}
                  </div>
                  <div>
                    {i===1?<ZetaCnMap />:null}
                  </div>
                  <div>
                    {i===2?<ZetaVtmMap />:null}
                  </div>
                  <div>
                    {i===3?<ZetaIndoMap />:null}
                  </div>
                  <div>
                    {i===4?<ZetaHnMap />:null}
                  </div>
                  <ul className='ztMapGuide'>
                    <li className={ztMapDtLi[i].address===''?'ztMapNon':'ztMapAddr'}>
                      <span className='ztMapIcon'>아이콘</span>
                      <span className='ztMapStitle'>Address</span>
                      <span>{ztMapDtLi[i].address}</span>
                    </li>
                    <li className={ztMapDtLi[i].tel===''?'ztMapNon':'ztMapTel'}>
                      <span className='ztMapIcon'>아이콘</span>
                      <span className='ztMapStitle'>Tel</span>
                      <span>{ztMapDtLi[i].tel}</span>
                    </li>
                    <li className={ztMapDtLi[i].fax===''?'ztMapNon':'ztMapFax'}>
                      <span className='ztMapIcon'>아이콘</span>
                      <span className='ztMapStitle'>Fax</span>
                      <span>{ztMapDtLi[i].fax}</span>
                    </li>
                  </ul>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default ZetaMap;