import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import PropTypes from 'prop-types';

import { viewDate } from 'io-sanita-theme/helpers';
import { Topics } from 'io-sanita-theme/components/View/commons';
import './metadata.scss';

const messages = defineMessages({
  modified: {
    id: 'modified',
    defaultMessage: 'Ultimo aggiornamento',
  },
  rights: {
    id: 'rights',
    defaultMessage: 'Diritti riservati',
  },
});

/**
 * Metadata view component class.
 * @function Metadata
 * @params {object} content: Content object.
 * @returns {string} Markup of the component.
 */
const Metadata = ({
  content,
  title,
  showDates = true,
  className = 'mt-4',
  children,
}) => {
  const intl = useIntl();

  return (
    <section id="metadata" className={className}>
      {title && (
        <h2 id="header-metadata" className="mb-3">
          {title}
        </h2>
      )}

      {children}

      <Topics content={content} titleTag={title ? 'h3' : 'h2'} />

      {showDates && (
        <p className="mb-0">
          <span className="fw-semibold">
            {intl.formatMessage(messages.modified)}:
          </span>{' '}
          {viewDate(intl.locale, content.modified, 'DD MMMM Y, HH:mm')}
        </p>
      )}

      {content.rights && (
        <>
          <p className="font-serif mb-0 mt-4 metadata">
            {intl.formatMessage(messages.rights)}
          </p>
          <strong>{content.rights}</strong>
        </>
      )}
    </section>
  );
};

export default Metadata;

Metadata.propTypes = {
  content: PropTypes.object,
  title: PropTypes.string,
  showDates: PropTypes.bool,
  className: PropTypes.string,
};
