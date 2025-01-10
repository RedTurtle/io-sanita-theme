import React from 'react';
import PropTypes from 'prop-types';
import { getBaseUrl } from '@plone/volto/helpers/Url/Url';
import Body from 'io-sanita-theme/components/Blocks/SearchMap/Body';
import SidebarPortal from '@plone/volto/components/manage/Sidebar/SidebarPortal';
import Sidebar from 'io-sanita-theme/components/Blocks/SearchMap/Sidebar';

const SearchMapEdit = (props) => {
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
SearchMapEdit.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  id: PropTypes.string.isRequired,
  selected: PropTypes.any,
  intl: PropTypes.any,
  onChangeBlock: PropTypes.func.isRequired,
};
export default SearchMapEdit;
