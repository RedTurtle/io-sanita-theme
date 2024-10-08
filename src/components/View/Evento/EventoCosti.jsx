import React from 'react';
import PropTypes from 'prop-types';

import { defineMessages, useIntl } from 'react-intl';

import {
  RichTextSection
} from 'io-sanita-theme/helpers';

const messages = defineMessages({
  costi: {
    id: 'evento_costi',
    defaultMessage: 'Costi',
  },
});

const EventoCosti = ({ content }) => {
  const intl = useIntl();

  return (
    <RichTextSection
      data={content?.costo}
      tag_id="costi"
      title={intl.formatMessage(messages.costi)}
    />
  );
};

EventoCosti.propTypes = {
  content: PropTypes.shape({
    costo: PropTypes.shape({
      data: PropTypes.string,
    }),
  }).isRequired,
};

export default EventoCosti;
