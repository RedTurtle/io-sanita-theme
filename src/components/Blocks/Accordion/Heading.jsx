import React from 'react';

const Heading = React.memo(({ type, children, ...props }) => {
  return React.createElement(type || 'div', props, children);
});
Heading.defaultProps = {
  type: 'div',
};

export default Heading;
