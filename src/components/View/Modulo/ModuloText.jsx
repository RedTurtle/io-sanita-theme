import React from 'react';
import PropTypes from 'prop-types';

import { TextOrBlocks } from 'io-sanita-theme/helpers';

const ModuloText = ({ content }) => {
  return <TextOrBlocks content={content} />;
};

ModuloText.propTypes = {
  content: PropTypes.object.isRequired,
};

export default ModuloText;
