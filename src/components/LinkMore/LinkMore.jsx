import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { useIntl, defineMessages } from 'react-intl';
import { flattenToAppURL } from '@plone/volto/helpers';
import { UniversalLink } from '@plone/volto/components';
import { Icon } from 'io-sanita-theme/components';

import './linkmore.scss';
const messages = defineMessages({
  view_all: {
    id: 'Vedi tutto',
    defaultMessage: 'Vedi tutto',
  },
});

export const LinkMore = ({
  title,
  href,
  className = '',
  linkmoreIdLighthouse,
}) => {
  const intl = useIntl();
  const url = href?.[0]?.['@id'];
  return url ? (
    <div className={cx('link-more-button-wrapper text-end', className)}>
      <UniversalLink
        href={flattenToAppURL(url)}
        data-element={linkmoreIdLighthouse}
        className="text-accent fw-semibold"
      >
        {title || intl.formatMessage(messages.view_all)}{' '}
        <Icon
          color="accent"
          icon="it-arrow-right"
          className="arrow-icon"
          padding={false}
        />
      </UniversalLink>
    </div>
  ) : null;
};

LinkMore.propTypes = {
  linkMore: PropTypes.object,
};

export default LinkMore;
