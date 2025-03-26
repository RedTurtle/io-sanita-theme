import React from 'react';
import cx from 'classnames';
import { render } from 'react-dom';

const SelectWidget = ({ value, children, className, behavior }) => {
  let render_value = children
    ? children(value?.title || value?.token || value)
    : value?.title || value?.token || value;
  if (behavior?.startsWith('collective.taxonomy')) {
    render_value = render_value.split('»').reverse()[0];
  }
  return value ? (
    <span className={cx(className, 'select', 'widget')}>{render_value}</span>
  ) : (
    ''
  );
};
export default SelectWidget;
