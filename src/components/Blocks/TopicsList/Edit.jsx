import React from 'react';
import SidebarPortal from '@plone/volto/components/manage/Sidebar/SidebarPortal';
import Body from 'io-sanita-theme/components/Blocks/TopicsList/Body';
import Sidebar from 'io-sanita-theme/components/manage/SidebarWithSchema';

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
