import { defineMessages } from 'react-intl';

const messages = defineMessages({
  title: {
    id: 'search_map_title',
    defaultMessage: 'Titolo',
  },
  search_path: {
    id: 'search_map_Search path',
    defaultMessage: 'Posizione in cui cercare',
  },
  show_search_bar: {
    id: 'search_map_Show search bar',
    defaultMessage: 'Mostra la barra di ricerca',
  },
  show_types: {
    id: 'search_map_Show types',
    defaultMessage: 'Mostra i filtri per tipologia',
  },
  show_city: {
    id: 'search_map_Show city',
    defaultMessage: 'Mostra il filtro per comune',
  },
  show_distretto: {
    id: 'search_map_Show distretto',
    defaultMessage: 'Mostra il filtro per distretto',
  },
  portal_type: {
    id: 'search_map_ct',
    defaultMessage: 'Tipo di contenuto',
  },
  search_map_block_title: {
    id: 'search_map_block_title',
    defaultMessage: 'Ricerca con mappa',
  },
});

export function SearchMapSchema({ formData, intl }) {
  return {
    title: intl.formatMessage(messages.search_map_block_title),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: [
          'title',
          'path',
          'portal_type',
          'show_search_bar',
          ...(formData.portal_type === 'Struttura'
            ? ['show_types', 'show_city', 'show_distretto']
            : []),
        ],
      },
    ],
    properties: {
      portal_type: {
        title: intl.formatMessage(messages.portal_type),
        default: 'Struttura',
        choices: [
          ['Struttura', 'Struttura'],
          ['Persona', 'Medico'],
        ],
      },
      title: {
        title: intl.formatMessage(messages.title),
      },
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
        default: true,
      },
      show_types: {
        title: intl.formatMessage(messages.show_types),
        type: 'boolean',
      },
      show_city: {
        title: intl.formatMessage(messages.show_city),
        type: 'boolean',
      },
      show_distretto: {
        title: intl.formatMessage(messages.show_distretto),
        type: 'boolean',
      },
    },
    required: [],
  };
}
