import React from 'react';
import PropTypes from 'prop-types';
import { useIntl, defineMessages } from 'react-intl';
import { flattenToAppURL } from '@plone/volto/helpers';
import { UniversalLink } from '@plone/volto/components';
import { Icon } from 'io-sanita-theme/components';

const messages = defineMessages({
  view_all: {
    id: 'Vedi tutto',
    defaultMessage: 'Vedi tutto',
  },
});

export const ListingLinkMore = ({
  title,
  href,
  className = '',
  linkmoreIdLighthouse,
}) => {
  const intl = useIntl();
  const url = href?.[0]?.['@id'];
  return url ? (
    <div className={`link-more-button-wrapper text-end ${className}`}>
      <UniversalLink
        href={flattenToAppURL(url)}
        data-element={linkmoreIdLighthouse}
        className="text-accent fw-semibold"
      >
        {title || intl.formatMessage(messages.view_all)}{' '}
        <Icon color="accent" icon="it-arrow-right" padding={false} />
      </UniversalLink>
    </div>
  ) : null;
};

ListingLinkMore.propTypes = {
  linkMore: PropTypes.object,
};

export default ListingLinkMore;
