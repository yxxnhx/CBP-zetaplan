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
import MngConsulting from './pages/management/MngConsulting';
import MngCertify from './pages/management/MngCertify';
import MngTrade from './pages/management/Mngtrade';
import MngValue from './pages/management/MngValue';
import MngCredit from './pages/management/MngCredit';
import MaIpoInfo from './pages/maipo/MaIpoInfo';
import Qna from './pages/notice/Qna';
import Footer from './components/common/Footer/index';
import ZetaNetwork from './pages/zeta/ZetaNetwork';
import ZetaCi from './pages/zeta/ZetaCi';
import Zeta from './pages/zeta/index';
import DataInfo from './pages/notice/DataInfo';
import ZetaPeople from './pages/zeta/ZetaPeople';
import News from './pages/notice/News';
import QnaDetail from './pages/notice/QnaDetail';
import DetailInfoItem from './pages/notice/DetailInfoItem';
import NewsDetailItem from './pages/notice/NewsDetailItem';
import Consulting from './components/common/Consulting/index';
import ConsultingPage from './components/common/Consulting/ConsultingPage';
import ZetaHistory from './pages/zeta/ZetaHistory';
import ZetaConsul from './pages/zeta/ZetaConsul';
import ZetaMap from './pages/zeta/ZetaMap';
import MaIpoPro from './pages/maipo/MaIpoPro';
import MaIpoPerfo from './pages/maipo/MaIpoPerfo';
import ScrollToTop from './components/common/ScrollTop';
import TopBtn from './components/common/TopBtn';
import LangEng from './pages/lang/LangEng';
import { useState } from 'react';

function App() {
  const [hdSubStyle, setHdSubStyle] = useState('hdMain');

  return (
    <div className="App">
      <ResetStyle />
      <BrowserRouter>
        <ScrollToTop />
        <Header hdSubStyle={hdSubStyle} />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/main" element={<Index setHdSubStyle={setHdSubStyle} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ir" element={<Ir setHdSubStyle={setHdSubStyle} />} />
          <Route path="/ir-perfo" element={<IrPerfo setHdSubStyle={setHdSubStyle} />} />
          <Route path="/ir-plan" element={<IrPlan setHdSubStyle={setHdSubStyle} />} />
          <Route path="/ir-process" element={<IrProcess setHdSubStyle={setHdSubStyle} />} />
          <Route path="/mng-consulting" element={<MngConsulting setHdSubStyle={setHdSubStyle} />} />
          <Route path="/mng-certify" element={<MngCertify setHdSubStyle={setHdSubStyle} />} />
          <Route path="/mng-trade" element={<MngTrade setHdSubStyle={setHdSubStyle} />} />
          <Route path="/mng-value" element={<MngValue setHdSubStyle={setHdSubStyle} />} />
          <Route path="/mng-credit" element={<MngCredit setHdSubStyle={setHdSubStyle} />} />
          <Route path="/zeta" element={<Zeta setHdSubStyle={setHdSubStyle} />} />
          <Route path="/gb" element={<Gbindex setHdSubStyle={setHdSubStyle} />} />
          <Route path="/gb-strategy" element={<GbStrategy setHdSubStyle={setHdSubStyle} />} />
          <Route path="/gb-case" element={<GbCase setHdSubStyle={setHdSubStyle} />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/maipo-info" element={<MaIpoInfo setHdSubStyle={setHdSubStyle} />} />
          <Route path="/maipo-process" element={<MaIpoPro setHdSubStyle={setHdSubStyle} />} />
          <Route path="/maipo-performance" element={<MaIpoPerfo setHdSubStyle={setHdSubStyle} />} />
          <Route path="/zeta-history" element={<ZetaHistory setHdSubStyle={setHdSubStyle} />} />
          <Route path="/zeta-ci" element={<ZetaCi setHdSubStyle={setHdSubStyle} />} />
          <Route path="/zeta-consul" element={<ZetaConsul setHdSubStyle={setHdSubStyle} />} />
          <Route path="/zeta-network" element={<ZetaNetwork setHdSubStyle={setHdSubStyle} />} />
          <Route path="/zeta-map" element={<ZetaMap setHdSubStyle={setHdSubStyle} />} />
          <Route path="/qna" element={<Qna setHdSubStyle={setHdSubStyle} />} />
          <Route path="/dataInfo" element={<DataInfo setHdSubStyle={setHdSubStyle} />} />
          <Route path="/dataInfo/:category" element={<DataInfo setHdSubStyle={setHdSubStyle} />} />
          <Route path="/zeta-people" element={<ZetaPeople setHdSubStyle={setHdSubStyle} />} />
          <Route path="/consulting" element={<ConsultingPage setHdSubStyle={setHdSubStyle} />} />
          <Route path="/news/" element={<News setHdSubStyle={setHdSubStyle} />} />
          <Route path="/news/:category" element={<News setHdSubStyle={setHdSubStyle} />} />
          <Route path="/news/:category/:id" element={<NewsDetailItem setHdSubStyle={setHdSubStyle} />} />
          <Route path="/qna/:id" element={<QnaDetail setHdSubStyle={setHdSubStyle} />} />
          <Route path="/datainfo/:category/:id" element={<DetailInfoItem setHdSubStyle={setHdSubStyle} />} />
          <Route path="/eng" element={<LangEng />} />
        </Routes>
      </BrowserRouter>
      <Consulting />
      <TopBtn />
      <Footer />
    </div>
  );
}

export default App;
