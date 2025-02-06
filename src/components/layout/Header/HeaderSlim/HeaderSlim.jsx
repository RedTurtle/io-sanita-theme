/**
 * HeaderSlim component.
 * @module components/ItaliaTheme/Header/HeaderSlim/HeaderSlim
 */

import React from 'react';
import { useSelector } from 'react-redux';
import { HeaderSlimRightZone } from 'io-sanita-theme/components';
import {
  Header,
  HeaderBrand,
  HeaderContent,
  HeaderRightZone,
} from 'design-react-kit';
import { useIntl, defineMessages } from 'react-intl';
import { getSiteProperty } from 'io-sanita-theme/helpers';
import { SiteProperty } from 'volto-site-settings';

const messages = defineMessages({
  utilityMenu: {
    id: 'utilityMenu',
    defaultMessage: 'Utility Menu',
  },
});
const HeaderSlim = () => {
  const subsite = useSelector((state) => state.subsite?.data);
  const intl = useIntl();

  const parentSiteURL = subsite
    ? '/'
    : getSiteProperty('parentSiteURL', intl.locale);

  const staticParentSiteTitle = getSiteProperty('parentSiteTitle', intl.locale);

  const subsiteParentSiteTitle = SiteProperty({
    property: 'site_title',
    defaultValue: getSiteProperty('subsiteParentSiteTitle', intl.locale),
    getValue: true,
    getParent: true,
  });

  const target = subsite ? null : '_blank';
  return (
    <Header
      small={false}
      theme=""
      type="slim"
      role="navigation"
      aria-label={intl.formatMessage(messages.utilityMenu)}
    >
      <HeaderContent>
        <HeaderBrand
          responsive
          href={parentSiteURL}
          target={target}
          rel="noopener noreferrer"
        >
          {!subsite && staticParentSiteTitle}
          {subsite && (subsiteParentSiteTitle?.replaceAll('\\n', ' - ') ?? '')}
        </HeaderBrand>
        <HeaderRightZone>
          <HeaderSlimRightZone />
        </HeaderRightZone>
      </HeaderContent>
    </Header>
  );
};

export default HeaderSlim;
