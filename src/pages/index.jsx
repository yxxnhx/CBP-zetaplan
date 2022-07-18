import React from 'react';
import MainBanner from './main/MainBanner';
import Partners from './main/Partners';
import GlobalNetwork from './main/GlobalNetwork';
import OurBusiness from './main/OurBusiness';
import Performance from './main/Performance';
import ZetaIntroduction from './main/ZetaIntroduction';

const Index = () => {
  return (
    <div>
      <MainBanner />
      <OurBusiness />
      <Performance />
      <ZetaIntroduction />
      <Partners />
      <GlobalNetwork />
    </div>
  );
};

export default Index;
