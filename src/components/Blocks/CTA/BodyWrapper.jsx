import React from 'react';
import cx from 'classnames';

const BodyWrapper = ({ inEditMode, children, className = '' }) => {
  return (
    <div
      className={cx(className, {
        'block cta_block': !inEditMode,
        'public-ui': inEditMode,
      })}
    >
      {children}
    </div>
  );
};
export default BodyWrapper;
