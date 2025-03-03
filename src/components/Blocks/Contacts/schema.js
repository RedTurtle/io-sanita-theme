import { defineMessages } from 'react-intl';

const messages = defineMessages({
  linkMore: {
    id: 'contacts_linkMore',
    defaultMessage: 'Link ad altro',
  },
  linkMoreTitle: {
    id: 'contacts_linkMoreTitle',
    defaultMessage: 'Titolo per il link ad altro',
  },
  linkMoreHref: {
    id: 'contacts_linkMoreHref',
    defaultMessage: 'Link',
  },
  bg_color: {
    id: 'bg_color',
    defaultMessage: 'Colore di sfondo',
  },
  contacts_block_title: {
    id: 'contacts_block_title',
    defaultMessage: 'Contatti',
  },
});

export function ContactsSchema({
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
    title: intl.formatMessage(messages.contacts_block_title),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['bg_color'],
      },
      {
        id: 'more',
        title: intl.formatMessage(messages.linkMore),
        fields: ['linkMoreTitle', 'href'],
      },
    ],

    properties: {
      bg_color: {
        title: 'Colore di sfondo',
        default: 'none',
        widget: 'color_picker',
        default: 'bg-primary-lightest',
        colors: [
          {
            name: 'bg-primary-dark', //questa deve essere il nome una classe definita in io-sanita o bootstrap-italia
            label: 'Colore primario scuro',
          },
          {
            name: 'bg-primary-lightest', //questa deve essere il nome una classe definita in io-sanita o bootstrap-italia
            label: 'Colore primario chiaro',
          },
        ],
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
