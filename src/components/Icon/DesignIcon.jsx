import React, { useState, useEffect, useRef, useMemo } from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';

import { Icon } from 'design-react-kit';

const propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  icon: PropTypes.string,
  padding: PropTypes.bool,
};

const defaultProps = {
  color: '',
  size: '',
  icon: '',
  padding: false,
};

const DesignIcon = (props) => {
  return <Icon {...props} />;
};

DesignIcon.propTypes = propTypes;
DesignIcon.defaultProps = defaultProps;

export default DesignIcon;
