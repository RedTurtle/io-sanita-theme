import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { contentFolderHasItems } from 'io-sanita-theme/helpers';
import {
  BackReferences,
  Attachments,
} from 'io-sanita-theme/components/View/commons';

const messages = defineMessages({
  allegati: {
    id: 'come_fare_per_allegati',
    defaultMessage: 'Allegati',
  },
  modulistica: { id: 'come_fare_per_modulistica', defaultMessage: 'Modulistica' },
  documenti: {
    id: 'come_fare_per_documenti',
    defaultMessage: 'Documenti',
  },
});

const ComeFarePerDocumenti = ({ content }) => {
  const intl = useIntl();

  return (
    <>
      {contentFolderHasItems(content, 'modulistica') && (
        <Attachments
          content={content}
          folder_name={'modulistica'}
          title={intl.formatMessage(messages.modulistica)}
        />
      )}
      {contentFolderHasItems(content, 'allegati') && (
        <Attachments
          content={content}
          folder_name={'allegati'}
          title={intl.formatMessage(messages.allegati)}
        />
      )}

      <BackReferences
        type="Documento"
        content={content}
        id={'documenti_correlati'}
        title={intl.formatMessage(messages.documenti)}
      />
    </>
  );
};

ComeFarePerDocumenti.propTypes = {
  content: PropTypes.object.isRequired,
};

export default ComeFarePerDocumenti;