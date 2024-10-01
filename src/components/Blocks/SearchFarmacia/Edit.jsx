import React from 'react';
import { SidebarPortal } from '@plone/volto/components';
import Body from 'io-sanita-theme/components/Blocks/SearchFarmacia/Body';
import { SearchFarmaciaSidebar as Sidebar } from 'io-sanita-theme/components/Blocks';

const Edit = (props) => {
  return (
    <div className="public-ui">
      <Body {...props} isEditMode={true} />
      <SidebarPortal selected={props.selected}>
        <Sidebar {...props} />
      </SidebarPortal>
    </div>
  );
};

export default Edit;
