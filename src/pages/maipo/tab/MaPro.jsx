import React from 'react';
import { useState } from 'react';
import '../../../styles/maipo/MaIpoAccordion.scss'
import MaAccordionTop from './MaAccordionTop';

const MaPro = () => {
  const [selected, setSelected] = useState(null)
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  const MaProAcco = [
    {
      id: '1',
      title: '일반적 절차',
      content: (<MaAccordionTop />)
    },
    {
      id: '2',
      title: '중개기관을 통한 절차',
      content: (<div className='maProImgWrap'><div className='maProImg'></div></div>)
    }
  ]


  return (
    <div className='maPro'>
      <div className='maProAcco'>
        {
          MaProAcco.map((item, i) => (
            <div className='maProItem' key={i}>
              <div className={selected === i ? 'maProBtn on' : 'maProBtn'} onClick={() => toggle(i)}>
                <h2 className='maProTitle'>{item.title}</h2>
                <div>
                  {selected === i ? <div className='maTopBtn'></div> : <div className='maUnderBtn'></div>}
                </div>
              </div>
              <div className={selected === i ? 'maProContents show' : 'maProContents'}>
                {item.content}
              </div>
            </div>
          ))
        }
      </div>
    </div >

  );
};

export default MaPro;