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
  search_farmacie_block_title: {
    id: 'search_farmacie_block_title',
    defaultMessage: 'Ricerca Farmacie',
  },
  show_area_territoriale: {
    id: 'search_farmacia_show_area_territoriale',
    defaultMessage: 'Mostra il filtro per ente territoriale',
  },
  show_comune: {
    id: 'search_farmacia_show_comune',
    defaultMessage: 'Mostra il filtro per comune',
  },
  show_localita: {
    id: 'search_farmacia_show_localita',
    defaultMessage: 'Mostra il filtro per località',
  },
  only_active_turno: {
    id: 'search_farmacia_only_active_turno',
    defaultMessage:
      'Mostra solo il turno del giorno selezionato (anziché tutti i periodi)',
  },
  show_cap: {
    id: 'search_farmacia_show_cap',
    defaultMessage: 'Mostra il CAP nella tabella dei risultati',
  },
  show_provincia: {
    id: 'search_farmacia_show_provincia',
    defaultMessage: 'Mostra la provincia nella tabella dei risultati',
  },
  show_localita_colonna: {
    id: 'search_farmacia_show_localita_colonna',
    defaultMessage: 'Mostra la colonna Località nella tabella dei risultati',
  },
  show_map: {
    id: 'search_farmacia_show_map',
    defaultMessage: 'Mostra la mappa con le farmacie trovate',
  },
  show_opendata_csv_link: {
    id: 'search_farmacia_show_opendata_csv_link',
    defaultMessage:
      'Mostra il link al CSV open data con tutti i turni delle farmacie',
  },
});

export function SearchFarmaciaSchema({ formData, intl }) {
  return {
    title: intl.formatMessage(messages.search_farmacie_block_title),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: [
          'title',
          'search_type',
          'show_area_territoriale',
          'show_comune',
          'show_localita',
          'only_active_turno',
          'show_cap',
          'show_provincia',
          'show_localita_colonna',
          'show_map',
          'show_opendata_csv_link',
        ],
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
      show_area_territoriale: {
        title: intl.formatMessage(messages.show_area_territoriale),
        type: 'boolean',
        default: formData?.search_type !== 'vacations',
      },
      show_comune: {
        title: intl.formatMessage(messages.show_comune),
        type: 'boolean',
        default: formData?.search_type === 'vacations',
      },
      show_localita: {
        title: intl.formatMessage(messages.show_localita),
        type: 'boolean',
        default: formData?.search_type === 'vacations',
      },
      only_active_turno: {
        title: intl.formatMessage(messages.only_active_turno),
        type: 'boolean',
        default: false,
      },
      show_cap: {
        title: intl.formatMessage(messages.show_cap),
        type: 'boolean',
        default: true,
      },
      show_provincia: {
        title: intl.formatMessage(messages.show_provincia),
        type: 'boolean',
        default: true,
      },
      show_localita_colonna: {
        title: intl.formatMessage(messages.show_localita_colonna),
        type: 'boolean',
        default: true,
      },
      show_map: {
        title: intl.formatMessage(messages.show_map),
        type: 'boolean',
        default: false,
      },
      show_opendata_csv_link: {
        title: intl.formatMessage(messages.show_opendata_csv_link),
        type: 'boolean',
        default: false,
      },
    },
    required: [],
  };
}
