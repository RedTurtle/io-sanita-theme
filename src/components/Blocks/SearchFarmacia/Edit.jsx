import React from 'react';
import { SidebarPortal } from '@plone/volto/components';
import Sidebar from './Sidebar.jsx';
import Body from './Body';

const Edit = (props) => {
  return (
    <>
      <Body {...props} isEditMode={true} />
      <SidebarPortal selected={props.selected}>
        <Sidebar {...props} />
      </SidebarPortal>
    </>
  );
};

export default Edit;
