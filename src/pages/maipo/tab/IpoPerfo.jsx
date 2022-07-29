import React from 'react';

const IpoPerfo = () => {
  return (
    <div className='ipoPerfo'>
      <div className="ipoPerfoCircleWrap">
        <div className="ipoPerfoCircle">
          <div className="ipoPerfoCircleItem ipoPerfoCircleItemRestruc">
            <span className="ipoPerfoCircleTxt">Restructuring</span>
          </div>
          <div className="ipoPerfoCircleItem ipoPerfoCircleItemFunds">
            <span className="ipoPerfoCircleTxt">Funds</span>
          </div>
          <div className="ipoPerfoCircleItem ipoPerfoCircleItemPub">
            <span className="ipoPerfoCircleTxt">Publicity</span>
          </div>
        </div>
      </div>

      <div className='ipoPerfoTxt'>
        <h3 className='ipoPerfoTxtTop'>Restructuring</h3>
        <p className='darkText ipoPerfoTxtMid'>필요자금 조달 용이</p>
        <p className='ipoPerfoTxtBt'>
          유상증자, 해외DR 발행, 전환사채, 교환사채 등 다양한 방법을 통해 대규모 필요자금을 쉽게 조달할 수 있습니다.
        </p>
        <h3 className='ipoPerfoTxtTop'>Funds</h3>
        <p className='darkText ipoPerfoTxtMid'>기업인지도 제고</p>
        <p className='ipoPerfoTxtBt'>
          상장법인의 주가 등이 신문ㆍTV 등 언론매체에서 수시로 보도됨으로써 기업의 홍보효과가 극대화되고 국내외 투자자에 대한 당해 기업의 인지도를 제고할 수 있습니다. 또한 기업인지도 제고에 따라 우수 인재의 입사지원 증가 및 우수인력의 확보가 용이합니다.
        </p>
        <h3 className='ipoPerfoTxtTop'>Publicity</h3>
        <p className='darkText ipoPerfoTxtMid'>기업구조조정의 원활한 추진</p>
        <p className='ipoPerfoTxtBt'>
          상장법인의 분할 또는 합병 등에 의해 설립된 회사를 쉽게 상장할 수 있도록 상장요건 정비 등 환경을 조성함으로써 상장법인의 경영목적에 맞는 방법으로 구조조정을 원활하게 추진할 수 있습니다.
        </p>
      </div>
    </div>
  );
};

export default IpoPerfo;