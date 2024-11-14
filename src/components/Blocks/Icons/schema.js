import { defineMessages } from 'react-intl';

const messages = defineMessages({
  linkMore: {
    id: 'icons_linkMore',
    defaultMessage: 'Link ad altro',
  },
  linkMoreTitle: {
    id: 'icons_linkMoreTitle',
    defaultMessage: 'Titolo per il link ad altro',
  },
  linkMoreHref: {
    id: 'icons_linkMoreHref',
    defaultMessage: 'Link ad altro',
  },
  backgroundImage: {
    id: 'backgroundImage',
    defaultMessage: 'Immagine di sfondo',
  },
  alignCards: {
    id: 'alignCards',
    defaultMessage: 'Allinea le card al centro',
  },
  bg_color: {
    id: 'bg_color',
    defaultMessage: 'Colore di sfondo',
  },
  color_primary_light: {
    id: 'color_primary_light',
    defaultMessage: 'Primario chiaro',
  },
  color_primary_dark: {
    id: 'color_primary_dark',
    defaultMessage: 'Primario scuro',
  },
  color_transparent: {
    id: 'color_transparent',
    defaultMessage: 'Trasparente',
  },
});

export function IconsSchema({
  formData,
  intl,
  onChangeBlock,
  block,
  openObjectBrowser,
}) {
  formData.bg_color =
    ['primary', 'secondary'].indexOf(formData.bg_color ?? '') >= 0
      ? formData.bg_color == 'primary'
        ? 'bg-primary-lightest'
        : 'bg-primary-dark'
      : formData.bg_color;

  return {
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['background', 'bg_color', 'alignCards'],
      },
      {
        id: 'more',
        title: intl.formatMessage(messages.linkMore),
        fields: ['linkMoreTitle', 'href'],
      },
    ],

    properties: {
      background: {
        title: intl.formatMessage(messages.backgroundImage),
        widget: 'object_browser',
        mode: 'image',
        widgetOptions: {
          pattern_options: {
            selectableTypes: ['Image'],
            maximumSelectionSize: 1,
          },
        },
      },

      bg_color: {
        title: 'Colore di sfondo',
        default: 'none',
        widget: 'color_picker',
        default: 'bg-primary-lightest',
        colors: [
          {
            name: 'transparent',
            label: intl.formatMessage(messages.color_transparent),
          },
          {
            name: 'bg-primary-lightest',
            label: intl.formatMessage(messages.color_primary_light),
          },
          {
            name: 'bg-primary-dark',
            label: intl.formatMessage(messages.color_primary_dark),
          },
        ],
      },
      alignCards: {
        title: intl.formatMessage(messages.alignCards),
        type: 'boolean',
      },

      linkMoreTitle: {
        title: intl.formatMessage(messages.linkMoreTitle),
      },

      href: {
        title: intl.formatMessage(messages.linkMoreHref),
        widget: 'object_browser',
        mode: 'link',
        selectedItemAttrs: ['Title', 'Description'],
        allowExternals: true,
      },
    },
    required: [],
  };
}
