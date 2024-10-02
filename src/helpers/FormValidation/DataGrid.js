import { defineMessages } from 'react-intl';

const messages = defineMessages({
  timeline_tempi_scadenze_validation_error: {
    id: 'timeline_tempi_scadenze_validation_error',
    defaultMessage:
      'Impossibile aggiungere un elemento alla timeline senza aver compilato il campo "Titolo"',
  },
});

export const validateTempiScadenze = ({ value, formatMessage }) => {
  const isValid = value.every((val, i) => val.milestone);
  return !isValid
    ? formatMessage(messages.timeline_tempi_scadenze_validation_error)
    : null;
};
