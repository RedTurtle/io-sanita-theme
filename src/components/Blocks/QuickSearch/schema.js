import { defineMessages } from 'react-intl';

const messages = defineMessages({
  block_title: {
    id: 'quick_search_block_title',
    defaultMessage: 'Ricerca rapida',
  },
  title: {
    id: 'quick_search_title',
    defaultMessage: 'Titolo',
  },
  quickLinks: {
    id: 'quick_search_quickLinks',
    defaultMessage: 'Link veloci',
  },
  quickLinkLabel: {
    id: 'quick_search_quickLink_label',
    defaultMessage: 'Etichetta',
  },
  quickLinkURL: {
    id: 'quick_search_quickLink_url',
    defaultMessage: 'Link a',
  },
});

const QuickLinkSchema = ({ intl }) => ({
  title: intl.formatMessage(messages.quickLinks),
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['href', 'title'],
    },
  ],
  properties: {
    title: {
      title: intl.formatMessage(messages.quickLinkLabel),
    },
    href: {
      title: intl.formatMessage(messages.quickLinkURL),
      widget: 'object_browser',
      mode: 'link',
      selectedItemAttrs: ['Title', 'Description'],
      allowExternals: true,
    },
  },
  required: ['url', 'title'],
});

export function QuickSearchSchema({
  formData,
  intl,
  onChangeBlock,
  block,
  openObjectBrowser,
}) {
  return {
    title: intl.formatMessage(messages.block_title),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['title', 'quick_links'],
      },
    ],
    properties: {
      title: {
        title: intl.formatMessage(messages.title),
        default: 'Cerca nel sito',
      },
      quick_links: {
        title: intl.formatMessage(messages.quickLinks),
        widget: 'object_list',
        schema: QuickLinkSchema({ intl }),
      },
    },
    required: [],
  };
}
