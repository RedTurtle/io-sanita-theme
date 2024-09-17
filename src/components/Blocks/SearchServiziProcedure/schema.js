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
  portal_type: {
    id: 'search_map_ct',
    defaultMessage: 'Tipo di contenuto',
  },
});

export function SearchServiziProcedureSchema({ formData, intl }) {
  return {
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['title', 'path', 'portal_type'],
      },
    ],
    properties: {
      portal_type: {
        title: intl.formatMessage(messages.portal_type),
        default: 'Servizio',
        //isClearable: false, non funziona
        choices: [
          ['Servizio', 'Servizi e prestazioni'],
          ['ComeFarePer', 'Procedure'],
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
    },
    required: [],
  };
}
