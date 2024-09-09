import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';

import { Attachments } from 'io-sanita-theme/components/View/commons';

const messages = defineMessages({
  documenti: {
    id: 'news_documenti',
    defaultMessage: 'Documenti',
  },
});

const NewsItemDocumenti = ({ content }) => {
  const intl = useIntl();

  return (
    <Attachments
      content={content}
      folder_name={'documenti'}
      title={intl.formatMessage(messages.documenti)}
    />
  );
};

NewsItemDocumenti.propTypes = {
  content: PropTypes.object.isRequired,
};

export default NewsItemDocumenti;
