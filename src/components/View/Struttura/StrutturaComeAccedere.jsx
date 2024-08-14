import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { RichTextSection } from 'io-sanita-theme/helpers';

const messages = defineMessages({
  come_accedere: {
    id: 'struttura_come_accedere',
    defaultMessage: 'Come accedere',
  },
});

const StrutturaComeAccedere = ({ content }) => {
  const intl = useIntl();

  return (
    <RichTextSection
      data={content?.come_accedere}
      tag_id="come_accedere"
      title={intl.formatMessage(messages.come_accedere)}
    />
  );
};

StrutturaComeAccedere.propTypes = {
  content: PropTypes.shape({
    come_accedere: PropTypes.shape({
      data: PropTypes.string,
    }),
  }).isRequired,
};

export default StrutturaComeAccedere;
