import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { RichTextSection } from 'io-sanita-theme/helpers';

const messages = defineMessages({
  news_item_contenuto: {
    id: 'news_item_contenuto',
    defaultMessage: 'Contenuto',
  },
});

const NewsItemTesto = ({ content }) => {
  const intl = useIntl();

  return (
    <RichTextSection
      data={content.descrizione_estesa}
      tag_id={'text-body'}
      field="descrizione_estesa"
      title={intl.formatMessage(messages.news_item_contenuto)}
      show_title={false}
    />
  );
};

NewsItemTesto.propTypes = {
  content: PropTypes.shape({
    descrizione_estesa: PropTypes.object,
  }).isRequired,
};

export default NewsItemTesto;
