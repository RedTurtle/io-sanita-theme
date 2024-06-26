import React from 'react';
import './_sliderContainer.scss';

const SliderContainer = ({children}) => {
  return <div className="slider-container">
  {children}
  </div>;
}

export default SliderContainer;
