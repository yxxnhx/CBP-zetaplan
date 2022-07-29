import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages';
import ResetStyle from './styles/ResetStyle';
import './styles/GlobalStyle.scss';
import { useState, Suspense } from 'react';
const Login = React.lazy(() => import('./pages/login'));
const IrPerfo = React.lazy(() => import('./pages/ir/IrPerfo'));
const IrPlan = React.lazy(() => import('./pages/ir/IrPlan'));
const IrProcess = React.lazy(() => import('./pages/ir/IrProcess'));
const Ir = React.lazy(() => import('./pages/ir/index'));
const Header = React.lazy(() => import('./components/common/Header/index'));
const Gbindex = React.lazy(() => import('./pages/global/index'));
const GbStrategy = React.lazy(() => import('./pages/global/GbStrategy'));
const GbCase = React.lazy(() => import('./pages/global/GbCase'));
const Landing = React.lazy(() => import('./pages/landing/index'));
const MngConsulting = React.lazy(() => import('./pages/management/MngConsulting'));
const MngTrade = React.lazy(() => import('./pages/management/Mngtrade'));
const MngValue = React.lazy(() => import('./pages/management/MngValue'));
const MngCredit = React.lazy(() => import('./pages/management/MngCredit'));
const MngCertify = React.lazy(() => import('./pages/management/MngCertify'));
const MaIpoInfo = React.lazy(() => import('./pages/maipo/MaIpoInfo'));
const Qna = React.lazy(() => import('./pages/notice/Qna'));
const Footer = React.lazy(() => import('./components/common/Footer/index'));
const ZetaNetwork = React.lazy(() => import('./pages/zeta/ZetaNetwork'));
const ZetaCi = React.lazy(() => import('./pages/zeta/ZetaCi'));
const Zeta = React.lazy(() => import('./pages/zeta/index'));
const DataInfo = React.lazy(() => import('./pages/notice/DataInfo'));
const ZetaPeople = React.lazy(() => import('./pages/zeta/ZetaPeople'));
const News = React.lazy(() => import('./pages/notice/News'));
const QnaDetail = React.lazy(() => import('./pages/notice/QnaDetail'));
const DetailInfoItem = React.lazy(() => import('./pages/notice/DetailInfoItem'));
const NewsDetailItem = React.lazy(() => import('./pages/notice/NewsDetailItem'));
const Consulting = React.lazy(() => import('./components/common/Consulting/index'));
const ConsultingPage = React.lazy(() => import('./components/common/Consulting/ConsultingPage'));
const ZetaHistory = React.lazy(() => import('./pages/zeta/ZetaHistory'));
const ZetaConsul = React.lazy(() => import('./pages/zeta/ZetaConsul'));
const ZetaMap = React.lazy(() => import('./pages/zeta/ZetaMap'));
const MaIpoPro = React.lazy(() => import('./pages/maipo/MaIpoPro'));
const MaIpoPerfo = React.lazy(() => import('./pages/maipo/MaIpoPerfo'));
const ScrollToTop = React.lazy(() => import('./components/common/ScrollTop'));
const TopBtn = React.lazy(() => import('./components/common/TopBtn'));
const LangEng = React.lazy(() => import('./pages/lang/LangEng'));
const LangCn = React.lazy(() => import('./pages/lang/LangCn'));
const QnaWrite = React.lazy(() => import('./pages/notice/QnaWrite'));

function App() {
  const [hdSubStyle, setHdSubStyle] = useState('hdMain');

  return (
    <div className="App">
      <ResetStyle />
      <BrowserRouter>
        <ScrollToTop />
        <Header hdSubStyle={hdSubStyle} />

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/main" element={<Index setHdSubStyle={setHdSubStyle} />} />
            <Route path="/login" element={<Login setHdSubStyle={setHdSubStyle} />} />
            <Route path="/ir" element={<Ir setHdSubStyle={setHdSubStyle} />} />
            <Route path="/ir-perfo" element={<IrPerfo setHdSubStyle={setHdSubStyle} />} />
            <Route path="/ir-plan" element={<IrPlan setHdSubStyle={setHdSubStyle} />} />
            <Route path="/ir-process" element={<IrProcess setHdSubStyle={setHdSubStyle} />} />
            <Route path="/mng" element={<MngConsulting setHdSubStyle={setHdSubStyle} />} />
            <Route path="/mng-trade" element={<MngTrade setHdSubStyle={setHdSubStyle} />} />
            <Route path="/mng-value" element={<MngValue setHdSubStyle={setHdSubStyle} />} />
            <Route path="/mng-value/:category" element={<MngValue setHdSubStyle={setHdSubStyle} />} />
            <Route path="/mng-credit" element={<MngCredit setHdSubStyle={setHdSubStyle} />} />
            <Route path="/mng-certify" element={<MngCertify setHdSubStyle={setHdSubStyle} />} />
            <Route path="/zeta" element={<Zeta setHdSubStyle={setHdSubStyle} />} />
            <Route path="/gb" element={<Gbindex setHdSubStyle={setHdSubStyle} />} />
            <Route path="/gb-strategy" element={<GbStrategy setHdSubStyle={setHdSubStyle} />} />
            <Route path="/gb-case" element={<GbCase setHdSubStyle={setHdSubStyle} />} />
            <Route path="/landing" element={<Landing />} />
            <Route path="/maipo-info/:category" element={<MaIpoInfo setHdSubStyle={setHdSubStyle} />} />
            <Route path="/maipo-process/:category" element={<MaIpoPro setHdSubStyle={setHdSubStyle} />} />
            <Route path="/maipo-performance/:category" element={<MaIpoPerfo setHdSubStyle={setHdSubStyle} />} />
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
            <Route path="/cn" element={<LangCn />} />
            <Route path="/qna-write" element={<QnaWrite />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Consulting />
      <TopBtn />
      <Footer />
    </div>
  );
}

export default App;
