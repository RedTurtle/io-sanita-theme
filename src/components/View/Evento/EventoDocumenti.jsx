import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { Attachments } from 'io-sanita-theme/components/View/commons';
import { contentFolderHasItems } from 'io-sanita-theme/helpers';

const messages = defineMessages({
  documenti: {
    id: 'evento_documenti',
    defaultMessage: 'Documenti',
  },
});

const EventoDocumenti = ({ content }) => {
  const intl = useIntl();

  return (
    contentFolderHasItems(content, 'allegati') && (
      <Attachments
        content={content}
        folder_name={'allegati'}
        title={intl.formatMessage(messages.documenti)}
      />
    )
  );
};

EventoDocumenti.propTypes = {
  content: PropTypes.object.isRequired,
};

export default EventoDocumenti;
