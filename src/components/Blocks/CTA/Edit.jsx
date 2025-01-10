/**
 * Edit title block.
 * @module components/Blocks/TitleVM/Edit
 */

import React from 'react';
import SidebarPortal from '@plone/volto/components/manage/Sidebar/SidebarPortal';
import Sidebar from 'io-sanita-theme/components/Blocks/CTA/Sidebar';
import BodyWrapper from 'io-sanita-theme/components/Blocks/CTA/BodyWrapper.jsx';
import Block from 'io-sanita-theme/components/Blocks/CTA/Block';
import './ctaBlock.scss';

const Edit = (props) => {
  return (
    <>
      <BodyWrapper inEditMode={true}>
        <Block {...props} inEditMode={true} />
      </BodyWrapper>

      <SidebarPortal selected={props.selected || false}>
        <Sidebar {...props} />
      </SidebarPortal>
    </>
  );
};

export default Edit;
