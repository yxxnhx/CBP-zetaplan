import React from 'react';
import {useState, useEffect,useRef} from 'react';
import ztHistoryDt from './../../db/historyList.json';
import './../../styles/zeta/zetaHistory.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SubBanner from '../../components/common/SubBanner/index';
import subBg from '../../img/zeta/zeta_sub_bg@2x.png';

const ZetaHistory = () => {
  const [ztHisDt,setZtHisDt]=useState([]);
  const refs = useRef([]);
  const titleRefs= useRef([]);
  useEffect(()=>{
    setZtHisDt(ztHistoryDt);
    AOS.init();
  },[]);

  const title = '지속적인 도전으로 미래를 만들어낸<br /> ZETA PLAN HISTORY';

  const oneDepth='ZETA';
  const oneDepthLink='/zeta';
  const twoDepth='연혁';
  const twoDepthLink='/zeta-history';
  const linkActive='twoDepth';

  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    refs.current.forEach((ele,idx)=> {
      let valueTop =  parseInt(window.pageYOffset + ele.getBoundingClientRect().top ) ; 
      let valueBottom = parseInt( window.pageYOffset + ele.getBoundingClientRect().bottom); 
      let titleRefName = titleRefs.current[idx]
      if(idx===0){
        titleRefName.className=0<=scrollPosition&&scrollPosition<valueBottom-100 ? 'ztHisTitleLiOn':'ztHisTitleLi' ;
      }else{
        titleRefName.className=valueTop<scrollPosition+100&&scrollPosition<valueBottom-100 ? 'ztHisTitleLiOn':'ztHisTitleLi' ;
      };
    });
  };

  useEffect(()=>{
    window.addEventListener('scroll', updateScroll);
    return () => {
      window.removeEventListener('scroll', updateScroll);
    };
  }, [scrollPosition]);

  const handleClick = (i) => {
    refs.current[i].scrollIntoView({ behavior: 'smooth'});
  };
    
  const ztHisLists=[
    {
      'title':'first-tab', 
      'subTitle':'2018 - 현재'
    },
    {
      'title': 'second-tab',
      'subTitle': '2015 - 2017'
    },
    {
      'title': 'third-tab',
      'subTitle': '2011 - 2014'
    },
    {
      'title': 'fourth-tab',
      'subTitle': '2006 - 2010'
    }
  ];

  return (
    <div className='ztHisBox'>
      <SubBanner title={title} img={subBg} oneDepth={oneDepth} oneDepthLink={oneDepthLink} twoDepth={twoDepth} twoDepthLink={twoDepthLink} linkActive={linkActive}/>
      <div className="ztInner" >
        <h2 className='ztTitle'>
          연혁
        </h2>
        <div className='ztHisContent'>
          <ul className="ztHisTitle" >
            <li className='ztHisTitleOrBox'>
              <span className='ztHisTitleOr'>제타플랜의 시작으로</span>
              <span className='ztHisTitleOr'> 한국 기업 컨설팅의</span>
            </li>
            <li onClick={() => handleClick(0)} ref={(ref)=>(titleRefs.current[0] = ref)} className='ztHisTitleLiOn'>미래를 시작하다.</li>
            <li onClick={() => handleClick(1)} ref={(ref)=>(titleRefs.current[1] = ref)} className='ztHisTitleLi'>뿌리를 통해 성장하다.</li>
            <li onClick={() => handleClick(2)} ref={(ref)=>(titleRefs.current[2] = ref)} className='ztHisTitleLi'>무한발전을 하다</li>
            <li onClick={() => handleClick(3)} ref={(ref)=>(titleRefs.current[3] = ref)}  className='ztHisTitleLi'>기반을 다지다</li>
          </ul>
          <div className="ztHisTxtBox" data-aos="fade-up" data-aos-duration="3000">
            <div className='ztHisTxt'>
              {
                ztHisLists.map(function (titleDt, i) {
                  return (
                    <div className='ztHisTxtsBoxs' key={titleDt.title} ref={(ref) => (refs.current[i] = ref)}>
                      <div className='ztHisTxtCotain'>
                        <p className='ztHisTxtsTitle' >
                          {titleDt.subTitle}
                        </p>
                        <div className='ztHisTxtsTotal'>
                          {
                            ztHisDt[ztHisLists[i].title] && ztHisDt[ztHisLists[i].title].map(function (data, i) {
                              return (
                                <div className='ztHisTexts' key={data.id}>
                                  <p className='ztHisTxtYear'>
                                    {data.year}
                                  </p>
                                  <div className='ztHisListsTxt'>
                                    {
                                      data.list.map(function (datas, i) {
                                        return (
                                          <p className='ztHisListTxt' key={datas}>{datas}</p>
                                        )
                                      })
                                    }
                                  </div>
                                </div>
                              )
                            })
                          }
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZetaHistory;