import React from 'react';
import ProcessImg from '../../img/me/me_process@2x.png';
import '../../styles/mng/mngTrade.scss';
import SubBanner from '../../components/common/SubBanner/index';
import subBg from '../../img/me/me_sub_bg@2x.png';

const MngTrade = () => {
  const title = '국내는 물론, 해외로 나아갈<br />기술이전 컨설팅을 지원합니다.'
  return (
    <div>
      <SubBanner title={title} img={subBg} />
      <div className='mngInner'>
        <div>
          <h2 className='mngSubTitle'>기술거래</h2>
        </div>
        <div className='mngSummary'>
          <p>제타플랜에서는 중국 및 동남아국가에 기술이전, 기술제휴 및 기술투자는 물론 현지국가 투지기업과 합작법인 설립을 희망하는</p>
          <p>국내 특허기술 공급자를 대상으로 기술이전 컨설팅을 진행하고 있습니다.</p>
          <p>현재 중국은 다양한 산업분야에서 현지 중소기업이 필요로 하는 많은 기술을 흡수하고 있는 상황이며</p>
          <p>특히 친환경, 바이오(의료·건강), 첨단기술에 대한 수요가 증가하고 있습니다.</p>
          <p>이러한 상황을 감안하여 본 제타플랜은 기술공급 기업의 현지 인큐베이팅은 물론</p>
          <p>기술투자, 기술 M&A 등 기술거래 관련 다양한 컨설팅 업무를 수행하고 있습니다.</p>
        </div>
        <div>
          <h2 className='mngSubTitleNb mngTradePro'>Process</h2>
          <img src={ProcessImg} alt='process' className='mngTradeProcessImg'/>
        </div>
      </div>
    </div>
  )
};

export default MngTrade;

