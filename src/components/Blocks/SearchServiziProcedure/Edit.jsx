import React from 'react';
import PropTypes from 'prop-types';
import { SidebarPortal } from '@plone/volto/components';
import { getBaseUrl } from '@plone/volto/helpers';
import Body from 'io-sanita-theme/components/Blocks/SearchServiziProcedure/Body';
import { SearchServiziProcedureSidebar as Sidebar } from 'io-sanita-theme/components/Blocks';

const Edit = (props) => {
  const { data, id, onChangeBlock, selected, pathname } = props;

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
