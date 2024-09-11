import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { SidebarPortal } from '@plone/volto/components';
import { getBaseUrl } from '@plone/volto/helpers';
import Body from 'io-sanita-theme/components/Blocks/SearchServiziPrestazioni/Body';
import { SearchServiziPrestazioniSidebar as Sidebar } from 'io-sanita-theme/components/Blocks';
import { SearchUtils } from 'io-sanita-theme/helpers';

const Edit = (props) => {
  const { data, id, block, onChangeBlock, selected, pathname } = props;

  const { parseFetchedSections } = SearchUtils;
  const location = useLocation();

  const fetched_sections = useSelector(
    (state) => state?.searchFilters?.result?.sections,
  );

  const sections = fetched_sections
    ? parseFetchedSections(fetched_sections, location)
    : [];

  return (
    <div className="public-ui">
      <Body
        data={data}
        id={id}
        path={getBaseUrl(pathname)}
        inEditMode={true}
        onChangeBlock={onChangeBlock}
      />
      <SidebarPortal selected={selected}>
        <Sidebar {...props} />
      </SidebarPortal>
    </div>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Edit.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  id: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  block: PropTypes.string.isRequired,
};

export default Edit;
