

import React from 'react';

import Footer2 from './Footer2';
import { FooterCopy } from './FooterCopy';
import HowItWorksFlip from './HowItWorksFlip';
import MeetTheTeam from './MeetTheTeam';
import ProductCarousel from './ProductCarousel';;



const App = () => {
  return (
    <div className='container mx-auto'>
      <HowItWorksFlip/>
      <MeetTheTeam/>
      <ProductCarousel/>
    
      <FooterCopy/>
      
    </div>
  );
};

export default App;