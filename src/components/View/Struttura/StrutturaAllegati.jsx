import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { contentFolderHasItems } from 'io-sanita-theme/helpers';
import { Attachments } from 'io-sanita-theme/components/View/commons';

const messages = defineMessages({
  allegati: {
    id: 'struttura_allegati',
    defaultMessage: 'Allegati',
  },
});

const StrutturaAllegati = ({ content }) => {
  const intl = useIntl();

  return (
    <>
      {contentFolderHasItems(content, 'allegati') && (
        <Attachments
          content={content}
          folder_name={'allegati'}
          title={intl.formatMessage(messages.allegati)}
        />
      )}
    </>
  );
};

StrutturaAllegati.propTypes = {
  content: PropTypes.object.isRequired,
};

export default StrutturaAllegati;
