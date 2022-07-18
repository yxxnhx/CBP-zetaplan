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

function App() {
  /* const [hdSubStyle, setHdSubStyle] = useState(false);
  function addSubStyle (){
    setHdSubStyle(true);
  } */

  return (
    <div className="App">
      <ResetStyle />
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        {/* {  true ? <Header className="" /> :  <Header className="" />  } */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/main" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/ir" element={<Ir />} />
          <Route path="/ir-perfo" element={<IrPerfo />} />
          <Route path="/ir-plan" element={<IrPlan />} />
          <Route path="/ir-process" element={<IrProcess />} />
          <Route path="/mng-consulting" element={<MngConsulting />} />
          <Route path="/mng-certify" element={<MngCertify />} />
          <Route path="/mng-trade" element={<MngTrade />} />
          <Route path="/mng-value" element={<MngValue />} />
          <Route path="/mng-credit" element={<MngCredit />} />
          <Route path="/zeta" element={<Zeta />} />
          <Route path="/zeta-ci" element={<ZetaCi />} />
          <Route path="/zeta-network" element={<ZetaNetwork />} />
          <Route path="/gb" element={<Gbindex />} />
          <Route path="/gb-trategy" element={<GbStrategy />} />
          <Route path="/gb-case" element={<GbCase />} />
          <Route path="/landing" element={<Landing />} />
          <Route
            path="/maipo"
            element={
              <MaIpoInfo
                onLoad={() => {
                  console.log('꺼져');
                }}
              />
            }
          />
          <Route path="/maipo-process" element={<MaIpoPro />} />
          <Route path="/maipo-performance" element={<MaIpoPerfo />} />
          <Route path="/zeta-history" element={<ZetaHistory />} />
          <Route path="/zeta-ci" element={<ZetaCi />} />
          <Route path="/zeta-consul" element={<ZetaConsul />} />
          <Route path="/zeta-network" element={<ZetaNetwork />} />
          <Route path="/zeta-map" element={<ZetaMap />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/maipo" element={<MaIpoInfo />} />
          <Route path="/qna" element={<Qna />} />
          <Route path="/dataInfo" element={<DataInfo />} />
          <Route path="/zeta-people" element={<ZetaPeople />} />
          <Route path="/consulting" element={<ConsultingPage />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:category/:id" element={<NewsDetailItem />} />
          <Route path="/qna/:id" element={<QnaDetail />} />
          <Route path="/datainfo/:category/:id" element={<DetailInfoItem />} />
        </Routes>
      </BrowserRouter>
      <Consulting />
      <Footer />
    </div>
  );
}

export default App;
