import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';

import { Attachments } from 'io-sanita-theme/components/View/commons';

const messages = defineMessages({
  documenti: {
    id: 'come_fare_per_documenti',
    defaultMessage: 'Documenti',
  },
});

const ComeFarePerDocumenti = ({ content }) => {
  const intl = useIntl();

  return (
    <Attachments
      content={content}
      folder_name={'documenti'}
      title={intl.formatMessage(messages.documenti)}
    />
  );
};

ComeFarePerDocumenti.propTypes = {
  content: PropTypes.object.isRequired,
};

export default ComeFarePerDocumenti;
