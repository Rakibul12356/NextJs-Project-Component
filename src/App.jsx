

import React from 'react';
import Questions from './F&Q/Questions';
import Slider from './FastSlider/Slider';

const App = () => {
  return (
    <div className='container mx-auto'>
      <Slider/>
      <Questions/>
    </div>
  );
};

export default App;