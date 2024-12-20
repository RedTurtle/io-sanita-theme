import React from 'react';
import PropTypes from 'prop-types';
import Body from 'io-sanita-theme/components/Blocks/SearchBandi/Body';
import { getBaseUrl } from '@plone/volto/helpers/Url/Url';

const View = ({ data, id, path, properties, block, blocksConfig }) => {
  return (
    <div className="bandi-search">
      <Body
        data={data}
        id={id}
        path={getBaseUrl(path)}
        properties={properties}
        block={block}
        blocksConfig={blocksConfig}
      />
    </div>
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
