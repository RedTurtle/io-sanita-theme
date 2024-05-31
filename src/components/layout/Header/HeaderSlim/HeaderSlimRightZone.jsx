/**
 * HeaderSlim component.
 * @module components/Header/HeaderSlim/HeaderSlimRightZone
 */

import React from 'react';
import { useSelector } from 'react-redux';

import {
  ParentSiteMenu,
  LanguageSelector,
  HeaderLogin,
  TertiaryMenu,
} from 'io-sanita-theme/components';

const HeaderSlimRightZone = () => {
  const subsite = useSelector((state) => state.subsite?.data);
  return (
    <>
      <ParentSiteMenu />
      {!subsite && <TertiaryMenu />}
      <LanguageSelector />
      <HeaderLogin />
    </>
  );
};

export default HeaderSlimRightZone;
