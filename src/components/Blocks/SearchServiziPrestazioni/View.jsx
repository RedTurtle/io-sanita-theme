import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getBaseUrl } from '@plone/volto/helpers';
import Body from 'io-sanita-theme/components/Blocks/SearchServiziPrestazioni/Body';
import { SearchUtils } from 'io-sanita-theme/helpers';

const View = ({ data, id, path, properties, block }) => {
  const { parseFetchedSections } = SearchUtils;
  const location = useLocation();

  const content = useSelector((state) => state.content.subrequests[id]?.data);
  const fetched_sections = useSelector(
    (state) => state?.searchFilters?.result?.sections,
  );

  const sections = parseFetchedSections(fetched_sections ?? [], location);

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
