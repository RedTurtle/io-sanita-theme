import { defineMessages } from 'react-intl';

const messages = defineMessages({
  search_path: {
    id: 'search_strutture_Search path',
    defaultMessage: 'Posizione in cui cercare',
  },
  show_search_bar: {
    id: 'search_strutture_Show search bar',
    defaultMessage: 'Mostra la barra di ricerca',
  },
  show_types: {
    id: 'search_strutture_Show types',
    defaultMessage: 'Mostra i filtri per tipologia',
  },
});

export function SearchStruttureSchema({ formData, intl }) {
  return {
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['path', 'show_search_bar', 'show_types'],
      },
    ],
    properties: {
      path: {
        title: intl.formatMessage(messages.search_path),
        widget: 'object_browser',
        mode: 'link',
        selectedItemAttrs: ['Title', 'Description'],
        allowExternals: false,
      },
      show_search_bar: {
        title: intl.formatMessage(messages.show_search_bar),
        type: 'boolean',
      },
      show_types: {
        title: intl.formatMessage(messages.show_types),
        type: 'boolean',
      },
    },
    required: [],
  };
}
