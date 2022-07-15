import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages';
import ResetStyle from './styles/ResetStyle';
import './styles/GlobalStyle.scss';
import Login from './pages/login';
import IrPerfo from './pages/ir/IrPerfo';
import IrPlan from './pages/ir/IrPlan';
import IrProcess from './pages/ir/IrProcess';
import Ir from './pages/ir/index';
import Header from './components/common/Header/index';
import Gbindex from './pages/global/index';
import GbStrategy from './pages/global/GbStrategy';
import GbCase from './pages/global/GbCase';
import Landing from './pages/landing/index';
import MaipoInfo from './pages/maipo/MaipoInfo';
import Qna from './pages/notice/Qna';
import Footer from './components/common/Footer/index';
import ZetaNetwork from './pages/zeta/ZetaNetwork';
import ZetaCi from './pages/zeta/ZetaCi';
import Zeta from './pages/zeta/index';
import DataInfo from './pages/notice/DataInfo';
import ZetaPeople from './pages/zeta/ZetaPeople';
import { useState } from 'react'
function App() {
  const [hdSubStyle, setHdSubStyle] = useState(false);

  /* 서브 페이지에 헤더 배경 하얀색 주려고 넣은 것, 지우지 말아주세요
  const [hdSubStyle, setHdSubStyle] = useState(false);
  function addSubStyle (){
    if(setHdSubStyle(!false)){
    }
  } 
  */

  return (
    <div className="App">
      <ResetStyle />
      <BrowserRouter>
        {  true ? <Header className="" /> :  <Header className="" />  }
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ir" element={<Ir />} />
          <Route path="/ir-perfo" element={<IrPerfo />} />
          <Route path="/ir-plan" element={<IrPlan />} />
          <Route path="/ir-process" element={<IrProcess />} />
          <Route path="/zeta" element={<Zeta />} />
          <Route path="/zeta-ci" element={<ZetaCi />} />
          <Route path="/zeta-network" element={<ZetaNetwork />} />
          <Route path="/gb" element={<Gbindex />} />
          <Route path="/gb-trategy" element={<GbStrategy />} />
          <Route path="/gb-case" element={<GbCase />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/maipo" element={<MaipoInfo />} />
          <Route path="/qna" element={<Qna />} />
          <Route path="/dataInfo" element={<DataInfo />} />
          <Route path="/zeta-people" element={<ZetaPeople />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
