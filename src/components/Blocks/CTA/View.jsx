import React from 'react';
import PropTypes from 'prop-types';
import BodyWrapper from 'io-sanita-theme/components/Blocks/CTA/BodyWrapper';

import Block from 'io-sanita-theme/components/Blocks/CTA/Block';

import './ctaBlock.scss';

const View = ({ data, id, className }) => {
  return (
    <BodyWrapper inEditMode={false} className={className}>
      <Block data={data} inEditMode={false} block={id} />
    </BodyWrapper>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
View.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default View;
