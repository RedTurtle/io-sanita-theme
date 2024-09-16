import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { BackReferences } from 'io-sanita-theme/components/View/commons';

const messages = defineMessages({
  strutture: {
    id: 'uo_strutture',
    defaultMessage: 'Strutture',
  },
});

const UOStrutture = ({ content }) => {
  const intl = useIntl();

  return (
    <BackReferences
      type="Struttura"
      content={content}
      id={'strutture'}
      title={intl.formatMessage(messages.strutture)}
    />
  );
};

export default UOStrutture;
