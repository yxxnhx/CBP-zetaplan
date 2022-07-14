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
/* 서브 페이지에 헤더 배경 하얀색 주려고 넣은 것, 지우지 말아주세요
import { useState } from 'react'; 
*/
import MaipoInfo from './pages/maipo/MaipoInfo';
import Qna from './pages/notice/Qna';

function App() {
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
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ir" element={<Ir />} />
          <Route path="/irPerfo" element={<IrPerfo />} />
          <Route path="/irPlan" element={<IrPlan />} />
          <Route path="/irProcess" element={<IrProcess />} />
          <Route path="/zeta" element={<Zeta />} />
          <Route path="/zetaci" element={<ZetaCi />} />
          <Route path="/zetanetwork" element={<ZetaNetwork />} />
          <Route path="/Gbindex" element={<Gbindex />} />
          <Route path="/GbStrategy" element={<GbStrategy />} />
          <Route path="/GbCase" element={<GbCase />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/maipo" element={<MaipoInfo />} />
          <Route path="/qna" element={<Qna />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
