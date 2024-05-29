import React from 'react';
import cx from 'classnames';
import { useIntl } from 'react-intl';
import { getSiteProperty } from 'io-sanita-theme/helpers';

const BrandText = ({ mobile = false, subsite }) => {
  const intl = useIntl();
  return (
    <div className="it-brand-text">
      <p className="no_toc h2">
        {subsite?.title || getSiteProperty('siteTitle', intl.locale)}
      </p>
      <p className={cx('no_toc h3', { 'd-none d-md-block': !mobile })}>
        {subsite?.description || getSiteProperty('siteSubtitle', intl.locale)}
      </p>
    </div>
  );
};

export default BrandText;
