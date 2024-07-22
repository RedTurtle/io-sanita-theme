import React from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { useIntl, defineMessages } from 'react-intl';
import { flattenToAppURL } from '@plone/volto/helpers';
import { UniversalLink } from '@plone/volto/components';
import { getSiteProperty } from 'io-sanita-theme/helpers';
import { Logo, BrandText } from 'io-sanita-theme/components';

const messages = defineMessages({
  homepage: {
    id: 'homepage',
    defaultMessage: 'homepage',
  },
  logoSubsiteAlt: {
    id: 'logo-subsite-alt',
    defaultMessage: 'Logo',
  },
});

const BrandWrapper = ({ mobile = false, setCollapseOpen }) => {
  const subsite = useSelector((state) => state.subsite?.data);

  const intl = useIntl();

  let wrapperAttrs = {};
  let linkAttrs = {};
  if (mobile) {
    wrapperAttrs.role = 'navigation';
    if (setCollapseOpen) {
      linkAttrs.onClick = () => setCollapseOpen(false);
    }
  }
  return (
    <div className="it-brand-wrapper" {...wrapperAttrs}>
      <UniversalLink
        href={subsite?.['@id'] ? flattenToAppURL(subsite['@id']) : '/'}
        title={intl.formatMessage(messages.homepage)}
        {...linkAttrs}
      >
        <Logo
          alt={subsite ? intl.formatMessage(messages.logoSubsiteAlt) : null}
        />
        <BrandText mobile={mobile} />
      </UniversalLink>
    </div>
  );
};

export default BrandWrapper;
