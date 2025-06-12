import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { BackReferences } from 'io-sanita-theme/components/View/commons';

const messages = defineMessages({
  personale: {
    id: 'struttura_personale',
    defaultMessage: 'Personale della struttura',
  },
});

const StrutturaPersonale = ({ content }) => {
  const intl = useIntl();

  return (
    <BackReferences
      type="Persona"
      content={content}
      id={'Persona'}
      title={intl.formatMessage(messages.personale)}
    />
  );
};

export default StrutturaPersonale;
