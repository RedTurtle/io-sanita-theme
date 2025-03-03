import { defineMessages } from 'react-intl';

const messages = defineMessages({
  image: {
    id: 'cta_image',
    defaultMessage: 'Immagine di sfondo',
  },
  // showImage: {
  //   id: 'cta_show_image',
  //   defaultMessage: 'Mostra immagine',
  // },
  default_image: {
    id: 'cta_default_image',
    defaultMessage: 'Immagine predefinita',
  },
  fullWidth: {
    id: 'cta_full_width',
    defaultMessage: 'Mostra a tutta larghezza',
  },
  ctaLinkTitle: {
    id: 'cta_linkTitle',
    defaultMessage: 'Titolo per il link della CTA',
  },
  ctaLink: {
    id: 'cta_link',
    defaultMessage: 'Link della CTA',
  },
  cta_block: {
    id: 'cta_block',
    defaultMessage: 'Blocco CTA',
  },
});

export function CTASchema({
  formData,
  intl,
  onChangeBlock,
  block,
  openObjectBrowser,
}) {
  return {
    title: intl.formatMessage(messages.cta_block),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: [
          'bg:noprefix',
          'showFullWidth',
          'defaultImage',
          'ctaImage',
          //'showImage',
          'ctaLinkTitle',
          'ctaLink',
        ],
      },
    ],

    properties: {
      'bg:noprefix': {
        title: 'Colore di sfondo',
        default: 'none',
        widget: 'color_picker',
        default: 'bg-primary-dark',
        colors: [
          {
            name: 'bg-primary-dark', //questa deve essere il nome una classe definita in io-sanita o bootstrap-italia
            label: 'Colore primario scuro',
          },
          {
            name: 'bg-primary-lighter', //questa deve essere il nome una classe definita in io-sanita o bootstrap-italia
            label: 'Colore primario chiaro',
          },
        ],
      },
      showFullWidth: {
        title: intl.formatMessage(messages.fullWidth),
        type: 'boolean',
        default: true,
      },
      defaultImage: {
        title: intl.formatMessage(messages.default_image),
        widget: 'select',

        choices: [
          ['default-1', 'Default 1'],
          ['default-2', 'Default 2'],
        ],
      },
      ctaImage: {
        title: intl.formatMessage(messages.image),
        widget: 'object_browser',
        mode: 'image',
        widgetOptions: {
          pattern_options: { selectableTypes: ['Image'] },
        },
      },
      // showImage: {
      //   title: intl.formatMessage(messages.showImage),
      //   type: 'boolean',
      //   default: false,
      //   isDisabled: (formData.ctaImage ?? []).length <= 0,
      // },

      ctaLinkTitle: {
        title: intl.formatMessage(messages.ctaLinkTitle),
      },
      ctaLink: {
        title: intl.formatMessage(messages.ctaLink),
        widget: 'linkTo',
        openObjectBrowser,
        showTarget: true,
        data: formData,
        linkField: 'ctaLink',
      },
    },
    required: [],
  };
}
