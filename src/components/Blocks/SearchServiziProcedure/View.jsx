import React from 'react';
import PropTypes from 'prop-types';
import { getBaseUrl } from '@plone/volto/helpers/Url/Url';
import Body from 'io-sanita-theme/components/Blocks/SearchServiziProcedure/Body';

const View = ({ data, id, path, properties, block }) => {
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
View.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  id: PropTypes.string.isRequired,
};

export default View;
