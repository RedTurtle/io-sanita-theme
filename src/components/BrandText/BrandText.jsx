import React from 'react';
import cx from 'classnames';
import { useSelector } from 'react-redux';
import { useIntl } from 'react-intl';
import { SiteProperty } from 'volto-site-settings';
import { getSiteProperty } from 'io-sanita-theme/helpers';

const BrandText = ({ mobile = false, getParent = false }) => {
  const subsite = useSelector((state) => state.subsite?.data);
  const intl = useIntl();
  let title = SiteProperty({
    property: 'site_title',
    defaultValue: getSiteProperty('siteTitle', intl.locale),
    getValue: true,
    getParent: getParent,
  });
  const description = SiteProperty({
    property: 'site_subtitle',
    defaultValue: getSiteProperty('siteSubtitle', intl.locale),
    getValue: true,
    getParent: getParent,
  });

  const titleSplit = title?.split('\n') ?? null;
  title = titleSplit?.map((t, i) => (
    <React.Fragment key={i}>
      {t}
      {i < titleSplit.length - 1 && <br />}
    </React.Fragment>
  ));

  const hide_title = SiteProperty({
    property: 'hide_title',
    defaultValue: false,
    getValue: true,
    getParent: false,
  });
  const visuallyHidden = !subsite && hide_title;

  return (
    <div className={cx('it-brand-text', { 'visually-hidden': visuallyHidden })}>
      {title && <div className="it-brand-title">{title}</div>}
      {description && (
        <div
          className={cx('it-brand-tagline', { 'd-none d-md-block': !mobile })}
        >
          {description}
        </div>
      )}
    </div>
  );
};

export default BrandText;
