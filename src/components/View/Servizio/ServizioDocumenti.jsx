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
    id: 'servizio_allegati',
    defaultMessage: 'Allegati',
  },
  modulistica: { id: 'servizio_modulistica', defaultMessage: 'Modulistica' },
  documenti: {
    id: 'servizio_documenti',
    defaultMessage: 'Documenti',
  },
});

const ServizioDocumenti = ({ content }) => {
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

ServizioDocumenti.propTypes = {
  content: PropTypes.object.isRequired,
};

export default ServizioDocumenti;
