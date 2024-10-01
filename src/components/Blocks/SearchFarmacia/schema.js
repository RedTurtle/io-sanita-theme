import { defineMessages } from 'react-intl';

const messages = defineMessages({
  title: {
    id: 'search_farmacia_title',
    defaultMessage: 'Titolo',
  },
  search_type_help: {
    id: 'search_farmacia_search_type_help',
    defaultMessage: 'Tipologia di ricerca',
  },
});

export function SearchFarmaciaSchema({ formData, intl }) {
  return {
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['title', 'search_type'],
      },
    ],
    properties: {
      search_type: {
        title: intl.formatMessage(messages.search_type_help),
        default: 'shifts',
        choices: [
          ['shifts', 'Turni'],
          ['vacations', 'Ferie'],
        ],
      },
      title: {
        title: intl.formatMessage(messages.title),
      },
    },
    required: [],
  };
}
