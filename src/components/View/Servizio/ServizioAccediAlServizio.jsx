import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, useIntl } from 'react-intl';
import { RichTextSection } from 'io-sanita-theme/helpers';

const messages = defineMessages({
  accedi_al_servizio: {
    id: 'servizio_accedi_al_servizio',
    defaultMessage: 'Accedi al servizio',
  },
});

const ServizioAccediAlServizio = ({ content }) => {
  const intl = useIntl();

  return (
    <RichTextSection
      data={content?.come_accedere}
      tag_id="accedi_al_servizio"
      title={intl.formatMessage(messages.accedi_al_servizio)}
    />
  );
};

ServizioAccediAlServizio.propTypes = {
  content: PropTypes.shape({
    come_accedere: PropTypes.shape({
      data: PropTypes.string,
    }),
  }).isRequired,
};

export default ServizioAccediAlServizio;
