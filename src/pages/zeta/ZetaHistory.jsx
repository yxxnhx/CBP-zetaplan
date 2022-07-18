import React from 'react';
import {useState, useEffect} from 'react';
import ztHistoryDt from './../../db/historyList.json';
import './../../styles/zeta/zetaHistory.scss';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const ZetaHistory = () => {
  const [ztHisDt,setZtHisDt]=useState([]);
  const refs = React.useRef([]);
  const titleRefs0 = React.useRef([]);
  const titleRefs1 = React.useRef([]);
  const titleRefs2 = React.useRef([]);
  const titleRefs3 = React.useRef([]);
  useEffect(()=>{
    setZtHisDt(ztHistoryDt);
    AOS.init();
  },[])

  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop); 
    refs.current.forEach((ele,idx)=> {
      let valueTop =  parseInt(window.pageYOffset + ele.getBoundingClientRect().top ) ; 
      let valueBottom = parseInt( window.pageYOffset + ele.getBoundingClientRect().bottom); 
      setScrollValue( valueTop , valueBottom, ele,idx)
    }) 
    
  }
  const setScrollValue = (valueTop , valueBottom, ele , idx) => {
    console.log(valueTop,valueBottom,scrollPosition)
    titleRefs0.className=valueTop<=scrollPosition&&scrollPosition<=valueBottom ? 'ztHisTitleLiOn':'ztHisTitleLi' ;
    titleRefs1.className=valueTop<=scrollPosition&&scrollPosition<=valueBottom ? 'ztHisTitleLiOn':'ztHisTitleLi' ;
    titleRefs2.className=valueTop<=scrollPosition&&scrollPosition<=valueBottom ? 'ztHisTitleLiOn':'ztHisTitleLi' ;
    titleRefs3.className=valueTop<=scrollPosition&&scrollPosition<=valueBottom ? 'ztHisTitleLiOn':'ztHisTitleLi' ;
  }
  useEffect(()=>{
    window.addEventListener('scroll', updateScroll);
    return () => {
      window.removeEventListener('scroll', updateScroll);
    };
  },[scrollPosition]);



  const handleClick = (i) => {
    refs.current[i].scrollIntoView({ behavior: 'smooth' });
  };
  
  const ztHisLists=[
    {
      'title':'first-tab',
      'subTitle':'2018 - 현재'
    },
    {
      'title':'second-tab',
      'subTitle':'2015 - 2017'
    },
    {
      'title':'third-tab',
      'subTitle':'2011 - 2014'
    },
    {
      'title':'fourth-tab',
      'subTitle':'2006 - 2010'
    }
  ];

 
 
  return (
    <div className='ztHisBox'>
      <div className="ztInner" >
        <h2 className='ztTitle'>
          연혁
        </h2>
        <div className='ztHisContent'>
          <ul className="ztHisTitle" data-aos="fade-up"  data-aos-duration="2500">
            <li className='ztHisTitleOr' data-aos="fade-up"  data-aos-duration="2000">제타플랜의 시작으로<br/> 한국 기업 컨설팅의</li>
            <li className='ztHisTitleOr' data-aos="fade-up"  data-aos-duration="2000">제타플랜의 시작으로<br/> 한국 기업 컨설팅의</li>
            <li onClick={() => handleClick(0)} ref={titleRefs0} className={titleRefs0.className}>미래를 시작하다.</li>
            <li onClick={() => handleClick(1)} ref={titleRefs1} className={titleRefs0.className}>뿌리를 통해 성장하다.</li>
            <li onClick={() => handleClick(2)} ref={titleRefs2} className={titleRefs0.className}>무한발전을 하다</li>
            <li onClick={() => handleClick(3)} ref={titleRefs3} className={titleRefs0.className}>기반을 다지다</li>
            {/*  <li onClick={() => handleClick(0)}  className={0<=scrollPosition&&scrollPosition<=valueBottom ? 'ztHisTitleLiOn':'ztHisTitleLi'}>미래를 시작하다.</li>
            <li onClick={() => handleClick(1)}
              className={valueTop<scrollPosition&&scrollPosition<=valueBottom ?  'ztHisTitleLiOn':'ztHisTitleLi'}>뿌리를 통해 성장하다.</li>
            <li onClick={() => handleClick(2)}  className={valueTop<scrollPosition&&scrollPosition<=valueBottom ?  'ztHisTitleLiOn':'ztHisTitleLi'}>무한발전을 하다.</li>
            <li onClick={() => handleClick(3)}  className={valueBottom<scrollPosition&&scrollPosition?  'ztHisTitleLiOn':'ztHisTitleLi'}>기반을 다지다.</li> */}
          </ul>
          <div className="ztHisTxtBox" data-aos="fade-up"  data-aos-duration="3000">
            <div className='ztHisTxt'>
              {
                ztHisLists.map(function(titleDt,i){
                  return(
                    <div className='ztHisTxtsBoxs' key={titleDt.title}  ref={(ref) => (refs.current[i] = ref)}>
                      <div className='ztHisTxtCotain'>
                        <p className='ztHisTxtsTitle' >
                          {titleDt.subTitle}
                        </p>
                        <div className='ztHisTxtsTotal'>
                          {
                            ztHisDt[ztHisLists[i].title]&&ztHisDt[ztHisLists[i].title].map(function(data,i){
                              return(
                                <div className='ztHisTexts' key={data.id}>
                                  <p className='ztHisTxtYear'>
                                    {data.year}
                                  </p>
                                  <div className='ztHisListsTxt'>
                                    {
                                      data.list.map(function(datas,i){
                                        return(
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