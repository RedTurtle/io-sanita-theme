/**
 * HeaderContacts component.
 * @module components/ItaliaTheme/Header/HeaderContacts/HeaderContacts
 */

import React from 'react';
import { useSelector } from 'react-redux';

import {
  Header,
  HeaderBrand,
  HeaderContent,
  HeaderRightZone,
} from 'design-react-kit';
import { useIntl } from 'react-intl';
import { getSiteProperty } from 'io-sanita-theme/helpers';
import { SiteProperty } from 'volto-site-settings';

const HeaderContacts = () => {
  const subsite = useSelector((state) => state.subsite?.data);
  const intl = useIntl();

  const parentSiteURL = subsite
    ? '/'
    : getSiteProperty('parentSiteURL', intl.locale);

  const staticParentSiteTitle = getSiteProperty('parentSiteTitle', intl.locale);

  const parentSiteTile = SiteProperty({
    property: 'site_title',
    forceValue: subsite ? null : staticParentSiteTitle,
    defaultValue: staticParentSiteTitle,
    getValue: true,
    getParent: true,
  });

  const target = subsite ? null : '_blank';
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm"> Una di tre colonne </div>
        <div class="col-sm"> Una di tre colonne </div>
        <div class="col-sm">Una di tre colonne</div>
      </div>
    </div>
  );
};

export default HeaderContacts;
