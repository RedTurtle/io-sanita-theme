import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import PropTypes from 'prop-types';

import { viewDate } from 'io-sanita-theme/helpers';

const messages = defineMessages({
  modified: {
    id: 'modified',
    defaultMessage: 'Ultimo aggiornamento',
  },
});

/**
 * PageMetadata view component class.
 * @function Metadata
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const PageMetadata = ({ content, children }) => {
  const intl = useIntl();

  return (
    <article id="metadata" className="my-4">
      <span className="fw-semibold">
        {intl.formatMessage(messages.modified)}:
      </span>{' '}
      {viewDate(intl.locale, content.modified, 'DD MMMM Y, HH:mm')}
      {children}
    </article>
  );
};

export default PageMetadata;

PageMetadata.propTypes = {
  content: PropTypes.object,
};
