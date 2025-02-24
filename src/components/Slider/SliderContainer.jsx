import React from 'react';
import cx from 'classnames';
import './sliderContainer.scss';

const SliderContainer = ({ children, className }) => {
  return <div className={cx('slider-container', className)}>{children}</div>;
};

export default SliderContainer;
