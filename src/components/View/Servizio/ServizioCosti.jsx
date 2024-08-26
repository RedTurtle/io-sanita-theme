import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { RichTextSection } from 'io-sanita-theme/helpers';

const messages = defineMessages({
  costi: {
    id: 'servizio_costi',
    defaultMessage: 'Costi',
  },
});

const ServizioCosti = ({ content }) => {
  const intl = useIntl();

  return (
    <RichTextSection
      data={content?.costi}
      tag_id="costi"
      title={intl.formatMessage(messages.costi)}
    />
  );
};

ServizioCosti.propTypes = {
  content: PropTypes.shape({
    costo: PropTypes.shape({
      data: PropTypes.string,
    }),
  }).isRequired,
};

export default ServizioCosti;
