/*
 * customization from @plone/volto 18.9.1
 *
 * show time using the server timezone
 *
 */

import React from 'react';
import cx from 'classnames';
import moment from 'moment-timezone';
import { useSelector } from 'react-redux';
import { toBackendLang } from '@plone/volto/helpers/Utils/Utils';

const DatetimeWidget = ({ value, children, className, format = 'lll' }) => {
  const lang = useSelector((state) => state.intl.locale);
  const tz = useSelector(
    (state) => state.site?.data?.['plone.portal_timezone'] ?? 'Europe/Rome',
  );
  moment.locale(toBackendLang(lang));
  return value ? (
    <span className={cx(className, 'datetime', 'widget')}>
      {children
        ? children(moment.tz(value, tz).format(format))
        : moment.tz(value, tz).format(format)}
    </span>
  ) : (
    ''
  );
};

export default DatetimeWidget;
