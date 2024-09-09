import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { BackReferences } from 'io-sanita-theme/components/View/commons';

const messages = defineMessages({
  servizi: {
    id: 'uo_servizi',
    defaultMessage: 'Servizi',
  },
});

const UOServizi = ({ content }) => {
  const intl = useIntl();

  return (
    <BackReferences
      type="servizi"
      content={content}
      id={'servizi'}
      title={intl.formatMessage(messages.servizi)}
    />
  );
};

export default UOServizi;
