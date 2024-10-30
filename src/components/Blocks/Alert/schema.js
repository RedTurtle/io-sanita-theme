import { defineMessages } from 'react-intl';

const messages = defineMessages({
  bg_color: {
    id: 'alert_bg_olor',
    defaultMessage: 'Colore di sfondo',
  },
  color_warning: {
    id: 'alert_color_warning',
    defaultMessage: 'Giallo',
  },
  color_orange: {
    id: 'alert_color_orange',
    defaultMessage: 'Arancione',
  },
  color_danger: {
    id: 'alert_color_danger',
    defaultMessage: 'Rosso',
  },
  image: {
    id: 'alert_image',
    defaultMessage: 'Immagine',
  },
  image_size: {
    id: 'alert_image_size',
    defaultMessage: 'Dimensione immagine',
  },
  validity: {
    id: 'alert_validity',
    defaultMessage: 'Periodo di visibilità',
  },
  start_date: {
    id: 'alert_startDate',
    defaultMessage: 'Inizio',
  },
  end_date: {
    id: 'alert_endDate',
    defaultMessage: 'Scadenza',
  },
  start_date_description: {
    id: 'alert_startDate_descr',
    defaultMessage:
      'Se questo campo è compilato il banner verrà mostrato a partire da questa data. Se entrambi i campi "Inizio" e "Scadenza" sono vuoti il banner è sempre visibile.',
  },
  end_date_description: {
    id: 'alert_endDate_descr',
    defaultMessage:
      'Se questo campo è compilato il banner verrà mostrato fino a questa data. Se entrambi i campi "Inizio" e "Scadenza" sono vuoti il banner è sempre visibile.',
  },
});

export function AlertSchema({
  formData,
  intl,
  onChangeBlock,
  block,
  openObjectBrowser,
}) {
  if (formData.color && formData.color.indexOf('bg-alert') < 0) {
    formData.color = 'bg-alert-' + formData.color;
  }
  return {
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['color', 'image', 'sizeImage'],
      },
      {
        id: 'dates',
        title: intl.formatMessage(messages.validity),
        fields: ['startDate', 'endDate'],
      },
    ],

    properties: {
      color: {
        title: intl.formatMessage(messages.bg_color),
        default: 'warning',
        widget: 'color_picker',
        colors: [
          {
            name: 'bg-alert-info',
            label: intl.formatMessage(messages.color_warning),
          },
          {
            name: 'bg-alert-warning',
            label: intl.formatMessage(messages.color_orange),
          },
          {
            name: 'bg-alert-danger',
            label: intl.formatMessage(messages.color_danger),
          },
        ],
      },

      image: {
        title: intl.formatMessage(messages.image),
        //widget: 'object_browser',
        widget: 'file',
        //mode: 'image',
        // widgetOptions: {
        //   pattern_options: { selectableTypes: ['Image'] },
        // },
      },
      sizeImage: {
        title: intl.formatMessage(messages.image_size),
        widget: 'image_size',
        default: 's',
      },
      startDate: {
        title: intl.formatMessage(messages.start_date),
        widget: 'datetime',
        description: intl.formatMessage(messages.start_date_description),
      },
      endDate: {
        title: intl.formatMessage(messages.end_date),
        widget: 'datetime',
        description: intl.formatMessage(messages.end_date_description),
      },
    },
    required: [],
  };
}
