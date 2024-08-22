import React from 'react';
import PropTypes from 'prop-types';
import { getBaseUrl } from '@plone/volto/helpers';
import Body from 'io-sanita-theme/components/Blocks/SearchMap/Body';

const SearchMapView = ({ data, id, path, properties, block }) => {
  return (
    <Body
      data={data}
      id={id}
      path={getBaseUrl(path)}
      properties={properties}
      block={block}
    />
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
SearchMapView.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  id: PropTypes.string.isRequired,
};

export default SearchMapView;
