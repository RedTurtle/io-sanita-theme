import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { BackReferences } from 'io-sanita-theme/components/View/commons';

const messages = defineMessages({
  servizi: {
    id: 'struttura_servizi',
    defaultMessage: 'Servizi',
  },
});

const StrutturaServizi = ({ content }) => {
  const intl = useIntl();

  return (
    <BackReferences
      type="Servizio"
      content={content}
      id={'servizi'}
      title={intl.formatMessage(messages.servizi)}
    />
  );
};

export default StrutturaServizi;
