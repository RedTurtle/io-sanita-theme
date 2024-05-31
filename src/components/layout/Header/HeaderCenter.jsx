/**
 * HeaderCenter component.
 * @module components/Header/HeaderCenter
 */

import React from 'react';
import { Header, HeaderContent, HeaderRightZone } from 'design-react-kit';

import {
  SocialHeader,
  HeaderSearch,
  BrandWrapper,
} from 'io-sanita-theme/components';

const HeaderCenter = () => {
  return (
    <Header small={false} theme="" type="center">
      <HeaderContent>
        <BrandWrapper />
        <HeaderRightZone>
          <SocialHeader />
          <HeaderSearch />
        </HeaderRightZone>
      </HeaderContent>
    </Header>
  );
};

export default HeaderCenter;
