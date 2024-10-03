import { defineMessages } from 'react-intl';

export const commonSearchBlockMessages = defineMessages({
  text: {
    id: 'Type text…',
    defaultMessage: 'Digita il testo…',
  },
  startEventRange: {
    id: 'Event start date must be on or before {endDateValueOrEndFieldName}',
    defaultMessage:
      'Event start date must be on or before {endDateValueOrEndFieldName}',
  },
  endEventRange: {
    id: 'Event end date must be on or after {startDateValueOrStartFieldName}',
    defaultMessage:
      'Event end date must be on or after {startDateValueOrStartFieldName}',
  },
});
